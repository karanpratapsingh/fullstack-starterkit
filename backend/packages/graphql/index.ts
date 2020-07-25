import { prisma } from '@backend/db';
import { logger } from '@backend/utils';
import { ApolloServerExpressConfig } from 'apollo-server-express';
import GraphQLApi, { GraphQLApiArgs } from './api';
import schema from './schema';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

const GraphQLServerOptions: ApolloServerExpressConfig = {
  schema,
  context: (context: ExpressContext) => ({
    ...context,
    prisma,
    logger
  })
};

export { GraphQLApi, GraphQLApiArgs, schema, GraphQLServerOptions };
