import { User } from '@prisma/client';
import { Parent, Context, QueryGetUserArgs, GetUserInput, GetUserResult } from '../../../../types';

async function getUser(_: Parent, args: QueryGetUserArgs, context: Context): Promise<GetUserResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: GetUserInput = input;

  const user: User | null = await prisma.user.findUnique({ where: { id } });

  return { user };
}

export default getUser;
