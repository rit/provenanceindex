#!/usr/bin/env python

"""
Generate yaml and config files
"""

from __future__ import print_function
import argparse
import os
import sys

from mako.template import Template


def render(template, ctx=None):
    ctx = ctx or {}
    compiled = Template(template)
    merged = dict(os.environ, **ctx)
    return compiled.render(**merged)


def transform(template, out=None, ctx=None):
    out = out or sys.stdout
    out.write(render(template, ctx=ctx))


def _load_ctx(name):
    import yaml
    with open(name) as handle:
        return yaml.load(handle)


def parse_args(args):
    parser = argparse.ArgumentParser()
    parser.add_argument('file',
            default=None,
            nargs='?',
            help='name of the template file')
    parser.add_argument('-e', '--env',
            dest="env",
            help="load env var from yaml file")
    namespace = parser.parse_args(args)
    return namespace


def drive(args, out=None):
    if not out:
        out = sys.stdout
    ns = parse_args(args)
    inp = sys.stdin
    if ns.file:
        inp = open(ns.file)
    template = inp.read()
    ctx = {}
    if ns.env:
        ctx = _load_ctx(ns.env) or {}

    try:
        transform(template, out, ctx=ctx)
    except AssertionError as err:
        print(err)
        sys.exit(1)
    inp.close()


if __name__ == '__main__':
    args = sys.argv[1:]
    drive(args)
    sys.exit(0)
