import { publicProcedure, router } from "../trpc";
import { items } from "./items";

export const appRouter = router({
  hello: publicProcedure.query(async () => {
    return { message: "Hello world!" };
  }),
  items,
});

export type AppRouter = typeof appRouter;
