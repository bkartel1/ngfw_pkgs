XORG_CONF_VESA=xorg-untangle-vesa.conf

abort() {
for i in $(seq 50) ; do echo ; done
cat <<EOF
The server has failed to properly detect the video & monitor settings.

Try restarting the server and selecting a different video-mode boot
option from the boot menu.
EOF
for i in $(seq 10) ; do echo ; done
}

if [ `tty` = "/dev/tty1" ] ; then
  while true ; do
    ps aux | awk '/^(xinit|X|startx)/ { print $2 }' | xargs kill -9 2> /dev/null
    START_TIME=$(date +%s)
    grep -q ut-video /proc/cmdline && export XORGCONFIG=$XORG_CONF_VESA
    startx
    STOP_TIME=$(date +%s)
    if [ $(($STOP_TIME - $START_TIME)) -lt 60 ] ; then
      export XORGCONFIG=$XORG_CONF_VESA
      startx
      failures=$(($failures + 1))
      [ $failures -gt 5 ] && abort && exit
    fi
  done
fi
