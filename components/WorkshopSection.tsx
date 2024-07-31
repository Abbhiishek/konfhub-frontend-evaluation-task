import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CalendarIcon, ClockIcon } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import Image from 'next/image'
import { WorkshopList } from '@/data/workshop'
import { cn } from '@/lib/utils'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { SpeakerCard } from './SpeakerSection'
import { useGetEventDetailsById } from '@/hook/getEventDetailByEventId'
import showdown from 'showdown'


function WorkshopSection({ id }: { id: string }) {

    const { data, isLoading } = useGetEventDetailsById(id)

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
    const html = converter.makeHtml(data?.workshop_section_description || '');

    return (
        <div>
            <h2 className='text-3xl font-semibold'>{data?.workshop_section_title}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} className='table text-slate-700' />
            <div className='flex flex-wrap gap-3 py-5'>
                {WorkshopList.map((workshop, index) => {
                    return (
                        <Card className="w-full max-w-sm grid gap-6" key={index}>
                            <div className='group relative block overflow-hidden rounded-t-lg'>
                                <Image
                                    src={workshop.image}
                                    alt={`event`}
                                    width={400}
                                    height={200}
                                    className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="grid gap-2 flex-1 px-4">
                                <h3 className="text-2xl font-semibold">
                                    {workshop.name}
                                </h3>
                                <span className='truncate text-sm text-muted-foreground'>{workshop.description}</span>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <CalendarIcon className="w-5 h-5" />
                                    <span>{workshop.date}</span>
                                    <Separator orientation="vertical" className="h-4" />
                                    <ClockIcon className="w-5 h-5" />
                                    <span>{workshop.time}</span>
                                </div>
                            </div>
                            <CardFooter className='flex justify-between items-center'>
                                <div className='flex flex-wrap'>
                                    {workshop.speakers.map((speaker, index) => {
                                        return (
                                            <TooltipProvider key={index}>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <Avatar key={index} className={cn('h-8 w-8 border-2 border-primary/70',
                                                            index > 0 ? '-translate-x-2' : ''
                                                        )}>
                                                            <AvatarImage src={speaker.image} />
                                                            <AvatarFallback>{speaker.name.charAt(0)}</AvatarFallback>
                                                        </Avatar>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{speaker.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>

                                        )
                                    })}
                                </div>
                                <Sheet>
                                    <SheetTrigger>
                                        <Button className='bg-black hover:bg-black/80'>View Details</Button>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle className='text-3xl '>{workshop.name}</SheetTitle>
                                            <SheetDescription className='pt-5'>
                                                {workshop.description}
                                                <div className="flex items-center gap-2 text-muted-foreground pt-4">
                                                    <CalendarIcon className="w-5 h-5" />
                                                    <span>{workshop.date}</span>
                                                    <Separator orientation="vertical" className="h-4" />
                                                    <ClockIcon className="w-5 h-5" />
                                                    <span>{workshop.time}</span>
                                                </div>
                                            </SheetDescription>
                                            <Separator orientation="horizontal" />
                                            <div className="flex flex-col gap-4">
                                                <h2 className='text-3xl font-semibold'>Speakers</h2>
                                                <div className='flex flex-wrap gap-3'>
                                                    {workshop.speakers.map((speaker, index) => {
                                                        return <SpeakerCard key={index} speaker={speaker} />
                                                    })}
                                                </div>
                                            </div>

                                        </SheetHeader>
                                    </SheetContent>
                                </Sheet>
                            </CardFooter>
                        </Card>
                    )
                })}

            </div>
        </div>
    )
}



export default WorkshopSection