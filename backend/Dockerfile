# Ref: https://dev.to/karanpratapsingh/dockerize-node-application-222k
FROM node:14.18-alpine
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 4000
CMD tail -f /dev/null
