import schema from './schema';
import { prisma } from '../db';
import { ApolloServerExpressConfig } from 'apollo-server-express';
import GraphQLApi, { GraphQLApiArgs } from './api';
import { logger } from '../utils';

const GraphQLServerOptions: ApolloServerExpressConfig = {
  schema,
  context: context => ({
    ...context,
    prisma,
    logger
  })
};

export { GraphQLApi, GraphQLApiArgs, schema, GraphQLServerOptions };
