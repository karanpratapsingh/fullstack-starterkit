import { PrismaClient } from '@prisma/client';

class Prisma extends PrismaClient {
  private static instance: Prisma;

  private constructor() {
    super();
  }

  static getInstance(): Prisma {
    if (!Prisma.instance) {
      Prisma.instance = new Prisma();
    }

    return Prisma.instance;
  }
}

const prisma = Prisma.getInstance();

export { Prisma, prisma };
