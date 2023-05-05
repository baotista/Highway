import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import newTopicSchema from 'src/components /server/models';
import { api } from 'src/components /utils/api';
import { type z } from 'zod';


type newTopicProps = {
    onCreateSuccess?: () => void;
}



type FormData = z.infer<typeof newTopicSchema>;

const NewTopic = ({ onCreateSuccess }: newTopicProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(newTopicSchema),
    })

    const createTopic = api.topic.create.useMutation({
        onSuccess: () => {
            if (onCreateSuccess) {
                onCreateSuccess();
            }
        }
    })

    const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
        createTopic.mutate({
            title: data.title,
            description: data.description,
        });
        reset()
    }

    return (
        <form className='my-20' onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
            <div className='flex gap-4'>
                <div className="w-full">
                    <input
                        {...register('title', { required: true })}
                        type="text"
                        placeholder="Title"
                        className={`input-bordered input input-sm w-full ${errors?.description ? 'input-error' : ''}`}
                        autoComplete='off'
                    />
                    <div className='text-red-700 mt-2'>{errors?.title?.message}</div>
                </div>
                <div className="w-full">
                    <input
                        {...register('description')}
                        type="text"
                        placeholder="Description"
                        className={`input-bordered input input-sm w-full ${errors?.description ? 'input-error' : ''}`}
                        autoComplete='off'
                    />
                    <div className='text-red-700 mt-2'>{errors?.description?.message}</div>
                </div>
            </div>
            <div className={`w-full flex justify-end ${errors?.title || errors?.description ? 'mt-0' : 'mt-5'}`}>
                <input className="btn btn-primary" type='submit' value="Add" />
            </div>
        </form>
    )
}

export default NewTopic