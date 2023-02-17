FROM mhart/alpine-node:14.9

RUN mkdir /app
WORKDIR /app
COPY ./ /app

RUN npm i
CMD ["npm","run", "build"]

EXPOSE 3000
