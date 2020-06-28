import { Prisma } from '../../db';
import { GraphQLResolveInfo } from 'graphql';
import { Scalars } from './schema';
import { Logger } from '../../utils';

export type Parent = {
  id: Scalars['ID'];
};

export type Args = any;

export type Context = {
  prisma: Prisma;
  logger: Logger;
};

export type Info = GraphQLResolveInfo;
