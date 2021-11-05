package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"backend/graphql/generated"
	"context"
)

func (r *queryResolver) GetUser(ctx context.Context, input generated.GetUserInput) (*generated.GetUserResult, error) {
	user, err := r.DB.GetUser(ctx, input.ID)

	result := &generated.GetUserResult{
		User: user,
	}

	return result, err
}

func (r *userResolver) Posts(ctx context.Context, obj *generated.User) ([]*generated.Post, error) {
	posts, err := r.DB.GetPosts(ctx, obj.ID)

	return posts, err
}

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

type userResolver struct{ *Resolver }
