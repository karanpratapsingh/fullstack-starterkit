package main

import (
	"backend/db"
	"backend/graphql"
	"fmt"
	"net/http"

	_ "github.com/99designs/gqlgen/cmd"
	"github.com/gorilla/mux"
)

var port = ":4000"

func main() {
	router := mux.NewRouter()

	postgres := db.NewPostgres()
	defer postgres.GetPool().Close()

	graphql.Run(router, postgres)

	fmt.Println("Server is running")
	http.ListenAndServe(port, router)
}
