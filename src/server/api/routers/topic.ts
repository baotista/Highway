
import {
    createTRPCRouter,
    protectedProcedure,
} from "src/components /server/api/trpc";
import newTopicSchema from "../../models";

export const topicRouter = createTRPCRouter({
    getAll: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.topic.findMany();
    }),
    create: protectedProcedure
        .input(newTopicSchema)
        .mutation(({ ctx, input }) => {
            return ctx.prisma.topic.create({
                data: {
                    title: input.title,
                    description: input.description,
                },
            });
        }),
});