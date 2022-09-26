# Create base image
FROM node:18-alpine AS base
RUN npm i -g pnpm

# Build stage
FROM base as build

WORKDIR /build
ADD ./ ./

# install all dependencies
RUN pnpm i
RUN pnpm build

# Deploy stage
FROM base as prod

WORKDIR /app

# copy built files to deploy directory
COPY --from=build /build/dist /app/dist

ADD package.json /app
ADD pnpm-lock.yaml /app

COPY --from=build /build/node_modules /app/node_modules

# install production dependencies
# in this case pnpm will remove devDependencies from node_modules
RUN pnpm i --prod

CMD [ "pnpm", "run", "start:prod" ]
