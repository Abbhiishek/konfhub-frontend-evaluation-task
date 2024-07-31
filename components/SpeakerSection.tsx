import React from 'react'
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from 'next/link'
import { FacebookIcon, Globe, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import { SpeakerList } from '@/data/speaker'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import showdown from 'showdown'
import { useGetEventDetailsById } from '@/hook/getEventDetailByEventId'

function SpeakerSection({ id }: { id: string }) {


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
    const html = converter.makeHtml(data?.speaker_section_description || '');

    return (
        <div>
            <h2 className='text-3xl font-semibold'>{data?.speaker_section_title}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} className='table text-slate-700' />

            <div className="flex flex-wrap gap-4 py-10">
                {SpeakerList.map((speaker, index) => {
                    return (
                        <Sheet key={index}>
                            <SheetTrigger>
                                <SpeakerCard speaker={speaker} />
                            </SheetTrigger>
                            <SheetContent className="w-[400px] sm:w-[540px]">
                                <SheetHeader>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-28 w-28 ">
                                            <AvatarImage src={speaker.image} />
                                            <AvatarFallback>{speaker.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="space-y-0.5 text-start" >
                                            <h3 className="text-xl font-semibold text-start">{speaker.name}</h3>
                                            <p className="text-sm text-black text-start">
                                                {speaker.title}
                                            </p>
                                            <p className="text-sm text-black text-start">
                                                {speaker.company}
                                            </p>
                                            <div className='max-w-sm'>
                                                <SpeakerSocialsIcons linkedin={speaker.linkedin} twitter={speaker.twitter} facebook={speaker.facebook} website={speaker.website} />
                                            </div>
                                        </div>

                                    </div>
                                    <SheetDescription className='pt-5'>
                                        {speaker.about}
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    )
                })}
            </div>
        </div>

    )
}



export function SpeakerCard({ speaker }: {
    speaker: {
        id: number;
        name: string;
        title: string;
        company: string;
        about: string;
        image: string;
        linkedin: string;
        twitter: string;
        facebook: string;
        website: string;
    }
}) {
    return (
        <Card className="max-w-sm w-full">
            <CardHeader className="bg-primary/95 p-6 text-primary-foreground">
                <div className="flex items-center gap-4">
                    <Avatar className="h-28 w-28 ">
                        <AvatarImage src={speaker.image} />
                        <AvatarFallback>{speaker.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-start">
                        <h3 className="text-xl font-semibold">{speaker.name}</h3>
                        <p className="text-sm text-primary-foreground/80">
                            {speaker.title}
                        </p>
                        <p className="text-sm text-primary-foreground/80">
                            {speaker.company}
                        </p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-6">
                <SpeakerSocialsIcons linkedin={speaker.linkedin} twitter={speaker.twitter} facebook={speaker.facebook} website={speaker.website} />
            </CardContent>
        </Card>
    )
}


function SpeakerSocialsIcons({ linkedin, twitter, facebook, website }: {
    linkedin: string;
    twitter: string;
    facebook: string;
    website: string;
}) {

    return (
        <div className="flex items-center justify-center gap-4">
            <Link href={linkedin} target='_blank' aria-label="LinkedIn" prefetch={false}>
                <LinkedinIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href={twitter} target='_blank' aria-label="Twitter" prefetch={false}>
                <TwitterIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href={facebook} target='_blank' aria-label="Facebook" prefetch={false}>
                <FacebookIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href={website} target='_blank' aria-label="perosnalsite" prefetch={false}>
                <Globe className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
        </div>
    )

}


export default SpeakerSection