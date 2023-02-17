FROM mhart/alpine-node:14.9

RUN mkdir /app
WORKDIR /app
COPY ./ /app
RUN npm i
EXPOSE 3000
CMD ["npm","start"]
