/**
 * TestSuiteUtils
 * This test suite utils helps with setting up jest environment
 * for testing database and graphql api
 */

import { Prisma, prisma } from '../../packages/db';
import { GraphQLApi, GraphQLApiArgs } from '../../packages/graphql';
import { User, Post } from '../../packages/graphql/types';
import { BatchPayload } from '@prisma/client';
import { Logger, logger, generateId } from '../../packages/utils';

enum TestSuiteType {
  DB,
  GRAPHQL
}

class TestSuiteUtils {
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
    global.afterAll(this.afterAll);
  };

  private afterAll = async (done: () => void): Promise<void> => {
    await this.cleanup();
    await this.prisma.disconnect();
    done();
  };

  cleanup = async (): Promise<void> => {
    this.logger.info('Running DB Cleanup');
    const input = {
      where: {
        id: {
          contains: this.testIdPrefix
        }
      }
    };

    const users: BatchPayload = await this.prisma.user.deleteMany(input);
    const posts: BatchPayload = await this.prisma.post.deleteMany(input);

    this.logger.info(`Cleaned ${users.count} users(s)`);
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

export { TestSuiteUtils as default, TestSuiteType };
