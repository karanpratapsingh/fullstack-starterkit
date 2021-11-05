package db

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v4/pgxpool"
)

func GetPool() *pgxpool.Pool {
	db_url := os.Getenv("DATABASE_URL")
	pool, err := pgxpool.Connect(context.Background(), db_url)

	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	return pool
}
