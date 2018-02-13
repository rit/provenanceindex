#!/bin/bash

cat $@ | ./kapply | kubectl apply -f -
