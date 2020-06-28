import { Prisma } from '../../db';
import { GraphQLResolveInfo } from 'graphql';
import { Scalars } from './schema';

export type Parent = {
  id: Scalars['ID'];
};

export type Args = any;

export type Context = {
  prisma: Prisma;
};

export type Info = GraphQLResolveInfo;
