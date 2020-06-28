/**
 * TestSuiteUtils
 * This test suite utils helps with setting up jest environment
 * for testing database and graphql api
 */
import { Prisma, prisma } from '../../packages/db';
import { GraphQLApi, GraphQLApiArgs } from '../../packages/graphql';
import { User, Post } from '../../packages/graphql/types';
import { BatchPayload } from '@prisma/client';
import { generateId } from '../../packages/utils';

enum TestSuiteType {
  DB,
  GRAPHQL
}

class TestSuiteUtils {
  prisma: Prisma;
  graphQLApi!: GraphQLApi;
  private testIdPrefix: string = '_test_id';

  constructor(type: TestSuiteType) {
    this.prisma = prisma;
    if (type === TestSuiteType.GRAPHQL) {
      const graphQLApiArgs: GraphQLApiArgs = {
        context: {
          prisma: this.prisma
        }
      };
      this.graphQLApi = new GraphQLApi(graphQLApiArgs);
    }
  }

  setupJest = (): void => {
    global.afterAll(this.afterAll);
  };

  private afterAll = async (done: () => void): Promise<void> => {
    await this.cleanup();
    await this.prisma.disconnect();
    done();
  };

  cleanup = async (): Promise<void> => {
    const input = {
      where: {
        id: {
          contains: this.testIdPrefix
        }
      }
    };

    const users: BatchPayload = await this.prisma.user.deleteMany(input);
    const post: BatchPayload = await this.prisma.user.deleteMany(input);

    console.log(`Cleaned ${users.count} users(s)`);
    console.log(`Cleaned ${post.count} post(s)`);
  };

  createUserInput = (user?: User): User => {
    const id = generateId(this.testIdPrefix);
    const uniqueEmail = generateId();
    return {
      id,
      name: 'test user',
      email: `${uniqueEmail}@email.com`,
      ...user
    };
  };

  createPostInput = (post?: Post): Post => {
    const id = generateId(this.testIdPrefix);
    return {
      id,
      title: 'test title',
      published: true,
      ...post
    };
  };
}

export { TestSuiteUtils as default, TestSuiteType };
