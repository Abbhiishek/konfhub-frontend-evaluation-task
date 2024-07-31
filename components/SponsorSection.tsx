"use client";

import { useGetEventDetailsById } from '@/hook/getEventDetailByEventId'
import Image from 'next/image'
import React from 'react'
import showdown from 'showdown';

function SponsorSection({ id }: { id: string }) {

    const { data } = useGetEventDetailsById(id)
    const converter = new showdown.Converter({
        metadata: false,
        emoji: true,
        ghCodeBlocks: true,
        openLinksInNewWindow: true,
        backslashEscapesHTMLTags: true,
        completeHTMLDocument: true,
        simpleLineBreaks: true,
        splitAdjacentBlockquotes: true,
        tables: true,
        tablesHeaderId: true,
    });
    const html = converter.makeHtml(data?.sponsor_section_description || '');

    return (
        <div>
            <h2 className='text-3xl font-semibold'>{data?.sponsor_section_title}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} className='table text-slate-700' />
            <div className='flex py-5'>
                <Image
                    src='https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=2048&q=75'
                    width={400}
                    height={200}
                    alt='sponsor1'
                    className='border-2 border-primary/40 rounded-md'
                />

            </div>
        </div>
    )
}

export default SponsorSection