package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"backend/graphql/generated"
	"context"
	"fmt"
)

func (r *queryResolver) GetPost(ctx context.Context, input generated.GetPostInput) (*generated.GetPostResult, error) {
	panic(fmt.Errorf("not implemented"))
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
