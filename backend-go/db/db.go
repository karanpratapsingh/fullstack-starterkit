package db

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v4/pgxpool"
)

func GetPool() *pgxpool.Pool {
	dbURL := os.Getenv("DATABASE_URL")
	pool, err := pgxpool.Connect(context.Background(), dbURL)

	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	return pool
}
