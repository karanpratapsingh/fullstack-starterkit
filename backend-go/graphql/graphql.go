package graphql

import (
	"backend/graphql/generated"
	"backend/graphql/resolvers"
	"net/http"

	"github.com/99designs/gqlgen/graphql"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gorilla/mux"
	"github.com/jackc/pgx/v4/pgxpool"
)

const endpoint = "/graphql"

func Run(r *mux.Router, p *pgxpool.Pool) {
	graphql, playground := getHandlers(p)

	r.HandleFunc(endpoint, playground).Methods(http.MethodGet)
	r.Handle(endpoint, graphql).Methods(http.MethodPost)
}

func getHandlers(p *pgxpool.Pool) (*handler.Server, http.HandlerFunc) {
	schema := getSchema(p)

	graphql := handler.NewDefaultServer(schema)
	playground := playground.Handler("GraphQL Playground", endpoint)

	return graphql, playground
}

func getSchema(p *pgxpool.Pool) graphql.ExecutableSchema {
	config := generated.Config{
		Resolvers: &resolvers.Resolver{Pool: p},
	}
	return generated.NewExecutableSchema(config)
}

func GetSchema(p *pgxpool.Pool) graphql.ExecutableSchema {
	config := generated.Config{
		Resolvers: &resolvers.Resolver{Pool: p},
	}
	return generated.NewExecutableSchema(config)
}
