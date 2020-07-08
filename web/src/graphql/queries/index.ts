import { loader } from 'graphql.macro';

const QUERY_GET_USER = loader('./getUser.graphql');
const QUERY_GET_POST = loader('./getPost.graphql');

export { QUERY_GET_USER, QUERY_GET_POST };
