FROM golang:1.17.2
WORKDIR /app
COPY . .
RUN curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin
RUN go install
RUN make generate
CMD make run
