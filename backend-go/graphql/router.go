package graphql

import (
	"backend/graphql/generated"
	"backend/graphql/resolvers"
	"net/http"

	"github.com/99designs/gqlgen/graphql"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gorilla/mux"
)

const endpoint = "/graphql"

func Run(router *mux.Router) {
	graphql, playground := getHandlers()

	router.HandleFunc(endpoint, playground).Methods(http.MethodGet)
	router.Handle(endpoint, graphql).Methods(http.MethodPost)
}

func getHandlers() (*handler.Server, http.HandlerFunc) {
	schema := getSchema()

	graphql := handler.NewDefaultServer(schema)
	playground := playground.Handler("GraphQL playground", endpoint)

	return graphql, playground
}

func getSchema() graphql.ExecutableSchema {
	config := generated.Config{
		Resolvers: &resolvers.Resolver{},
	}
	return generated.NewExecutableSchema(config)
}
