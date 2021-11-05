package graphql

import (
	"backend/db"
	"backend/graphql/generated"
	"testing"

	"github.com/99designs/gqlgen/client"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/stretchr/testify/assert"
)

func TestGraphQLResolvers(t *testing.T) {
	pool := db.GetPool()
	defer pool.Close()

	schema := GetSchema(pool)
	c := client.New(handler.NewDefaultServer(schema))

	t.Run("Query GetUser", func(t *testing.T) {
		var response struct {
			GetUser generated.GetUserResult
		}

		query := `
			query GetUser($input: GetUserInput!) {
				getUser(input: $input) {
					user {
						id
					}
				}
			}
		`

		expected := "userid"

		input := generated.GetPostInput{ID: expected}
		c.MustPost(query, &response, client.Var("input", input))

		assert.Equal(t, response.GetUser.User.ID, expected, "User ID should be equal to expected ID")
	})

	t.Run("Query GetPost", func(t *testing.T) {
		var response struct {
			GetPost generated.GetPostResult
		}

		query := `
			query GetPost($input: GetPostInput!) {
				getPost(input: $input) {
					post {
						id
					}
				}
			}
		`

		expected := "postid"

		input := generated.GetPostInput{ID: expected}
		c.MustPost(query, &response, client.Var("input", input))

		assert.Equal(t, response.GetPost.Post.ID, expected, "Post ID should be equal to expected ID")
	})
}
