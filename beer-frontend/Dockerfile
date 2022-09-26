# Create base image
FROM node:18-alpine AS base
RUN npm i -g pnpm

# Build stage
FROM base as build

WORKDIR /
ADD ./ ./

# install all dependencies
RUN pnpm i
RUN pnpm build

RUN ls -alh

# Deploy stage
FROM nginx:1.23-alpine

COPY --from=build /build /usr/share/nginx/html