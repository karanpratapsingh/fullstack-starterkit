import { Post } from '@prisma/client';
import { Parent, Context, QueryGetPostArgs, GetPostInput, GetPostResult } from '../../../../types';

async function getPost(_: Parent, args: QueryGetPostArgs, context: Context): Promise<GetPostResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: GetPostInput = input;

  const post: Post | null = await prisma.post.findOne({ where: { id } });

  return { post };
}

export default getPost;
