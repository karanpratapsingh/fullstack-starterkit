FROM postgres:12 as db
WORKDIR /app
COPY ./scripts/db/init.sh /docker-entrypoint-initdb.d
COPY ./scripts/db/dump.sql ./scripts/db/dump.sql

# Ref: https://dev.to/karanpratapsingh/dockerize-your-go-app-46pp
FROM golang:1.17.2 as app
WORKDIR /app
COPY . .
RUN make install
RUN make generate
CMD make run
