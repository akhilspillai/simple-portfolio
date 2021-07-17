FROM node:14-alpine as builder

ARG API_URL=
ARG APP_ENV=production

ENV REACT_APP_API_URL=$API_URL
ENV REACT_APP_ENV=$APP_ENV

WORKDIR /usr

# copy the base ts config
COPY tsconfig.json ./

# copy the backend ts code
RUN mkdir -p packages/backend
WORKDIR /usr/packages/backend
COPY packages/backend/package.json ./
COPY packages/backend/tsconfig*.json ./
COPY packages/backend/src ./src

# build the backend ts code
RUN yarn
RUN yarn build:prod

WORKDIR /usr

# copy the ui ts code
RUN mkdir -p packages/ui
WORKDIR /usr/packages/ui
COPY packages/ui/package.json ./
COPY packages/ui/tsconfig.json ./
COPY packages/ui/src ./src
COPY packages/ui/public ./public

# build the ui ts code
RUN yarn
RUN yarn build

FROM node:14-alpine as ship
WORKDIR /usr

# copy package.json for the server and install all the dependencies
COPY packages/backend/package.json ./
# TODO: fix all warning
RUN yarn install --production

# copy the built code from the builder step
COPY --from=builder /usr/packages/backend/dist .
RUN mkdir -p public
COPY --from=builder /usr/packages/ui/build/ ./public/

# deploy using pm2
RUN yarn global add pm2
EXPOSE 5000
CMD ["pm2-runtime","server.js"]