package db

import (
	"backend/graphql/generated"
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v4/pgxpool"
)

type Postgres struct {
	pool *pgxpool.Pool
}

func NewPostgres() Postgres {
	dbURL := os.Getenv("DATABASE_URL")
	pool, err := pgxpool.Connect(context.Background(), dbURL)

	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	return Postgres{pool}
}

func (db Postgres) GetPool() *pgxpool.Pool {
	return db.pool
}

func (db Postgres) GetUser(ctx context.Context, id string) (*generated.User, error) {
	var user generated.User

	query := "SELECT id, name, email FROM users WHERE id=$1"
	err := db.pool.QueryRow(ctx, query, &id).Scan(&user.ID, &user.Name, &user.Email)

	if err != nil {
		return nil, fmt.Errorf(`no user found for id: %s %s`, id, err.Error())
	}

	return &user, nil
}

func (db Postgres) GetPost(ctx context.Context, id string) (*generated.Post, error) {
	var post generated.Post
	var author generated.User

	query := "SELECT id, title, content, published, author_id FROM posts WHERE id=$1"
	err := db.pool.QueryRow(ctx, query, &id).Scan(&post.ID, &post.Title, &post.Content, &post.Published, &author.ID)

	if err != nil {
		return nil, fmt.Errorf(`no post found for id: %s %s`, id, err.Error())
	}

	post.Author = &author

	return &post, nil
}

func (db Postgres) GetPosts(ctx context.Context, userID string) ([]*generated.Post, error) {
	var posts []*generated.Post

	query := "SELECT id, title, content, published, author_id FROM posts WHERE author_id=$1"
	rows, err := db.pool.Query(ctx, query, &userID)

	if err != nil {
		return nil, fmt.Errorf(`no posts found for user: %s %s`, userID, err.Error())
	}

	for rows.Next() {
		var post generated.Post
		var author generated.User

		err := rows.Scan(&post.ID, &post.Title, &post.Content, &post.Published, &author.ID)

		if err != nil {
			return nil, fmt.Errorf(`error retrieving posts for user: %s %s`, userID, err.Error())
		}

		post.Author = &author
		posts = append(posts, &post)
	}

	return posts, nil
}
