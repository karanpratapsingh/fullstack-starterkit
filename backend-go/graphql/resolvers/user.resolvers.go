package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"backend/graphql/generated"
	"context"
	"fmt"
)

func (r *queryResolver) GetUser(ctx context.Context, input generated.GetUserInput) (*generated.GetUserResult, error) {
	var user generated.User

	query := "SELECT id, name, email FROM users WHERE id=$1"
	err := r.Pool.QueryRow(ctx, query, &input.ID).Scan(&user.ID, &user.Name, &user.Email)

	if err != nil {
		return nil, fmt.Errorf(`no user found for id: %s %s`, input.ID, err.Error())
	}

	return &generated.GetUserResult{
		User: &user,
	}, nil
}

func (r *userResolver) Posts(ctx context.Context, obj *generated.User) ([]*generated.Post, error) {
	var posts []*generated.Post

	query := "SELECT id, title, content, published, author_id FROM posts WHERE author_id=$1"
	rows, err := r.Pool.Query(ctx, query, &obj.ID)

	if err != nil {
		return nil, fmt.Errorf(`no posts found for user: %s %s`, obj.ID, err.Error())
	}

	for rows.Next() {
		var post generated.Post
		var author generated.User

		err := rows.Scan(&post.ID, &post.Title, &post.Content, &post.Published, &author.ID)

		if err != nil {
			return nil, fmt.Errorf(`error retrieving posts for user: %s %s`, obj.ID, err.Error())
		}

		post.Author = &author
		posts = append(posts, &post)
	}

	return posts, nil
}

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

type userResolver struct{ *Resolver }
