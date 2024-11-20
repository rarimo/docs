FROM node:18-alpine3.18 as builder
RUN apk update && apk --no-cache add git

ARG BASE_URL
ARG URL
ARG STAGING

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

FROM nginx:1.20.2-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html