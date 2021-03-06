FROM phusion/baseimage:0.9.22

# Use baseimage-docker's init system.
CMD ["/sbin/my_init"]

## Install dependencies
WORKDIR /tmp
RUN apt-get update -y &&\
	apt-get upgrade -y &&\
	apt-get install -y ${APT_PACKAGES} &&\
	curl -sL https://deb.nodesource.com/setup_8.x | bash - &&\
	apt-get install nodejs &&\
	npm install -g bower

# ## Install Postgresql client
RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main" >> /etc/apt/sources.list.d/pgdg.list &&\
	wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - &&\
	apt-get update -y &&\
  apt-get install -y postgresql-client-9.6


# If this is called "PIP_VERSION", pip explodes with "ValueError: invalid truth value '<VERSION>'"
ENV PYTHON_PIP_VERSION 9.0.1

RUN set -ex; ldconfig
RUN set -ex; curl -sL -o get-pip.py 'https://bootstrap.pypa.io/get-pip.py';
RUN set -ex; python get-pip.py \
      --disable-pip-version-check \
      --no-cache-dir \
      "pip==$PYTHON_PIP_VERSION"; pip --version


# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*


WORKDIR /app

# Install pip requirements
COPY ./requirements.txt .
RUN	pip install --no-cache-dir -r requirements.txt

# Install editable requirements
COPY ./requirements_editable.txt .
RUN	pip install --no-cache-dir -r requirements_editable.txt

# Expose port 8000
EXPOSE 8000

% if DEPLOYMENT_FLAVOR == 'remote':

# Install nginx from nginx.org
RUN echo "deb http://nginx.org/packages/ubuntu/ xenial nginx" >> /etc/apt/sources.list.d/nginx.list &&\
  echo "deb-src http://nginx.org/packages/ubuntu/ xenial nginx" >> /etc/apt/sources.list.d/nginx.list &&\
  apt-key adv --keyserver keyserver.ubuntu.com --recv-keys ABF5BD827BD9BF62 &&\
	apt-get update -y &&\
  apt-get install -y nginx

# Put application code in the image
COPY ./piserver /app/piserver

COPY ./ops /app/ops
COPY ./bin/kapply.py /app/bin/kapply.py

# Install Bower components
WORKDIR /app/piserver/piserver
RUN bower --allow-root install

% endif

# # Set default workdir
WORKDIR /app/piserver
CMD /app/ops/entry.sh


# vim: ft=Dockerfile
