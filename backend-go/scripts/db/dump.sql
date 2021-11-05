CREATE DATABASE IF NOT EXISTS `database`;
USE `database`;

-- CreateTable
CREATE TABLE IF NOT EXISTS users (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,

  PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS posts (
  "id" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "content" TEXT,
  "published" BOOLEAN NOT NULL DEFAULT false,
  "author_id" TEXT NOT NULL,

  PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX users.email_unique ON users("email");

-- AddForeignKey
ALTER TABLE posts ADD FOREIGN KEY ("author_id") REFERENCES users("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Seed
INSERT INTO users (id, name, email) VALUES ('userid', 'Gopher', 'hello@gopher.com');
INSERT INTO posts (id, title, content, published, author_id) VALUES ('postid', 'Why go is awesome!', 'something something', TRUE, 'userid');
