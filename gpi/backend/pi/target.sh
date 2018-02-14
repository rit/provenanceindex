#!/bin/sh
# https://pypi.python.org/pypi/trggr


if [[ $@ == *.sh ]] ; then
  sh $@
elif [[ $@ == *.yaml ]] ; then
  ./apply.sh $@
fi
