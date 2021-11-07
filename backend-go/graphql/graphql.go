package graphql

import (
	"backend/db"
	"backend/graphql/generated"
	"backend/graphql/resolvers"
	"net/http"

	"github.com/99designs/gqlgen/graphql"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gorilla/mux"
)

const endpoint = "/graphql"

func Run(r *mux.Router, db db.DB) {
	graphql, playground := getHandlers(db)

	r.HandleFunc(endpoint, playground).Methods(http.MethodGet)
	r.Handle(endpoint, graphql).Methods(http.MethodPost)
}

func getHandlers(db db.DB) (*handler.Server, http.HandlerFunc) {
	schema := getSchema(db)

	graphql := handler.NewDefaultServer(schema)
	playground := playground.Handler("GraphQL Playground", endpoint)

	return graphql, playground
}

func getSchema(db db.DB) graphql.ExecutableSchema {
	config := generated.Config{
		Resolvers: &resolvers.Resolver{DB: db},
	}
	return generated.NewExecutableSchema(config)
}
