import z from "zod";
import { db } from "../../db";
import { publicProcedure } from "../../trpc";

export const list = publicProcedure.input(z.void()).query(async () => {
  return await db.item.findMany({
    include: {
      Category: true,
    },
  });
});
