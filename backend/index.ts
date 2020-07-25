import './packages/utils/env';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLServerOptions } from '@backend/graphql';
import { logger } from '@backend/utils';
import Config from '@backend/config';

const app = express();
app.use(cors());

const PORT = process.env.PORT || Config.defaultPort;
const server = new ApolloServer(GraphQLServerOptions);
server.applyMiddleware({ app });

app.listen(PORT, () => {
  logger.info('GraphQL Server is running 🚀');
});
