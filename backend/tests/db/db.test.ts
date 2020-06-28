import TestSuiteUtils, { TestSuiteType } from '../utils';
import { User, Post } from '@prisma/client';
import { Prisma } from '../../packages/db';

const utils = new TestSuiteUtils(TestSuiteType.DB);
utils.setupJest();

let prisma: Prisma;
let createUserInput;
let createPostInput;

beforeAll(() => {
  prisma = utils.prisma;
  createUserInput = utils.createUserInput;
  createPostInput = utils.createPostInput;
});

describe('DB Test Suite', () => {
  test('User should be created', async () => {
    const input: User = createUserInput();
    const user = await prisma.user.create({ data: input });
    expect(user.id).toBe(input.id);
  });

  test('Post should be created', async () => {
    const input: Post = createPostInput();
    const post = await prisma.post.create({ data: input });
    expect(post.id).toBe(input.id);
  });
});
