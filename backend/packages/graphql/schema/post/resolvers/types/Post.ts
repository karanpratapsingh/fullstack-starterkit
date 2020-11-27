/**
 * Post type resolvers
 */
import { User } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const Post = {
  author: async (parent: Parent, _: Args, context: Context): Promise<User | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.post.findUnique({ where: { id } }).author();
  }
};

export default Post;
