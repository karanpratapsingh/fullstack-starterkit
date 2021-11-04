package main

import (
	"backend/graphql"
	"context"
	"fmt"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/jackc/pgx/v4"
)

const port = ":4000"

func main() {
	router := mux.NewRouter()
	conn, err := pgx.Connect(context.Background(), os.Getenv("DATABASE_URL"))

	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	defer conn.Close(context.Background())

	graphql.Run(router, conn)

	fmt.Println("Server is running")
	http.ListenAndServe(port, router)
}
