FROM postgres:12 as db
WORKDIR /app
COPY ./scripts/db/init.sh /docker-entrypoint-initdb.d

# Ref: https://dev.to/karanpratapsingh/dockerize-your-go-app-46pp
FROM golang:1.17.2 as app
WORKDIR /app
COPY . .
RUN curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin
RUN go install cmd
RUN make generate
CMD make run
