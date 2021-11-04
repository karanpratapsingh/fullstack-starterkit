-- CreateTable
CREATE TABLE IF NOT EXISTS "User" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,

  PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "Post" (
  "id" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "content" TEXT,
  "published" BOOLEAN NOT NULL DEFAULT false,
  "authorId" TEXT,

  PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
