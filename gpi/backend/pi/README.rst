Running arches locally:
=======================

You will need docker-compose_ (included with `Docker for Mac`_)


Creating PIR development docker image:
--------------------------------------

From the root directory of the this repo, cd into `gpi/backend/pi`, then run: 

  make pir_local_docker_image


Starting arches locally:
------------------------

cd into `gpi/backend/pi/piserver`, then run:

  docker-compose up -d



Running Django Commands inside the Running Container:
-----------------------------------------------------

First attach to the running container with this command:

  docker-compose exec pir bash


You should be greeted at the bash shell where you would enter Django commands.


Install Bower Components:
-------------------------

From inside the running container, cd into `/app/piserver/piserver`, then run:

  bower install --allow-root



Seeing Arches in the Browser:
-----------------------------

Visit: http://0.0.0.0:8000


.. _docker-compose: https://docs.docker.com/compose/
.. _Docker for Mac: https://www.docker.com/docker-mac
