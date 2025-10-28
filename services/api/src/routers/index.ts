import { publicProcedure, router } from "../trpc";
import { categories } from "./categories";
import { items } from "./items";

export const appRouter = router({
  hello: publicProcedure.query(async () => {
    return { message: "Hello world!" };
  }),
  items,
  categories,
});

export type AppRouter = typeof appRouter;
