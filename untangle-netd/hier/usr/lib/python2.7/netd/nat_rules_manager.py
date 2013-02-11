import os
import sys
import subprocess
import datetime
import traceback
from netd.iptables_util import IptablesUtil

# This class is responsible for writing /etc/untangle-netd/iptables-rules.d/200-nat-rules
# based on the settings object passed from sync-settings.py
class NatRulesManager:
    defaultFilename = "/etc/untangle-netd/iptables-rules.d/200-nat-rules"
    filename = defaultFilename
    file = None

    def write_nat_rules( self, settings, verbosity=0 ):

        if settings == None or 'natRules' not in settings or 'list' not in settings['natRules']:
            print "ERROR: Missing NAT Rules"
            return
        
        nat_rules = settings['natRules']['list'];

        for nat_rule in nat_rules:
            if 'enabled' in nat_rule and not nat_rule['enabled']:
                continue
            if 'matchers' not in nat_rule or 'list' not in nat_rule['matchers']:
                continue
            if 'ruleId' not in nat_rule:
                continue

            if 'auto' in nat_rule and nat_rule['auto']:
                target = " -j MASQUERADE "
            elif 'newSource' in nat_rule:
                target = " -j SNAT --to-source %s " % str(nat_rule['newSource'])
            else:
                print "ERROR: invalid nat target: %s" + str(nat_rule)

            description = "NAT Rule #%i" % int(nat_rule['ruleId'])
            iptables_conditions = IptablesUtil.conditions_to_iptables_string( nat_rule['matchers']['list'], description, verbosity );

            iptables_commands = [ "${IPTABLES} -t nat -A nat-rules " + ipt + target for ipt in iptables_conditions ]

            # print "nat_rule: %s" % str(nat_rule)
            # print "target:"
            # print target
            # print "iptables_conditions:"
            # for ipt in iptables_conditions:
            #     print ipt
            # print "iptables_commands:"
            # for cmd in iptables_commands:
            #     print cmd

            self.file.write("# %s\n" % description);
            for cmd in iptables_commands:
                self.file.write(cmd + "\n")
            self.file.write("\n");

    def write_ingress_nat_rules( self, intf, interfaces ):

        for other_intf in interfaces:

            # skip self
            if other_intf['interfaceId'] == intf['interfaceId']:
                continue;

            # ignore interfaces bridged with interface
            if other_intf['config'] == 'bridged' and other_intf['bridgedTo'] == intf['interfaceId']:
                continue;
            
            self.file.write("# NAT ingress traffic coming from \"%s\"" % intf['name'] + "\n");
            self.file.write("${IPTABLES} -t nat -A nat-rules -m connmark --mark 0x%0.4X/0xffff -m comment --comment \"NAT traffic, %i -> %i (ingress setting)\" -j MASQUERADE" % 
                            ( ((other_intf['interfaceId'] << 8) + intf['interfaceId']),
                              intf['interfaceId'],
                              other_intf['interfaceId'] ))
            self.file.write("\n\n");

            self.file.write("# block traffic to NATd interface \"%s\" (except port forwarded/DNAT traffic)" % intf['name'] + "\n");
            self.file.write("${IPTABLES} -t filter -A nat-reverse-filter -m connmark --mark 0x%0.4X/0xffff -m conntrack ! --ctstate DNAT -m comment --comment \"Block traffic to NATd interace, %i -> %i (ingress setting)\" -j REJECT" % 
                            ( ((intf['interfaceId'] << 8) + other_intf['interfaceId']),
                              other_intf['interfaceId'],
                              intf['interfaceId'] ))
            self.file.write("\n\n");

        return

    def write_egress_nat_rules( self, intf, interfaces ):

        for other_intf in interfaces:

            # skip self
            if other_intf['interfaceId'] == intf['interfaceId']:
                continue;

            # ignore interfaces bridged with interface
            if other_intf['config'] == 'bridged' and other_intf['bridgedTo'] == intf['interfaceId']:
                continue;
            
            self.file.write("# NAT egress traffic exiting \"%s\"" % intf['name'] + "\n");
            self.file.write("${IPTABLES} -t nat -A nat-rules -m connmark --mark 0x%0.4X/0xffff -m comment --comment \"NAT traffic, %i -> %i (egress setting)\" -j MASQUERADE" % 
                            ( ((intf['interfaceId'] << 8) + other_intf['interfaceId']),
                              other_intf['interfaceId'],
                              intf['interfaceId'] ))
            self.file.write("\n\n");

            self.file.write("# block traffic from NATd interface \"%s\" (except port forwarded/DNAT traffic)" % intf['name'] + "\n");
            self.file.write("${IPTABLES} -t filter -A nat-reverse-filter -m connmark --mark 0x%0.4X/0xffff -m conntrack ! --ctstate DNAT -m comment --comment \"Block traffic to NATd interace, %i -> %i (egress setting)\" -j REJECT" % 
                            ( ((other_intf['interfaceId'] << 8) + intf['interfaceId']),
                              intf['interfaceId'],
                              other_intf['interfaceId'] ))
            self.file.write("\n\n");

        return

    def write_interface_nat_options( self, settings, verbosity=0 ):

        interfaces = settings['interfaces']['list']
        for interface_settings in interfaces:

            if 'v4NatEgressTraffic' in interface_settings and interface_settings['v4NatEgressTraffic']:
                self.write_egress_nat_rules( interface_settings, interfaces )

            if 'v4NatIngressTraffic' in interface_settings and interface_settings['v4NatIngressTraffic']:
                self.write_ingress_nat_rules( interface_settings, interfaces )

        return

    def sync_settings( self, settings, prefix="", verbosity=0 ):
        if verbosity > 1: print "NatRulesManager: sync_settings()"

        self.filename = prefix + self.defaultFilename
        self.fileDir = os.path.dirname( self.filename )
        if not os.path.exists( self.fileDir ):
            os.makedirs( self.fileDir )

        self.file = open( self.filename, "w+" )
        self.file.write("## Auto Generated on %s\n" % datetime.datetime.now());
        self.file.write("## DO NOT EDIT. Changes will be overwritten.\n");
        self.file.write("\n\n");

        self.file.write("# Create (if needed) and flush nat-rules chain" + "\n");
        self.file.write("${IPTABLES} -t nat -N nat-rules 2>/dev/null" + "\n");
        self.file.write("${IPTABLES} -t nat -F nat-rules >/dev/null 2>&1" + "\n" + "\n");

        self.file.write("# Call nat-rules chain from POSTROUTING chain to SNAT traffic" + "\n");
        self.file.write("${IPTABLES} -t nat -D POSTROUTING -m comment --comment \"SNAT rules\" -j nat-rules >/dev/null 2>&1" + "\n");
        self.file.write("${IPTABLES} -t nat -A POSTROUTING -m comment --comment \"SNAT rules\" -j nat-rules" + "\n" + "\n");

        self.file.write("# Create (if needed) and flush nat-reverse-filter chain" + "\n");
        self.file.write("${IPTABLES} -t filter -N nat-reverse-filter 2>/dev/null" + "\n");
        self.file.write("${IPTABLES} -t filter -F nat-reverse-filter >/dev/null 2>&1" + "\n" + "\n");

        self.file.write("# Call nat-reverse-filter chain from FORWARD chain to block traffic to NATd interface from \"outside\" " + "\n");
        self.file.write("${IPTABLES} -t filter -D FORWARD -m comment --comment \"block traffic to NATd interfaces\" -j nat-reverse-filter >/dev/null 2>&1" + "\n");
        self.file.write("${IPTABLES} -t filter -A FORWARD -m comment --comment \"block traffic to NATd interfaces\" -j nat-reverse-filter" + "\n" + "\n");

        self.write_nat_rules( settings, verbosity );
        self.write_interface_nat_options( settings, verbosity );

        self.file.flush();
        self.file.close();

        if verbosity > 0:
            print "NatRulesManager: Wrote %s" % self.filename

        return
