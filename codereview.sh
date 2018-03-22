#!/usr/bin/env sh

git fetch origin
git worktree add --track  -b review/$1 ../codereviews/$1 origin/$1
