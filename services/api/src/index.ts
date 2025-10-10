import cors from "@fastify/cors";
import {
  type FastifyTRPCPluginOptions,
  fastifyTRPCPlugin,
} from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import { type AppRouter, appRouter } from "./routers";
import "dotenv/config";

const server = fastify({
  logger: true,
});

server.register(cors, {
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: false,
});

server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: {
    router: appRouter,
    onError({ path, error }) {
      console.error(`Error in tRPC handler on path '${path}':`, error);
    },
  } satisfies FastifyTRPCPluginOptions<AppRouter>["trpcOptions"],
});

server.get("/", async (_, res) => {
  res.status(200).send({ hello: "world" });
});

server.listen({ port: 3000 });
