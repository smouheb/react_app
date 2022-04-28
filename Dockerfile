FROM node:14-buster-slim

RUN mkdir react_app

WORKDIR /react_app

COPY  ./ /react_app

RUN npm install 

CMD ["npm","start"]
