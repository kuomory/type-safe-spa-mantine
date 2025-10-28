import { PrismaClient } from "@workspace/db/generated/prisma";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

class PrismaSingleton {
  private static instance: PrismaClient | null = globalForPrisma.prisma || null;
  private constructor() {}
  public static async getInstance(): Promise<PrismaClient> {
    if (PrismaSingleton.instance) return PrismaSingleton.instance;
    try {
      const prisma = new PrismaClient({
        log: ["error", "warn", "query", "info"],
      });
      PrismaSingleton.instance = prisma;
      globalForPrisma.prisma = prisma;
      return PrismaSingleton.instance;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}

export const db = await PrismaSingleton.getInstance();
