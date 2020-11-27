/**
 * User type resolvers
 */
import { Post } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const User = {
  posts: async (parent: Parent, _: Args, context: Context): Promise<Post[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.user.findUnique({ where: { id } }).posts();
  }
};

export default User;
