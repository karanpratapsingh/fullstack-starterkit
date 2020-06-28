import TestSuiteUtils, { TestSuiteType } from '../utils';
import { GraphQLApi } from '../../packages/graphql';

const utils = new TestSuiteUtils(TestSuiteType.GRAPHQL);
utils.setupJest();

let graphQLApi: GraphQLApi;

beforeAll(() => {
  graphQLApi = utils.graphQLApi;
});

describe('GraphQL Test Suite', () => {
  describe('getUser query', () => {
    test('works with valid input', async () => {
      const id = 'demo_user_id';
      const { user } = await graphQLApi.getUser({ id });

      if (user) {
        expect(user.id).toBe(id);
      } else {
        expect(user).toBe(null);
      }
    });
  });

  describe('getPost query', () => {
    test('works with valid input', async () => {
      const id = 'demo_post_id';
      const { post } = await graphQLApi.getPost({ id });

      if (post) {
        expect(post.id).toBe(id);
      } else {
        expect(post).toBe(null);
      }
    });
  });
});
