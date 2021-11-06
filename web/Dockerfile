# Ref: https://dev.to/karanpratapsingh/dockerize-your-react-app-4j2e
FROM node:14.18-alpine
ENV NODE_ENV development
ENV TSC_WATCHFILE UseFsEvents
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 3000
CMD tail -f /dev/null
