import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLServerOptions } from '@backend/graphql';
import { logger } from '@backend/utils';

const app = express();
app.use(cors());

const PORT = 4000;
const server = new ApolloServer(GraphQLServerOptions);
server.applyMiddleware({ app });

app.listen(PORT, () => {
  logger.info('GraphQL Server is running 🚀');
});
