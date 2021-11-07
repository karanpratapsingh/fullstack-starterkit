package db

import (
	"context"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestDatabase(t *testing.T) {
	db := NewPostgres()
	defer db.GetPool().Close()

	t.Run("GetUser: Should retrieve a user", func(t *testing.T) {
		ctx := context.Background()

		ID := "userid"
		user, err := db.GetUser(ctx, ID)

		assert.Equal(t, user.ID, ID, "User ID should be equal to expected ID")
		assert.Equal(t, err, nil, "Error should be nil")
	})

	t.Run("GetUser: Should not retrieve any user", func(t *testing.T) {
		ctx := context.Background()

		ID := "unknown-id"
		_, err := db.GetUser(ctx, ID)

		assert.NotEqual(t, err, nil, "Error should not be nil")
	})

	t.Run("GetPost: Should retrieve a post", func(t *testing.T) {
		ctx := context.Background()

		ID := "postid"
		post, err := db.GetPost(ctx, ID)

		assert.Equal(t, post.ID, ID, "Post ID should be equal to expected ID")
		assert.Equal(t, err, nil, "Error should be nil")
	})

	t.Run("GetPost: Should not retrieve any post", func(t *testing.T) {
		ctx := context.Background()

		ID := "unknown-id"
		_, err := db.GetPost(ctx, ID)

		assert.NotEqual(t, err, nil, "Error should not be nil")
	})

	t.Run("GetPosts: Should retrieve posts for an user", func(t *testing.T) {
		ctx := context.Background()

		userID := "userid"
		posts, err := db.GetPosts(ctx, userID)

		expected := 1

		assert.GreaterOrEqual(t, len(posts), expected, "Posts should contain atleast one element")
		assert.Equal(t, err, nil, "Error should be nil")
	})

	t.Run("GetPosts: Should not retrieve posts for an unknown user", func(t *testing.T) {
		ctx := context.Background()

		ID := "unknown-id"
		posts, _ := db.GetPosts(ctx, ID)

		expected := 0

		assert.Equal(t, len(posts), expected, "Posts should contain no element")
	})
}
