import z from "zod";
import { db } from "../../db";
import { publicProcedure } from "../../trpc";

export const add = publicProcedure
  .input(
    z.object({
      name: z.string().min(1),
      description: z.string().optional(),
      categoryKey: z.nanoid().optional(),
    }),
  )
  .mutation(async ({ input }) => {
    return await db.item.create({
      data: {
        name: input.name,
        description: input.description,
        Category: {
          connect: {
            key: input.categoryKey,
          },
        },
      },
    });
  });
