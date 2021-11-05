dev:
	docker compose up

exec:
	docker exec -it backend /bin/bash

dev-down:
	docker compose down

run:
	air

install:
	go install ./cmd
	go mod tidy

build:
	go build main.go

generate:
	go run github.com/99designs/gqlgen generate
