import { User } from './types';
import { getUser } from './queries';

const resolvers = {
  Query: {
    getUser
  },
  User
};

export default resolvers;
