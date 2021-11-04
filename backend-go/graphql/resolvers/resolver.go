package resolvers

import "github.com/jackc/pgx/v4"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	Conn *pgx.Conn
}
