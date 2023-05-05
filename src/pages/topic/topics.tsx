import { useSession } from 'next-auth/react';
import NewTopic from 'src/components /components/topic/NewTopic';
import TopicList from 'src/components /components/topic/TopicList';
import { api } from 'src/components /utils/api';

const Topics = () => {
    const { data: sessionData } = useSession();
    const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
        undefined,
        {
            enabled: sessionData?.user !== undefined,
        }
    );

    const handleCreationSuccsess = () => {
        void refetchTopics();
    }

    return (
        <>

            <h1 className='text-3xl'>Topics</h1>

            {topics && <TopicList topics={topics} />}
            <NewTopic onCreateSuccess={handleCreationSuccsess} />
        </>
    )
}

export default Topics