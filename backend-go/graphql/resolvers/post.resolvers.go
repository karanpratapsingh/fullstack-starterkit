package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"backend/graphql/generated"
	"context"
)

func (r *postResolver) Author(ctx context.Context, obj *generated.Post) (*generated.User, error) {
	user, err := r.DB.GetUser(ctx, obj.Author.ID)

	return user, err
}

func (r *queryResolver) GetPost(ctx context.Context, input generated.GetPostInput) (*generated.GetPostResult, error) {
	post, err := r.DB.GetPost(ctx, input.ID)

	result := &generated.GetPostResult{
		Post: post,
	}

	return result, err
}

// Post returns generated.PostResolver implementation.
func (r *Resolver) Post() generated.PostResolver { return &postResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type postResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
