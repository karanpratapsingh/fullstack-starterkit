import { PrismaClient } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { Scalars } from './schema';

export type Parent = {
  id: Scalars['ID'];
};

export type Args = any;

export type Context = {
  prisma: PrismaClient;
};

export type Info = GraphQLResolveInfo;
