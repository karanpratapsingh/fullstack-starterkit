import { DocumentNode, GraphQLSchema } from 'graphql';
import flatten from 'lodash/flatten';

import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { userTypes, userQueries, userResolvers } from './user';
import { postTypes, postQueries, postResolvers } from './post';

const resolvers = mergeResolvers([userResolvers, postResolvers]);

const types: DocumentNode[] = [userTypes, postTypes];
const queries: DocumentNode[] = [userQueries, postQueries];
const mutations: DocumentNode[] = [];

const typeDefs = mergeTypeDefs(flatten([types, queries, mutations]));

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
