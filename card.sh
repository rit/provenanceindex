#!/usr/bin/env sh

git fetch origin
git worktree add -b card/$1 ../cards/$1 master
