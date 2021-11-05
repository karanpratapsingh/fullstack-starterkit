package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"backend/graphql/generated"
	"context"
	"fmt"
)

func (r *postResolver) Author(ctx context.Context, obj *generated.Post) (*generated.User, error) {
	var user generated.User

	query := "SELECT id, name, email FROM users WHERE id=$1"
	err := r.Pool.QueryRow(ctx, query, &obj.Author.ID).Scan(&user.ID, &user.Name, &user.Email)

	if err != nil {
		return nil, fmt.Errorf(`no author found for post: %s %s`, obj.ID, err.Error())
	}

	return &user, nil
}

func (r *queryResolver) GetPost(ctx context.Context, input generated.GetPostInput) (*generated.GetPostResult, error) {
	var post generated.Post
	var author generated.User

	query := "SELECT id, title, content, published, author_id FROM posts WHERE id=$1"
	err := r.Pool.QueryRow(ctx, query, &input.ID).Scan(&post.ID, &post.Title, &post.Content, &post.Published, &author.ID)

	if err != nil {
		return nil, fmt.Errorf(`no post found for id: %s %s`, input.ID, err.Error())
	}

	post.Author = &author

	return &generated.GetPostResult{
		Post: &post,
	}, nil
}

// Post returns generated.PostResolver implementation.
func (r *Resolver) Post() generated.PostResolver { return &postResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type postResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
