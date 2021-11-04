package main

import (
	"backend/graphql"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

const port = ":4000"

func main() {
	app := fiber.New()
	app.Use(logger.New())

	graphql.Run(app)

	app.Listen(port)
}
