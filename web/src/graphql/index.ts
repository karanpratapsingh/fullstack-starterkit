import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import Config from '@web/config';

function configureApolloClient(config: Config): ApolloClient<NormalizedCacheObject> {
  const httpLink = new HttpLink({ uri: config.endpoints.https });

  const wsLink = new WebSocketLink({
    uri: config.endpoints.wss,
    options: { reconnect: true }
  });

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink
  );

  const client = new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
          );
        }

        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        }
      }),
      link
    ]),
    cache: new InMemoryCache()
  });

  return client;
}

export { configureApolloClient };
export * from './queries';
