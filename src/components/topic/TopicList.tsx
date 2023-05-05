import type { Topic } from '@prisma/client'
import React from 'react'

type TopicListProps = {
    topics: Topic[]
}

const TopicList = ({ topics }: TopicListProps) => {
    return (
        <div className="flex flex-col my-5">
            <div className='grid grid-cols-4 gap-2 font-bold mb-2'>
                <div>Title</div>
                <div>Description</div>
                <div>StartDate</div>
                <div>EndDate</div>
            </div>
            {topics.map(topic => (
                <div className='grid grid-cols-4 gap-2 border-t py-2' key={topic.id}>
                    <div>{topic.title}</div>
                    <div>{topic.description}</div>
                    <div>{topic.startDate.toDateString()}</div>
                    <div>{topic.endDate.toDateString()}</div>
                </div>
            )
            )}
        </div>
    )
}

export default TopicList