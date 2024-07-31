import React from 'react'
import { useGetEventDetailsById } from "@/hook/getEventDetailByEventId";
import showdown from 'showdown';
import { Loader } from 'lucide-react';

function AboutSection({ id }: { id: string }) {
    const { data, isLoading } = useGetEventDetailsById(id)

    if (isLoading) return <div>
        <Loader className='w-10 h-10 animate-spin' />
    </div>

    const converter = new showdown.Converter({
        metadata: false,
        emoji: true,
        ghCodeBlocks: true,
        openLinksInNewWindow: true,
        backslashEscapesHTMLTags: true,
        completeHTMLDocument: true,
        splitAdjacentBlockquotes: true,
        tables: true,
        tablesHeaderId: true,
    });
    const html = converter.makeHtml(data?.description || '');

    return (
        <div className='break-normal w-full  overflow-hidden'>
            <p
                dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}

export default AboutSection