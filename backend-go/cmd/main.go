package main

import (
	"backend/graphql"
	"context"
	"fmt"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/jackc/pgx/v4/pgxpool"
)

var (
	port   = ":4000"
	db_url = os.Getenv("DATABASE_URL")
)

func main() {
	router := mux.NewRouter()
	pool, err := pgxpool.Connect(context.Background(), db_url)

	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	defer pool.Close()

	graphql.Run(router, pool)

	fmt.Println("Server is running")
	http.ListenAndServe(port, router)
}
