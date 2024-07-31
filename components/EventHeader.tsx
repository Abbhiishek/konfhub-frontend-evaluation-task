"use client"

import { useGetEventDetailsById } from '@/hook/getEventDetailByEventId';
import Image from 'next/image'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ExternalLink, Ticket, Video } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { useCountdown } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

function EventHeader() {

    const { data } = useGetEventDetailsById('konfhub-frontend-evaluation-task');

    return (
        <div className='flex flex-col gap-3 '>
            <Image
                src={data?.event_poster_url!}
                width={500}
                height={100}
                alt='event_banner'
                className='rounded-lg shadow-md shadow-primary ring-1 ring-primary aspect-video object-cover w-full h-full'
            />
            <div className='lg:hidden block'>
                <Card className='flex flex-col w-full h-full border-primary'>
                    <CardHeader>
                        <CardTitle className='font-bold lg:text-4xl'>{data?.name}</CardTitle>
                        <CardDescription className='flex flex-row justify-start gap-10 items-center'>
                            <div className="flex flex-row justify-start items-center gap-3">
                                <Video size={24} />
                                <span className='font-semibold text-black'>Online</span>
                            </div>
                            <div className="flex flex-row justify-start items-center gap-3">
                                <Ticket size={24} />
                                <span className='font-semibold text-black'>{data?.is_free ? "Free" : "Paid"}</span>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className='flex-1 flex flex-col gap-2'>
                        <div><span className='font-bold'>Event Live Link: </span><Link href={data?.event_live_link! || ""} className='underline text-blue-400 decoration-blue-400'>Open streaming website</Link> </div>

                        <div className='italic'><span className='font-bold not-italic'>Date :{"  "}</span>Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST </div>

                        <br />
                        <div className='italic'>
                            <span className='font-light not-italic'>EVENT STARTS IN</span>
                            <br />
                            <CountdownComponent startDateTime={data?.start_date!} />
                        </div>
                    </CardContent>
                    <CardFooter className='flex flex-col w-full gap-2'>
                        <Link href={data?.event_live_link! || ""} className='w-full'>
                            <Button className='w-full bg-black hover:bg-black/80' variant={"default"}>
                                Buy Now
                            </Button>
                        </Link>
                        <Link href={data?.event_website || ""} className='w-full'>
                            <Button className='w-full gap-3 border-2 border-black/50' variant={"outline"}>
                                Official Website <ExternalLink size={20} />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}


export function EventHeaderCard() {

    const { data } = useGetEventDetailsById('konfhub-frontend-evaluation-task');

    return (
        <div className='fixed max-w-md'>
            <Card className='flex flex-col w-full h-full border-primary'>
                <CardHeader>
                    <CardTitle className='font-bold lg:text-4xl'>{data?.name}</CardTitle>
                    <CardDescription className='flex flex-row justify-start gap-10 items-center'>
                        <div className="flex flex-row justify-start items-center gap-3">
                            <Video size={24} />
                            <span className='font-semibold text-black'>Online</span>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-3">
                            <Ticket size={24} />
                            <span className='font-semibold text-black'>{data?.is_free ? "Free" : "Paid"}</span>
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent className='flex-1 flex flex-col gap-2 '>
                    <div><span className='font-bold'>Event Live Link: </span><Link href={data?.event_live_link! || ""} className='underline text-blue-400 decoration-blue-400'>Open streaming website</Link> </div>

                    <div className='italic'><span className='font-bold not-italic'>Date :{"  "}</span>Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST </div>

                    <br />
                    <div className='italic'>
                        <span className='font-light not-italic'>EVENT STARTS IN</span>
                        <br />
                        <CountdownComponent startDateTime={data?.start_date!} />
                    </div>
                </CardContent>
                <CardFooter className='flex flex-col w-full gap-2'>
                    <Link href={data?.event_live_link! || ""} className='w-full'>
                        <Button className='w-full bg-black hover:bg-black/80' variant={"default"}>
                            Buy Now
                        </Button>
                    </Link>
                    <Link href={data?.event_website || ""} className='w-full'>
                        <Button className='w-full gap-3 border-2 border-black/50' variant={"outline"}>
                            Official Website <ExternalLink size={20} />
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}




function CountdownComponent({ startDateTime }: { startDateTime: string }) {
    const timeLeft = useCountdown(startDateTime);

    return (
        <div className="font-medium not-italic flex flex-row lg:gap-3 w-full gap-1">
            <span className='flex basis-1/4 flex-col items-center justify-center  bg-gray-100 p-2 rounded-lg'>
                <p className='lg:text-lg'>{timeLeft.days}</p>
                <p className='text-sm'>Day</p>
            </span>
            <span className='flex justify-center items-center'>
                :&nbsp;
            </span>
            <span className='flex basis-1/4 flex-col items-center justify-center bg-gray-100 p-2 rounded-lg'>
                <p className='lg:text-lg'>{timeLeft.hours}</p>
                <p className='text-sm'>Hour</p>
            </span>
            <span className='flex justify-center items-center'>
                :&nbsp;
            </span>
            <span className='flex basis-1/4 flex-col items-center justify-center bg-gray-100  p-2 rounded-lg'>
                <p className='lg:text-lg'>{timeLeft.minutes}</p>
                <p className='text-sm'>Min</p>
            </span>
            <span className='flex justify-center items-center'>
                :&nbsp;
            </span>
            <span className='flex basis-1/4 flex-col items-center justify-center bg-gray-100  p-2 rounded-lg truncate'>
                <p className='lg:text-lg'>{timeLeft.seconds}</p>
                <p className='text-sm '>Sec</p>
            </span>
        </div>
    );
}

export default EventHeader