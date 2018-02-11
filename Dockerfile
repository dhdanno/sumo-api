FROM node:8.9.1

RUN mkdir /home/node/app

WORKDIR /home/node/app

ADD server.js .
Add package.json .

RUN chown node:node /home/node/app -R

USER node

# install deps
RUN npm install

CMD node .

EXPOSE 3000
