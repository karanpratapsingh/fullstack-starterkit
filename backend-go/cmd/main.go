package main

import (
	"backend/graphql"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

const port = ":4000"

func main() {
	router := mux.NewRouter()

	graphql.Run(router)

	fmt.Println("Server is running")
	http.ListenAndServe(port, router)
}
