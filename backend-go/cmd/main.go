package main

import (
	database "backend/db"
	"backend/graphql"
	"fmt"
	"net/http"

	_ "github.com/99designs/gqlgen/cmd"
	"github.com/gorilla/mux"
)

var port = ":4000"

func main() {
	router := mux.NewRouter()

	db := database.New()
	defer db.GetPool().Close()

	graphql.Run(router, db)

	fmt.Println("Server is running")
	http.ListenAndServe(port, router)
}
