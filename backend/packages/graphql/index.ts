import { prisma } from '@backend/db';
import { logger } from '@backend/utils';
import { ApolloServerExpressConfig, ExpressContext } from 'apollo-server-express';
import GraphQLApi, { GraphQLApiArgs } from './api';
import schema from './schema';

const GraphQLServerOptions: ApolloServerExpressConfig = {
  schema,
  context: (context: ExpressContext) => ({
    ...context,
    prisma,
    logger
  })
};

export { GraphQLApi, GraphQLApiArgs, schema, GraphQLServerOptions };
