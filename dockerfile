FROM node:24-bookworm-slim

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
     bash \
     ca-certificates \
     git \
     ripgrep \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/pi

COPY . /opt/pi/

RUN npm install --ignore-scripts

RUN mkdir -p /root/.pi/agent
COPY models.json /root/.pi/agent/models.json

WORKDIR /workspace

ENTRYPOINT ["/opt/pi/pi-test.sh"]
