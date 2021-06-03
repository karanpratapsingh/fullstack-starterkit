import http from 'http';
import express, { Express } from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLServerOptions } from '@backend/graphql';
import { logger } from '@backend/utils';
import Config from '@backend/config';

const app: Express = express();
app.use(cors());

const PORT: string | number = process.env.PORT || Config.defaultPort;
const server: ApolloServer = new ApolloServer(GraphQLServerOptions);
server.applyMiddleware({ app });

const httpServer: http.Server = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  const { graphqlPath, subscriptionsPath } = server;
  logger.info(`🚀 GraphQL Server is running at http://localhost:${PORT}${graphqlPath}`);
  logger.info(`🚀 Subscriptions ready at ws://localhost:${PORT}${subscriptionsPath}`);
});
