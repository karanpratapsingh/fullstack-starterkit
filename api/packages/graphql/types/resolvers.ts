import { PrismaClient } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';

type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Parent = {
  id: Scalars['ID'];
};

export type Context = {
  prisma: PrismaClient;
};

export type Info = GraphQLResolveInfo;
