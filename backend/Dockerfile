# syntax=docker/dockerfile:1

#FROM node:18-alpine
#ENV NODE_ENV=production

#WORKDIR /app

#COPY ["package.json", "package-lock.json*", "./"]

#RUN npm install --production

#COPY . .

#CMD ["cd", "frontend"]
#CMD ["npm", "start"]



#FROM node:alpine
#RUN mkdir /app
#WORKDIR /app
#COPY ./frontend/package.json /app
#COPY frontend ./frontend
#RUN npm install --production --fetch-timeout=600000
#COPY . /app
#EXPOSE 1234
#CMD ["cd", "backend"]
#CMD ["npm", "dev", "run"]
#CMD ["cd", ".."]
#CMD ["cd", "frontend"]
#WORKDIR /app/frontend
#CMD ["npm", "start"]




FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*
RUN npm install
# --fetch-timeout=600000
COPY . /app
EXPOSE 5001
CMD ["npm", "run", "dev"]
