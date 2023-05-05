import { createTRPCRouter } from "src/components /server/api/trpc";
import { exampleRouter } from "src/components /server/api/routers/example";
import { topicRouter } from './routers/topic';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  topic: topicRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
