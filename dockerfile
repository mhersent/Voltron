FROM node:lts

WORKDIR /API

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD run dev
