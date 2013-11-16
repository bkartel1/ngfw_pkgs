#
# $HeadURL$
# Copyright (c) 2007-2008 Untangle, Inc.
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License, version 2,
# as published by the Free Software Foundation.
#
# This program is distributed in the hope that it will be useful, but
# AS-IS and WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE, TITLE, or
# NONINFRINGEMENT.  See the GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
#
require "singleton"

module Alpaca::OS
  include Logging

  @@current_os = nil
  @@managers = Hash.new

  def []( name )
    manager( name )
  end

  def manager( name )
    name = name.camelize
    f_name = name.underscore
    base = self.class

    # Need to cache the one that succeeded because there is a bug in
    # require_dependency that it caches even when the file is not found.    
    # We lookup the base rather than the class to enable development mode.
    base = @@managers[name] if @@managers[name] != nil
        
    while ( !base.nil? && ( base.include?( Alpaca::OS )))
      fileName = "#{base.name.underscore.sub( /os$/, f_name )}.rb"
      
      begin
        # logger.debug("Trying " + fileName)
        require_dependency( fileName )

        ## This is the fully qualified name of the manager
        fqn = base.name.sub( /OS$/, name )

        ## Have to return the object
        ## The eval is the lesser of the two evals
        # b = Module
        # fqn.split( "::" ).each { |p| b = b.const_get(  p ) }
        ## assuming it implements singleton
        # return b.instance
          
        manager = eval( "#{fqn}.instance" )

        ## Only return managers.
        if manager.is_a? Alpaca::OS::ManagerBase
          @@managers[name] = base
          return manager
        end

        logger.debug( "#{manager} does not include ManagerBase" )
      rescue LoadError => load_error
        logger.debug( "Unable to load the file #{fileName}, #{load_error}" )
      end

      base = base.superclass
    end
      
    raise LoadError.new( "Unable to load the OS Manager #{name}" )
  end

  def self.define_os( current_os )
    logger.warn( "Redefining the OS" ) unless @@current_os.nil?

    ## Force it to include singleton
    current_os.send :include, Singleton unless current_os.include?( Singleton )

    @@current_os = current_os.instance
  end

  def self.current_os
    raise LoadError.new( "An OS is presently not selected" ) if @@current_os.nil?

    ## Return the current os.
    @@current_os
  end
  
end
