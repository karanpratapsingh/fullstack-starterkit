import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLServerOptions } from '@backend/graphql';

const app = express();
app.use(cors());

const PORT = 4000;
const server = new ApolloServer(GraphQLServerOptions);
server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log('GraphQL Server is running 🚀');
});
