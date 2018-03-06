How to run certbot:
===================

Run this on certbot Kubernetes pod::

    certbot certonly --staging --standalone -m rli@getty.edu -d qa.arches.pir.gritech.team --agree-tos
