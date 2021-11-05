package main

import (
	"backend/db"
	"backend/graphql"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	var port string = ":4000"

	router := mux.NewRouter()

	pool := db.GetPool()
	defer pool.Close()

	graphql.Run(router, pool)

	fmt.Println("Server is running")
	http.ListenAndServe(port, router)
}
