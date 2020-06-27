import { Post } from './types';
import { getPost } from './queries';

const resolvers = {
  Query: {
    getPost
  },
  Post
};

export default resolvers;
