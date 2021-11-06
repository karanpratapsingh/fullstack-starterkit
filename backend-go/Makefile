dev:
	docker compose up -d --build
	docker exec -it backend /bin/bash

dev-down:
	docker compose down

run:
	air

install:
	go install ./cmd
	go mod tidy

test:
	go test ./db -count=1
	go test ./graphql -count=1

build:
	go build cmd/main.go

generate:
	go run github.com/99designs/gqlgen generate
