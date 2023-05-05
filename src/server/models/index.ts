import { z } from "zod";

const optionalDescription = z.string()
    .min(4, 'The description should be meaningfull : 4 letters are a minimum!')
    .optional()
    .or(z.literal(''));

const newTopicSchema = z.object({
    title: z.string().nonempty('A title is required to create a topic'),
    description: optionalDescription,
});

export default newTopicSchema;