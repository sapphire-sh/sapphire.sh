FROM node:12

RUN mkdir -p /opt/project
WORKDIR /opt/project

RUN node --version
RUN npm --version

COPY package* ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
