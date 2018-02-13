import os
from StringIO import StringIO

from pytest import mark

from kapply import drive
from kapply import parse_args
from kapply import render
from kapply import transform


def test_environment_variables():
    home = render("HOME: ${HOME}")
    assert home == "HOME: {}".format(os.environ['HOME'])


def test_write_to_stdout():
    template = """\
<ul>
    %for num in [1, 2, 3]:
    <li>${num}</li>
    %endfor
</ul>\
    """
    out = StringIO()
    transform(template, out)

    expected = """\
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>\
    """
    assert out.getvalue() == expected


def test_parse_args():
    args = ['template.txt']
    inp = parse_args(args)
    assert inp.file == 'template.txt'


def test_read_input_from_file(tmpdir):
    template = tmpdir.join('home.txt')
    template.write('math: ${1+2}\n')
    path = str(template.realpath())
    args = [path]
    out = StringIO()
    drive(args, out)
    assert out.getvalue() == 'math: 3\n'
