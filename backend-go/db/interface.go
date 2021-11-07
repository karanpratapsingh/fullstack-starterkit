package db

import (
	"backend/graphql/generated"
	"context"
)

type DB interface {
	GetUser(ctx context.Context, id string) (*generated.User, error)
	GetPost(ctx context.Context, id string) (*generated.Post, error)
	GetPosts(ctx context.Context, userID string) ([]*generated.Post, error)
}
