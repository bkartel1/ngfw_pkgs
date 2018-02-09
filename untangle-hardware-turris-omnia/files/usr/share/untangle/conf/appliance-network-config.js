{
    "blockDuringRestarts": false,
    "blockInvalidPackets": true,
    "blockReplayPackets": false,
    "bypassRules": {
        "javaClass": "java.util.LinkedList",
        "list": [
            {
                "bypass": true,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "DST_PORT",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.BypassRuleCondition",
                            "value": "53"
                        }
                    ]
                },
                "description": "Bypass DNS Sessions",
                "enabled": false,
                "javaClass": "com.untangle.uvm.network.BypassRule",
                "ruleId": 1
            },
            {
                "bypass": true,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "DST_PORT",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.BypassRuleCondition",
                            "value": "5060"
                        }
                    ]
                },
                "description": "Bypass VoIP (SIP) Sessions",
                "enabled": true,
                "javaClass": "com.untangle.uvm.network.BypassRule",
                "ruleId": 2
            },
            {
                "bypass": true,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "DST_PORT",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.BypassRuleCondition",
                            "value": "4569"
                        }
                    ]
                },
                "description": "Bypass VoIP (IAX2) Sessions",
                "enabled": true,
                "javaClass": "com.untangle.uvm.network.BypassRule",
                "ruleId": 3
            },
            {
                "bypass": true,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "DST_PORT",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.BypassRuleCondition",
                            "value": "1723"
                        },
                        {
                            "conditionType": "PROTOCOL",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.BypassRuleCondition",
                            "value": "TCP"
                        }
                    ]
                },
                "description": "Bypass PPTP Sessions",
                "enabled": true,
                "javaClass": "com.untangle.uvm.network.BypassRule",
                "ruleId": 4
            }
        ]
    },
    "devices": {
        "javaClass": "java.util.LinkedList",
        "list": [
            {
                "deviceName": "eth0",
                "duplex": "AUTO",
                "javaClass": "com.untangle.uvm.network.DeviceSettings"
            },
            {
                "deviceName": "eth1",
                "duplex": "AUTO",
                "javaClass": "com.untangle.uvm.network.DeviceSettings"
            },
            {
                "deviceName": "eth2",
                "duplex": "AUTO",
                "javaClass": "com.untangle.uvm.network.DeviceSettings"
            },
            {
                "deviceName": "wlan0",
                "duplex": "AUTO",
                "javaClass": "com.untangle.uvm.network.DeviceSettings"
            },
            {
                "deviceName": "wlan1",
                "duplex": "AUTO",
                "javaClass": "com.untangle.uvm.network.DeviceSettings"
            }
        ]
    },
    "dhcpAuthoritative": true,
    "dnsSettings": {
        "javaClass": "com.untangle.uvm.network.DnsSettings",
        "localServers": {
            "javaClass": "java.util.LinkedList",
            "list": []
        },
        "staticEntries": {
            "javaClass": "java.util.LinkedList",
            "list": []
        }
    },
    "domainName": "example.com",
    "dynamicDnsServiceEnabled": false,
    "enableSipNatHelper": false,
    "forwardFilterRules": {
        "javaClass": "java.util.LinkedList",
        "list": []
    },
    "hostName": "untangle",
    "httpPort": 80,
    "httpsPort": 443,
    "accessRules": {
        "javaClass": "java.util.LinkedList",
        "list": [
            {
                "blocked": false,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "DST_PORT",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "22"
                        },
                        {
                            "conditionType": "PROTOCOL",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "TCP"
                        }
                    ]
                },
                "description": "Allow SSH",
                "enabled": true,
                "ipv6Enabled": false,
                "javaClass": "com.untangle.uvm.network.FilterRule",
                "readOnly": true,
                "ruleId": 1
            },
            {
                "blocked": false,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "DST_PORT",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "443"
                        },
                        {
                            "conditionType": "PROTOCOL",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "TCP"
                        },
                        {
                            "conditionType": "SRC_INTF",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "wan"
                        }
                    ]
                },
                "description": "Allow HTTPS on WANs",
                "enabled": true,
                "ipv6Enabled": false,
                "javaClass": "com.untangle.uvm.network.FilterRule",
                "readOnly": true,
                "ruleId": 2
            },
            {
                "blocked": false,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "DST_PORT",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "443"
                        },
                        {
                            "conditionType": "PROTOCOL",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "TCP"
                        },
                        {
                            "conditionType": "SRC_INTF",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "non_wan"
                        }
                    ]
                },
                "description": "Allow HTTPS on non-WANs",
                "enabled": true,
                "ipv6Enabled": true,
                "javaClass": "com.untangle.uvm.network.FilterRule",
                "readOnly": true,
                "ruleId": 3
            },
            {
                "blocked": false,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "PROTOCOL",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "ICMP"
                        }
                    ]
                },
                "description": "Allow PING",
                "enabled": true,
                "ipv6Enabled": true,
                "javaClass": "com.untangle.uvm.network.FilterRule",
                "readOnly": true,
                "ruleId": 4
            },
            {
                "blocked": false,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "DST_PORT",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "53"
                        },
                        {
                            "conditionType": "PROTOCOL",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "TCP,UDP"
                        },
                        {
                            "conditionType": "SRC_INTF",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "non_wan"
                        }
                    ]
                },
                "description": "Allow DNS on non-WANs",
                "enabled": true,
                "ipv6Enabled": true,
                "javaClass": "com.untangle.uvm.network.FilterRule",
                "readOnly": true,
                "ruleId": 5
            },
            {
                "blocked": false,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "DST_PORT",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "67"
                        },
                        {
                            "conditionType": "PROTOCOL",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "UDP"
                        },
                        {
                            "conditionType": "SRC_INTF",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "non_wan"
                        }
                    ]
                },
                "description": "Allow DHCP on non-WANs",
                "enabled": true,
                "ipv6Enabled": true,
                "javaClass": "com.untangle.uvm.network.FilterRule",
                "readOnly": true,
                "ruleId": 6
            },
            {
                "blocked": false,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "DST_PORT",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "80"
                        },
                        {
                            "conditionType": "PROTOCOL",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "TCP"
                        },
                        {
                            "conditionType": "SRC_INTF",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "non_wan"
                        }
                    ]
                },
                "description": "Allow HTTP on non-WANs",
                "enabled": true,
                "ipv6Enabled": true,
                "javaClass": "com.untangle.uvm.network.FilterRule",
                "readOnly": true,
                "ruleId": 7
            },
            {
                "blocked": false,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "DST_PORT",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "161"
                        },
                        {
                            "conditionType": "PROTOCOL",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "UDP"
                        },
                        {
                            "conditionType": "SRC_INTF",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "non_wan"
                        }
                    ]
                },
                "description": "Allow SNMP on non-WANs",
                "enabled": true,
                "ipv6Enabled": true,
                "javaClass": "com.untangle.uvm.network.FilterRule",
                "readOnly": true,
                "ruleId": 8
            },
            {
                "blocked": false,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "PROTOCOL",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "AH,ESP"
                        }
                    ]
                },
                "description": "Allow AH/ESP for IPsec",
                "enabled": true,
                "ipv6Enabled": true,
                "javaClass": "com.untangle.uvm.network.FilterRule",
                "readOnly": true,
                "ruleId": 9
            },
            {
                "blocked": false,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "PROTOCOL",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "UDP"
                        },
                        {
                            "conditionType": "DST_PORT",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "500"
                        }
                    ]
                },
                "description": "Allow IKE for IPsec",
                "enabled": true,
                "ipv6Enabled": true,
                "javaClass": "com.untangle.uvm.network.FilterRule",
                "readOnly": true,
                "ruleId": 10
            },
            {
                "blocked": false,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "PROTOCOL",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "UDP"
                        },
                        {
                            "conditionType": "DST_PORT",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "4500"
                        }
                    ]
                },
                "description": "Allow NAT-T for IPsec",
                "enabled": true,
                "ipv6Enabled": true,
                "javaClass": "com.untangle.uvm.network.FilterRule",
                "readOnly": true,
                "ruleId": 11
            },
            {
                "blocked": false,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "PROTOCOL",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "UDP"
                        },
                        {
                            "conditionType": "DST_PORT",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "1701"
                        }
                    ]
                },
                "description": "Allow L2TP",
                "enabled": true,
                "ipv6Enabled": true,
                "javaClass": "com.untangle.uvm.network.FilterRule",
                "readOnly": true,
                "ruleId": 12
            },
            {
                "blocked": false,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": [
                        {
                            "conditionType": "PROTOCOL",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "UDP"
                        },
                        {
                            "conditionType": "DST_PORT",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "1194"
                        },
                        {
                            "conditionType": "SRC_INTF",
                            "invert": false,
                            "javaClass": "com.untangle.uvm.network.FilterRuleCondition",
                            "value": "wan"
                        }
                    ]
                },
                "description": "Allow OpenVPN",
                "enabled": true,
                "ipv6Enabled": true,
                "javaClass": "com.untangle.uvm.network.FilterRule",
                "readOnly": true,
                "ruleId": 13
            },
            {
                "blocked": true,
                "conditions": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "description": "Block All",
                "enabled": true,
                "ipv6Enabled": true,
                "javaClass": "com.untangle.uvm.network.FilterRule",
                "readOnly": true,
                "ruleId": 14
            }
        ]
    },
    "interfaces": {
        "javaClass": "java.util.LinkedList",
        "list": [
            {
                "addressed": true,
                "bridged": false,
                "configType": "ADDRESSED",
                "dhcpDnsOverride": "",
                "dhcpEnabled": false,
                "dhcpOptions": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "disabled": false,
                "hidden": false,
                "imqDev": "imq0",
                "interfaceId": 1,
                "isVlanInterface": false,
                "isWan": true,
                "isWirelessInterface": false,
                "javaClass": "com.untangle.uvm.network.InterfaceSettings",
                "name": "External",
                "physicalDev": "eth1",
                "raEnabled": false,
                "symbolicDev": "eth1",
                "systemDev": "eth1",
                "v4Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v4ConfigType": "AUTO",
                "v4NatEgressTraffic": true,
                "v4NatIngressTraffic": false,
                "v4PPPoEPassword": "",
                "v4PPPoEUsePeerDns": false,
                "v4PPPoEUsername": "",
                "v6Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v6ConfigType": "DISABLED",
                "vrrpAliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "vrrpEnabled": false,
                "wirelessPassword": "",
                "wirelessSsid": ""
            },
            {
                "addressed": true,
                "bridged": false,
                "configType": "ADDRESSED",
                "dhcpDnsOverride": "",
                "dhcpEnabled": true,
                "dhcpLeaseDuration": 86400,
                "dhcpOptions": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "dhcpRangeEnd": "192.168.11.200",
                "dhcpRangeStart": "192.168.11.100",
                "disabled": false,
                "interfaceId": 2,
                "isVlanInterface": false,
                "isWan": false,
                "isWirelessInterface": false,
                "javaClass": "com.untangle.uvm.network.InterfaceSettings",
                "name": "Internal",
                "physicalDev": "eth0",
                "raEnabled": false,
                "symbolicDev": "br.eth0",
                "systemDev": "eth0",
                "v4Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v4ConfigType": "STATIC",
                "v4NatEgressTraffic": false,
                "v4NatIngressTraffic": false,
                "v4PPPoEPassword": "",
                "v4PPPoEUsePeerDns": false,
                "v4PPPoEUsername": "",
                "v4StaticAddress": "192.168.11.1",
                "v4StaticNetmask": "255.255.0.0",
                "v4StaticPrefix": 16,
                "v6Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v6ConfigType": "STATIC",
                "vrrpAliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "vrrpEnabled": false,
                "wirelessPassword": "",
                "wirelessSsid": ""
            },
            {
                "addressed": false,
                "bridged": disabled,
                "bridgedTo": 2,
                "configType": "DISABLED",
                "dhcpDnsOverride": "",
                "dhcpEnabled": false,
                "dhcpOptions": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "disabled": true,
                "interfaceId": 3,
                "isVlanInterface": false,
                "isWan": false,
                "isWirelessInterface": false,
                "javaClass": "com.untangle.uvm.network.InterfaceSettings",
                "name": "eth2",
                "physicalDev": "eth2",
                "raEnabled": false,
                "supportedConfigTypes": [
                    "BRIDGED",
                    "DISABLED"
                ],
                "symbolicDev": "eth2",
                "systemDev": "eth2",
                "v4Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v4ConfigType": "STATIC",
                "v4NatEgressTraffic": false,
                "v4NatIngressTraffic": false,
                "v4PPPoEPassword": "",
                "v4PPPoEUsePeerDns": false,
                "v4PPPoEUsername": "",
                "v6Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v6ConfigType": "STATIC",
                "vrrpAliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "vrrpEnabled": false,
            },
            {
                "addressed": false,
                "bridged": true,
                "bridgedTo": 2,
                "configType": "BRIDGED",
                "dhcpDnsOverride": "",
                "dhcpEnabled": false,
                "dhcpOptions": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "disabled": false,
                "interfaceId": 4,
                "isVlanInterface": false,
                "isWan": false,
                "isWirelessInterface": true,
                "javaClass": "com.untangle.uvm.network.InterfaceSettings",
                "name": "Wifi 2Ghz",
                "physicalDev": "wlan0",
                "raEnabled": false,
                "supportedConfigTypes": [
                    "BRIDGED",
                    "DISABLED"
                ],
                "symbolicDev": "br.eth0",
                "systemDev": "wlan0",
                "v4Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v4ConfigType": "STATIC",
                "v4NatEgressTraffic": false,
                "v4NatIngressTraffic": false,
                "v4PPPoEPassword": "",
                "v4PPPoEUsePeerDns": false,
                "v4PPPoEUsername": "",
                "v6Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v6ConfigType": "STATIC",
                "vrrpAliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "vrrpEnabled": false,
                "wirelessChannel": -1,
                "wirelessEncryption": "WPA2",
                "wirelessPassword": "12345678",
                "wirelessSsid": "UntangleOmnia"
            },
            {
                "addressed": false,
                "bridged": true,
                "bridgedTo": 2,
                "configType": "BRIDGED",
                "dhcpDnsOverride": "",
                "dhcpEnabled": false,
                "dhcpOptions": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "disabled": false,
                "interfaceId": 5,
                "isVlanInterface": false,
                "isWan": false,
                "isWirelessInterface": true,
                "javaClass": "com.untangle.uvm.network.InterfaceSettings",
                "name": "Wifi 5Ghz",
                "physicalDev": "wlan1",
                "raEnabled": false,
                "supportedConfigTypes": [
                    "BRIDGED",
                    "DISABLED"
                ],
                "symbolicDev": "br.eth0",
                "systemDev": "wlan1",
                "v4Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v4ConfigType": "STATIC",
                "v4NatEgressTraffic": false,
                "v4NatIngressTraffic": false,
                "v4PPPoEPassword": "",
                "v4PPPoEUsePeerDns": false,
                "v4PPPoEUsername": "",
                "v6Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v6ConfigType": "STATIC",
                "vrrpAliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "vrrpEnabled": false,
                "wirelessChannel": 36,
                "wirelessEncryption": "WPA2",
                "wirelessPassword": "12345678",
                "wirelessSsid": "UntangleOmnia5"
            }
        ]
    },
    "javaClass": "com.untangle.uvm.network.NetworkSettings",
    "logBlockedSessions": false,
    "logBypassedSessions": true,
    "logLocalInboundSessions": false,
    "logLocalOutboundSessions": true,
    "natRules": {
        "javaClass": "java.util.LinkedList",
        "list": []
    },
    "portForwardRules": {
        "javaClass": "java.util.LinkedList",
        "list": []
    },
    "qosSettings": {
        "defaultPriority": 3,
        "dnsPriority": 1,
        "javaClass": "com.untangle.uvm.network.QosSettings",
        "openvpnPriority": 0,
        "pingPriority": 1,
        "qosEnabled": false,
        "qosPriorities": {
            "javaClass": "java.util.LinkedList",
            "list": [
                {
                    "downloadLimit": 100,
                    "downloadReservation": 50,
                    "javaClass": "com.untangle.uvm.network.QosPriority",
                    "priorityId": 1,
                    "priorityName": "Very High",
                    "uploadLimit": 100,
                    "uploadReservation": 50
                },
                {
                    "downloadLimit": 100,
                    "downloadReservation": 25,
                    "javaClass": "com.untangle.uvm.network.QosPriority",
                    "priorityId": 2,
                    "priorityName": "High",
                    "uploadLimit": 100,
                    "uploadReservation": 25
                },
                {
                    "downloadLimit": 100,
                    "downloadReservation": 12,
                    "javaClass": "com.untangle.uvm.network.QosPriority",
                    "priorityId": 3,
                    "priorityName": "Medium",
                    "uploadLimit": 100,
                    "uploadReservation": 12
                },
                {
                    "downloadLimit": 100,
                    "downloadReservation": 6,
                    "javaClass": "com.untangle.uvm.network.QosPriority",
                    "priorityId": 4,
                    "priorityName": "Low",
                    "uploadLimit": 100,
                    "uploadReservation": 6
                },
                {
                    "downloadLimit": 75,
                    "downloadReservation": 3,
                    "javaClass": "com.untangle.uvm.network.QosPriority",
                    "priorityId": 5,
                    "priorityName": "Limited",
                    "uploadLimit": 75,
                    "uploadReservation": 3
                },
                {
                    "downloadLimit": 50,
                    "downloadReservation": 2,
                    "javaClass": "com.untangle.uvm.network.QosPriority",
                    "priorityId": 6,
                    "priorityName": "Limited More",
                    "uploadLimit": 50,
                    "uploadReservation": 2
                },
                {
                    "downloadLimit": 10,
                    "downloadReservation": 2,
                    "javaClass": "com.untangle.uvm.network.QosPriority",
                    "priorityId": 7,
                    "priorityName": "Limited Severely",
                    "uploadLimit": 10,
                    "uploadReservation": 2
                }
            ]
        },
        "qosRules": {
            "javaClass": "java.util.LinkedList",
            "list": [
                {
                    "conditions": {
                        "javaClass": "java.util.LinkedList",
                        "list": [
                            {
                                "conditionType": "DST_PORT",
                                "invert": false,
                                "javaClass": "com.untangle.uvm.network.QosRuleCondition",
                                "value": "5060,5061"
                            },
                            {
                                "conditionType": "PROTOCOL",
                                "invert": false,
                                "javaClass": "com.untangle.uvm.network.QosRuleCondition",
                                "value": "TCP,UDP"
                            }
                        ]
                    },
                    "description": "VoIP (SIP) Traffic",
                    "enabled": true,
                    "javaClass": "com.untangle.uvm.network.QosRule",
                    "priority": 1,
                    "ruleId": 1
                },
                {
                    "conditions": {
                        "javaClass": "java.util.LinkedList",
                        "list": [
                            {
                                "conditionType": "DST_PORT",
                                "invert": false,
                                "javaClass": "com.untangle.uvm.network.QosRuleCondition",
                                "value": "4569"
                            },
                            {
                                "conditionType": "PROTOCOL",
                                "invert": false,
                                "javaClass": "com.untangle.uvm.network.QosRuleCondition",
                                "value": "TCP,UDP"
                            }
                        ]
                    },
                    "description": "VoIP (IAX) Traffic",
                    "enabled": true,
                    "javaClass": "com.untangle.uvm.network.QosRule",
                    "priority": 1,
                    "ruleId": 2
                }
            ]
        },
        "sshPriority": 0
    },
    "sendIcmpRedirects": true,
    "staticDhcpEntries": {
        "javaClass": "java.util.LinkedList",
        "list": []
    },
    "staticRoutes": {
        "javaClass": "java.util.LinkedList",
        "list": []
    },
    "stpEnabled": false,
    "strictArpMode": true,
    "upnpSettings": {
        "javaClass": "com.untangle.uvm.network.UpnpSettings",
        "listenPort": 5000,
        "secureMode": true,
        "upnpEnabled": true,
        "upnpRules": {
            "javaClass": "java.util.LinkedList",
            "list": [
                {
                    "allow": true,
                    "conditions": {
                        "javaClass": "java.util.LinkedList",
                        "list": [
                            {
                                "conditionType": "SRC_ADDR",
                                "invert": false,
                                "javaClass": "com.untangle.uvm.network.UpnpRuleCondition",
                                "value": "0.0.0.0/0"
                            },
                            {
                                "conditionType": "DST_PORT",
                                "invert": false,
                                "javaClass": "com.untangle.uvm.network.UpnpRuleCondition",
                                "value": "1024-65535"
                            },
                            {
                                "conditionType": "SRC_PORT",
                                "invert": false,
                                "javaClass": "com.untangle.uvm.network.UpnpRuleCondition",
                                "value": "1024-65535"
                            }
                        ]
                    },
                    "description": "Allow all",
                    "enabled": true,
                    "javaClass": "com.untangle.uvm.network.UpnpRule",
                    "ruleId": 1
                },
                {
                    "allow": false,
                    "conditions": {
                        "javaClass": "java.util.LinkedList",
                        "list": [
                            {
                                "conditionType": "SRC_ADDR",
                                "invert": false,
                                "javaClass": "com.untangle.uvm.network.UpnpRuleCondition",
                                "value": "0.0.0.0/0"
                            },
                            {
                                "conditionType": "DST_PORT",
                                "invert": false,
                                "javaClass": "com.untangle.uvm.network.UpnpRuleCondition",
                                "value": "0-65535"
                            },
                            {
                                "conditionType": "SRC_PORT",
                                "invert": false,
                                "javaClass": "com.untangle.uvm.network.UpnpRuleCondition",
                                "value": "0-65535"
                            }
                        ]
                    },
                    "description": "Deny all",
                    "enabled": true,
                    "javaClass": "com.untangle.uvm.network.UpnpRule",
                    "ruleId": 2
                }
            ]
        }
    },
    "publicUrlMethod": "external",
    "publicUrlAddress": "hostname.example.com",
    "publicUrlPort": 443,
    "version": 4,
    "virtualInterfaces": {
        "javaClass": "java.util.LinkedList",
        "list": [
            {
                "configType": "DISABLED",
                "interfaceId": 250,
                "isVirtualInterface": true,
                "isVlanInterface": false,
                "isWan": false,
                "isWirelessInterface": false,
                "javaClass": "com.untangle.uvm.network.InterfaceSettings",
                "name": "OpenVPN",
                "v4Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v4ConfigType": "AUTO",
                "v6Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v6ConfigType": "DISABLED",
                "vrrpAliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                }
            },
            {
                "configType": "DISABLED",
                "interfaceId": 251,
                "isVirtualInterface": true,
                "isVlanInterface": false,
                "isWan": false,
                "isWirelessInterface": false,
                "javaClass": "com.untangle.uvm.network.InterfaceSettings",
                "name": "L2TP",
                "v4Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v4ConfigType": "AUTO",
                "v6Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v6ConfigType": "DISABLED",
                "vrrpAliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                }
            },
            {
                "configType": "DISABLED",
                "interfaceId": 252,
                "isVirtualInterface": true,
                "isVlanInterface": false,
                "isWan": false,
                "isWirelessInterface": false,
                "javaClass": "com.untangle.uvm.network.InterfaceSettings",
                "name": "XAUTH",
                "v4Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v4ConfigType": "AUTO",
                "v6Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v6ConfigType": "DISABLED",
                "vrrpAliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                }
            },
            {
                "configType": "DISABLED",
                "interfaceId": 253,
                "isVirtualInterface": true,
                "isVlanInterface": false,
                "isWan": false,
                "isWirelessInterface": false,
                "javaClass": "com.untangle.uvm.network.InterfaceSettings",
                "name": "GRE",
                "v4Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v4ConfigType": "AUTO",
                "v6Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v6ConfigType": "DISABLED",
                "vrrpAliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                }
            },
            {
                "configType": "DISABLED",
                "interfaceId": 200,
                "isVirtualInterface": true,
                "isVlanInterface": false,
                "isWan": true,
                "isWirelessInterface": false,
                "javaClass": "com.untangle.uvm.network.InterfaceSettings",
                "name": "tunnel-ExpressVPN",
                "v4Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v4ConfigType": "AUTO",
                "v6Aliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                },
                "v6ConfigType": "DISABLED",
                "vrrpAliases": {
                    "javaClass": "java.util.LinkedList",
                    "list": []
                }
            }
        ]
    },
    "vlansEnabled": true
}

