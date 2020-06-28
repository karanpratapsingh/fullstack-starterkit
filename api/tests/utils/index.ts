/**
 * TestSuiteUtils
 * This test suite utils helps with setting up jest environment
 * for testing database and graphql api
 */
import { PrismaClient } from '@prisma/client';
import { prisma } from '../../packages/db';
import { GraphQLApi, GraphQLApiArgs } from '../../packages/graphql';

enum TestSuiteType {
  DB,
  GRAPHQL
}

class TestSuiteUtils {
  prisma: PrismaClient;
  graphQLApi!: GraphQLApi;

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
    // TODO: write db test cleanups
    await this.prisma.disconnect();
    done();
  };
}

export { TestSuiteUtils as default, TestSuiteType };
