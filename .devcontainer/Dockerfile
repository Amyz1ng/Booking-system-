# Start from Ubuntu 22.04 base image
FROM ubuntu:22.04

# Set environment variables
ENV PYTHON_VERSION 3.9.17
ENV NODE_MAJOR 16
ENV DEBIAN_FRONTEND=noninteractive

# Install necessary system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    make \
    build-essential \
    libssl-dev \
    libpq-dev \
    zlib1g-dev \
    libbz2-dev \
    libreadline-dev \
    libsqlite3-dev \
    wget \
    ca-certificates \
    curl \
    gnupg \
    llvm \
    libncurses5-dev \
    xz-utils \
    tk-dev \
    libxml2-dev \
    libxmlsec1-dev \
    libffi-dev \
    liblzma-dev \
    mecab-ipadic-utf8 \
    git \
    postgresql-client \
    telnet \
    unzip \
    zlib1g-dev \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Install Heroku CLI
RUN curl https://cli-assets.heroku.com/install.sh | sh

# Install Node.js
RUN mkdir -p /etc/apt/keyrings && \
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list && \
    apt-get update && apt-get install nodejs -y

# Set up user and working directory
ARG USERNAME=codeany
RUN useradd -ms /bin/bash $USERNAME
USER $USERNAME
WORKDIR /home/$USERNAME

# Set up necessary environment variables for PyEnv
ENV PYENV_ROOT /home/$USERNAME/.pyenv
ENV PATH $PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH

# Install PyEnv and Python dependencies
RUN set -ex \
    && curl https://pyenv.run | bash \
    && pyenv update \
    && pyenv install $PYTHON_VERSION \
    && pyenv global $PYTHON_VERSION \
    && pyenv rehash \
    && python3 -m pip install --no-cache-dir --upgrade pip \
    && python3 -m pip install --no-cache-dir --upgrade setuptools wheel virtualenv pipenv pylint rope flake8 mypy autopep8 pep8 pylama pydocstyle bandit notebook twine

# Set up path for Python binaries
ENV PATH=$PATH:"/home/codeany/.local/bin"

# Set up aliases and copy necessary files
RUN echo 'alias python=python3' >> ~/.bashrc && \
    echo 'export PIP_USER=yes' >> ~/.bashrc && \
    echo 'alias pip=pip3' >> ~/.bashrc && \
    echo 'alias psql="psql mydb"' >> ~/.bashrc

COPY ./build-assets/heroku_config.sh /home/$USERNAME/.theia/heroku_config.sh
RUN echo 'alias heroku_config=". $HOME/.theia/heroku_config.sh"' >> ~/.bashrc

COPY ./build-assets/make_url.py /home/$USERNAME/.theia/make_url.py
RUN echo 'alias make_url="python3 $HOME/.theia/make_url.py "' >> ~/.bashrc

COPY ./build-assets/http_server.py /home/$USERNAME/.theia/http_server.py
RUN echo 'alias http_server="python3 $HOME/.theia/http_server.py "' >> ~/.bashrc

# Copy the Flask application files and install dependencies
COPY ./build-assets/db_setup.py /home/$USERNAME/.theia/db_setup.py
COPY requirements.txt /home/$USERNAME/.theia/requirements.txt

# Install Python dependencies for Flask application
RUN python3 -m pip install --no-cache-dir -r /home/$USERNAME/.theia/requirements.txt

# Set up environment variables for PostgreSQL
ENV dbname='cdkgoyuf'
ENV user='cdkgoyuf'
ENV password='5GKhTH6GGnsQPZBS67-WjKZMoIBPqijL'
ENV host='tai.db.elephantsql.com'
ENV port='5432'

# Expose the Flask default port
EXPOSE 5000

# Command to run the Flask application
CMD ["python3", "/home/$USERNAME/.theia/db_setup.py"]

# Allow proxy to work for react/drf on cloud IDEs
ENV DANGEROUSLY_DISABLE_HOST_CHECK=true
