/**
 * GraphQLApi
 * This helps with seamless access to GraphQL api in a non-graphql
 * context such as custom REST routes or testing environments
 */
import getUser from './queries/user/getUser';
import getPost from './queries/post/getPost';

const allQueries = {
  getUser,
  getPost
};

import { Context } from '../types/resolvers';
import schema from '../schema';
import { graphql, print, DocumentNode } from 'graphql';
import { GetUserInput, GetUserResult, GetPostInput, GetPostResult } from '../types';

type GraphQLApiArgs = {
  context: Context;
};

type GraphQLRequest = {
  query?: string;
  variables: any;
  context?: Context;
  operationName: string;
};

class GraphQLApi {
  private context: Context;

  constructor({ context }: GraphQLApiArgs) {
    this.context = context;
  }

  async getUser(input: GetUserInput, context?: Context): Promise<GetUserResult> {
    const operationName = 'getUser';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context
    });
  }

  async getPost(input: GetPostInput, context?: Context): Promise<GetPostResult> {
    const operationName = 'getPost';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context
    });
  }

  private async graphqlRequest({ query, variables, context, operationName }: GraphQLRequest): Promise<any> {
    const queryNode: DocumentNode = allQueries[operationName];
    const queryNodeString: string = print(queryNode);
    const source: string = query || queryNodeString;

    const contextValue = (context = context ? { ...this.context, ...context } : this.context);
    const { data, errors } = await graphql({ schema, source, variableValues: variables, contextValue });

    if (errors && errors.length) {
      throw errors[0];
    }

    if (!data) {
      throw new Error(`Invalid query ${operationName}.`);
    }

    return data[operationName];
  }
}

export { GraphQLApi as default, GraphQLApiArgs, allQueries };
