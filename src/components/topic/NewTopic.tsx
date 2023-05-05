import { api } from 'src/components /utils/api';

type newTopicProps = {
    onCreateSuccess?: () => void;
}

const NewTopic = ({ onCreateSuccess }: newTopicProps) => {

    const createTopic = api.topic.create.useMutation({
        onSuccess: () => {
            if (onCreateSuccess) {
                onCreateSuccess();
            }
        }
    })

    return (
        <div className='my-5'>
            <input
                type="text"
                placeholder="Title"
                className="input-bordered input input-sm w-full"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        console.log('create topic')
                        createTopic.mutate({
                            title: e.currentTarget.value,
                        });
                        e.currentTarget.value = "";
                    }
                }}
            />
        </div>
    )
}

export default NewTopic