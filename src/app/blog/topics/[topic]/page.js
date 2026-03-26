// client/src/app/blog/topics/[topic]/page.js
import { topics } from '@/data/blogData';
import TopicClient from './TopicClient';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const { topic } = await params;
    const topicData = topics[topic];
    if (!topicData) return { title: 'Topic Not Found' };

    return {
        title: `${topicData.title} | Architectural Insights | Mannat`,
        description: topicData.description,
    };
}

export default async function TopicPage({ params }) {
    const { topic } = await params;
    const topicData = topics[topic];
    if (!topicData) notFound();

    return <TopicClient topic={topic} topicData={topicData} />;
}
