install:
	go install ./cmd
	go mod tidy

dev:
	docker compose up -d
	docker exec -it backend /bin/bash

run:
	air

test:
	go test ./db -count=1
	go test ./graphql -count=1

build:
	go build cmd/main.go

generate:
	go run github.com/99designs/gqlgen generate
