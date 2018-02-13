#!/usr/bin/env python

"""
Generate yaml and config files
"""

from __future__ import print_function
import argparse
import os
import sys

from mako.template import Template


def render(template):
    compiled = Template(template)
    return compiled.render(**os.environ)


def transform(template, out):
    out.write(render(template))


def parse_args(args):
    parser = argparse.ArgumentParser()
    parser.add_argument('file',
            default=None,
            nargs='?',
            help='name of the template file')
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
    transform(template, out)
    inp.close()


if __name__ == '__main__':
    args = sys.argv[1:]
    drive(args)
    sys.exit(0)
