import { Prisma } from '@backend/db';
import { Logger } from '@backend/utils';
import { GraphQLResolveInfo } from 'graphql';
import { Scalars } from './schema';

export type Parent = {
  id: Scalars['ID'];
};

export type Args = any;

export type Context = {
  prisma: Prisma;
  logger: Logger;
};

export type Info = GraphQLResolveInfo;
