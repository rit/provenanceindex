import os
from StringIO import StringIO

from kapply import render
from kapply import main



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
    inp = StringIO(template)
    out = StringIO()
    main(inp, out)

    expected = """\
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>\
    """
    assert out.getvalue() == expected
