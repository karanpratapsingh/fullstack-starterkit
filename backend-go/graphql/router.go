package graphql

import (
	"backend/graphql/generated"
	"backend/graphql/resolvers"
	"net/http"

	"github.com/99designs/gqlgen/graphql"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gofiber/adaptor/v2"
	"github.com/gofiber/fiber/v2"
)

const endpoint = "/graphql"

func Run(app *fiber.App) {
	graphql, playground := getHandlers()

	router := app.Group(endpoint)
	router.Get("/", adaptor.HTTPHandlerFunc(playground))
	router.Post("/", adaptor.HTTPHandler(graphql))
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
