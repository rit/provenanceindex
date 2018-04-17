#!/bin/bash

./bin/kapply.py $@ | kubectl apply -f -
