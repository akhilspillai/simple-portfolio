FROM node:14-alpine

WORKDIR /usr
COPY tsconfig.json ./

RUN mkdir -p packages/backend
WORKDIR /usr/packages/backend

COPY packages/backend/package.json ./
COPY packages/backend/tsconfig*.json ./
COPY packages/backend/src ./src
COPY packages/backend/env ./env
RUN npm i
RUN npm run build:prod

WORKDIR /usr
RUN mkdir -p packages/ui
WORKDIR /usr/packages/ui

COPY packages/ui/package.json ./
COPY packages/ui/tsconfig.json ./
COPY packages/ui/src ./src
COPY packages/ui/env ./env
COPY packages/ui/public ./public
RUN npm i
RUN npm run build:prod

FROM node:14-alpine
WORKDIR /usr
COPY packages/backend/package.json ./
RUN npm install --only=production
COPY --from=0 /usr/packages/backend/dist .
RUN mkdir -p public
COPY --from=0 /usr/packages/ui/build/ ./public/
RUN npm install pm2 -g
EXPOSE 5000
CMD ["pm2-runtime","server.js"]