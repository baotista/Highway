import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
} from "src/components /server/api/trpc";
import { title } from "process";

export const topicRouter = createTRPCRouter({
    getAll: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.topic.findMany();
    }),
    create: protectedProcedure
        .input(z.object({ title: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.topic.create({
                data: {
                    title: input.title
                },
            });
        }),
});