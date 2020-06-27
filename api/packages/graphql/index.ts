import schema from './schema';
import { prisma } from '../db';
import { ApolloServerExpressConfig } from 'apollo-server-express';
import GraphQLApi from './api';

const GraphQLServerOptions: ApolloServerExpressConfig = {
  schema,
  context: context => ({
    ...context,
    prisma
  })
};

export { GraphQLApi, schema, GraphQLServerOptions };
