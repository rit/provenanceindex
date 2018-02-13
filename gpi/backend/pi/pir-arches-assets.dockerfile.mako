FROM ${PIR_ARCHES_RUNTIME_IMAGE}:${PIR_ARCHES_RUNTIME_VERSION}

WORKDIR /app/piserver

ENV DJANGO_DEBUG=False
ENV PGDBNAME=False
ENV PGUSERNAME=False
ENV PGPASSWORD=False
ENV PGHOST=False
ENV PGPORT=False
ENV ESPORT=False
ENV ESHOST=False
ENV DOMAIN_NAMES="*.gritech.team"

RUN python manage.py collectstatic
RUN chown -R www-data:www-data /static_root

CMD /app/ops/static_entry.sh


# vim: ft=Dockerfile
