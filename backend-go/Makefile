install:
	go install ./cmd
	go mod tidy

generate:
	go run github.com/99designs/gqlgen generate

run:
	air

dev:
	docker compose up -d
	docker exec -it backend /bin/bash

dev-down:
	docker compose down

test:
	go test ./db ./graphql -count=1

build:
	go build cmd/main.go
