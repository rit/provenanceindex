#!/bin/bash

cat $@ | ./bin/kapply | kubectl apply -f -
