#! /bin/bash

set -eu

VERSION_OLD=$1
VERSION_NEW=$2

PG_VAR_DIR_OLD="/var/lib/postgresql/${VERSION_OLD}"
PG_BIN_DIR_OLD="/usr/lib/postgresql/${VERSION_OLD}/bin"
PG_CONF_OLD="/etc/postgresql/${VERSION_OLD}/main/postgresql.conf"

PG_VAR_DIR_NEW="/var/lib/postgresql/${VERSION_NEW}"
PG_BIN_DIR_NEW="/usr/lib/postgresql/${VERSION_NEW}/bin"
PG_CONF_NEW="/etc/postgresql/${VERSION_NEW}/main/postgresql.conf"

if [ -d $PG_VAR_DIR_OLD ] ; then
  echo "[$(date +%Y-%m%-dT%H:%m)] Starting conversion"
  systemctl stop postgresql
  pushd /tmp
  sudo -H -u postgres /usr/lib/postgresql/9.4/bin/pg_upgrade \
       --link \
       -b $PG_BIN_DIR_OLD \
       -B $PG_BIN_DIR_NEW \
       -d $PG_VAR_DIR_OLD \
       -D $PG_VAR_DIR_NEW \
       -o ' -c config_file='$PG_CONF_OLD \
       -O ' -c config_file='$PG_CONF_NEW
  pg_dropcluster $VERSION_OLD main
  popd
  rm -fr $PG_VAR_DIR_OLD
  echo "[$(date +%Y-%m%-dT%H:%m)] Conversion complete"
  echo
fi
