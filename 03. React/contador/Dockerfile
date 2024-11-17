FROM node:18-alpine

WORKDIR /app

RUN addgroup -S dev && adduser -S erick -G dev
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN mkdir -p /app/node_modules/.cache && chown -R erick:dev /app

USER erick

CMD ["npm", "run", "dev"]
EXPOSE 3000
