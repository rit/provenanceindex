#!/bin/bash

gomplate -f $@ | kubectl apply -f -
