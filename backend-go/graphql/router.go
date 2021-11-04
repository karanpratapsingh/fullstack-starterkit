package graphql

import (
	"backend/graphql/generated"
	"backend/graphql/resolvers"
	"net/http"

	"github.com/99designs/gqlgen/graphql"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gorilla/mux"
	"github.com/jackc/pgx/v4"
)

const endpoint = "/graphql"

func Run(r *mux.Router, c *pgx.Conn) {
	graphql, playground := getHandlers(c)

	r.HandleFunc(endpoint, playground).Methods(http.MethodGet)
	r.Handle(endpoint, graphql).Methods(http.MethodPost)
}

func getHandlers(c *pgx.Conn) (*handler.Server, http.HandlerFunc) {
	schema := getSchema(c)

	graphql := handler.NewDefaultServer(schema)
	playground := playground.Handler("GraphQL playground", endpoint)

	return graphql, playground
}

func getSchema(c *pgx.Conn) graphql.ExecutableSchema {
	config := generated.Config{
		Resolvers: &resolvers.Resolver{Conn: c},
	}
	return generated.NewExecutableSchema(config)
}
