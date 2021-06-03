/**
 * TestSuiteUtils
 * This test suite utils helps with setting up jest environment
 * for testing database and graphql api
 */

import { PRISMA, Prisma, prisma } from '../../packages/db';
import { GraphQLApi, GraphQLApiArgs } from '../../packages/graphql';
import { Post, User } from '../../packages/graphql/types';
import { generateId, Logger, logger } from '../../packages/utils';

enum TestSuiteType {
  DB,
  GRAPHQL
}

interface TestSuite {
  prisma: Prisma;
  graphQLApi: GraphQLApi;
  logger: Logger;
  createUserInput: (user?: User) => User;
  createPostInput: (post?: Post) => Post;
}

class TestSuiteUtils implements TestSuite {
  prisma: Prisma = prisma;
  graphQLApi!: GraphQLApi;
  logger: Logger = logger;

  private testIdPrefix: string = '_test_id';

  constructor(type: TestSuiteType) {
    if (type === TestSuiteType.GRAPHQL) {
      const graphQLApiArgs: GraphQLApiArgs = {
        context: {
          prisma: this.prisma,
          logger: this.logger
        }
      };
      this.graphQLApi = new GraphQLApi(graphQLApiArgs);
    }
    this.setupJest();
  }

  private setupJest = (): void => {
    jest.setTimeout(60000);
    global.afterAll(this.afterAll);
  };

  private afterAll = async (done: () => void): Promise<void> => {
    await this.cleanup();
    await this.prisma.$disconnect();
    done();
  };

  private cleanup = async (): Promise<void> => {
    this.logger.info('Running DB Cleanup');
    const input = {
      where: {
        id: {
          contains: this.testIdPrefix
        }
      }
    };

    const users: PRISMA.BatchPayload = await this.prisma.user.deleteMany(input);
    const posts: PRISMA.BatchPayload = await this.prisma.post.deleteMany(input);

    this.logger.info(`Cleaned ${users.count} user(s)`);
    this.logger.info(`Cleaned ${posts.count} post(s)`);
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

export { TestSuiteUtils as default, TestSuite, TestSuiteType };
