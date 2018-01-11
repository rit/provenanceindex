FROM revolutionsystems/python:2.7-wee
USER root

## Install dependencies
WORKDIR /tmp
RUN apt-get update -y &&\
	apt-get upgrade -y &&\
	apt-get install -y wget \
		build-essential \
		libxml2-dev \
		libjson0-dev \
		libproj-dev \
		xsltproc docbook-xsl \
		docbook-mathml \
		libgdal1-dev \
		python-setuptools \
		python-dev \
		python-software-properties \
		dos2unix \
		curl \
		libpq-dev \
		libgeos-dev \
		default-jre-headless \
		git-all \
		zlib1g-dev \
        clang \
        make \
        pkg-config &&\
	curl -sL https://deb.nodesource.com/setup_8.x | bash - &&\
	apt-get install nodejs &&\
	npm install -g bower

# ## Install Postgresql client
RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main" >> /etc/apt/sources.list.d/pgdg.list &&\
	wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - &&\
	apt-get update -y &&\
  apt-get install -y postgresql-client-9.6

## Clean up obsolete folders and packages
RUN rm -rf /var/lib/apt/lists/*
RUN rm -rf /tmp/*

WORKDIR /app

# # Install pip requirements
COPY ./requirements.txt .
RUN	pip install --no-cache-dir -r requirements.txt

# Expose port 8000
EXPOSE 8000

# # Set default workdir
WORKDIR /app/piserver
