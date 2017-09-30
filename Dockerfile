FROM node:8.4.0-alpine

ADD package.json /application/
ADD src/ /application/src/ 
ADD public/ /application/public/ 
ADD scripts/ /application/scripts/
ADD config/ /application/config/

WORKDIR /application
RUN npm install && npm run build && yarn global add serve && rm -rf node_modules/ src/scripts/
ENTRYPOINT ["serve","-s","build"]
