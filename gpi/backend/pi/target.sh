#!/bin/sh
# https://pypi.python.org/pypi/trggr


if [[ $@ == *.sh ]] ; then
  sh $@
elif [[ $@ == *.mako ]] ; then
  ./bin/kapply.py $@
elif [[ $@ == *.yaml ]] ; then
  ./apply.sh $@
fi
