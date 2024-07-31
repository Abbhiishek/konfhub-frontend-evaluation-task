import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useGetEventDetailsById } from '@/hook/getEventDetailByEventId'
import showdown from 'showdown'
import Link from 'next/link'
import { FacebookIcon, Globe, LinkedinIcon, Mail, TwitterIcon } from 'lucide-react'



function OrganiserSection({ id }: { id: string }) {
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
    const html = converter.makeHtml(data?.organiser_info || '');

    return (
        <div className='flex flex-col'>
            <h2 className='text-3xl font-semibold'>Organisers</h2>
            <div className='py-4'>
                <Sheet>
                    <SheetTrigger>
                        <OrganiserCard
                            image={data?.organiser_image_url!}
                            name={data?.organiser_name!}
                            info={html}
                            linkedin={data?.organizer_linkedin_url!}
                            twitter={data?.organizer_twitter_url!}
                            facebook={data?.organizer_facebook_url!}
                            website={data?.organiser_website!}
                            email={data?.organiser_email!}
                        />
                    </SheetTrigger>
                    <SheetContent className="w-[400px] sm:w-[540px]">
                        <SheetHeader>
                            <h2 className="text-2xl font-semibold">About Organiser</h2>
                        </SheetHeader>
                        <div className="flex items-center gap-4 pt-10">
                            <Avatar className="h-28 w-28 ">
                                <AvatarImage src={data?.organiser_image_url} />
                                <AvatarFallback>{data?.organiser_name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-0.5 text-start" >
                                <h3 className="text-xl font-semibold text-start">{data?.organiser_name}</h3>
                            </div>

                        </div>
                        <SheetDescription className='pt-5' dangerouslySetInnerHTML={{ __html: html }}
                        />
                        <OrganiserSocials

                            linkedin={data?.organizer_linkedin_url!}
                            twitter={data?.organizer_twitter_url!}
                            facebook={data?.organizer_facebook_url!}
                            website={data?.organiser_website!}
                            email={data?.organiser_email!}

                        />
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}


function OrganiserCard({ name, image, info, linkedin, twitter, facebook, website, email }: { name: string, image: string, info: string, linkedin: string, twitter: string, facebook: string, website: string, email: string }) {
    return (
        <Card className="max-w-sm w-full">
            <CardHeader className="bg-primary/95 p-6 text-primary-foreground">
                <div className="flex items-center gap-4">
                    <Avatar className="h-28 w-28 ">
                        <AvatarImage src={image} />
                        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-start">
                        <h3 className="text-xl font-semibold">{name}</h3>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="pt-2">
                <p className="text-sm " dangerouslySetInnerHTML={{ __html: info }} />
                <OrganiserSocials
                    linkedin={linkedin!}
                    twitter={twitter!}
                    facebook={facebook!}
                    website={website!}
                    email={email!}
                />
            </CardContent>
        </Card >
    )
}


function OrganiserSocials({ linkedin, twitter, facebook, website, email }: {
    linkedin: string;
    twitter: string;
    facebook: string;
    website: string;
    email: string;
}) {


    return (
        <div className="mt-10 flex flex-col gap-2">
            <h2 className='text-xl font-medium text-start'>Contact Us On</h2>
            <div className='flex justify-start items-center gap-3'>
                <Link href={linkedin} target='_blank' aria-label="LinkedIn" prefetch={false}>
                    <LinkedinIcon className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href={twitter} target='_blank' aria-label="Twitter" prefetch={false}>
                    <TwitterIcon className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href={facebook} target='_blank' aria-label="Facebook" prefetch={false}>
                    <FacebookIcon className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href={website} target='_blank' aria-label="perosnalsite" prefetch={false}>
                    <Globe className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href={website} target='_blank' aria-label="perosnalsite" prefetch={false}>
                    <Mail className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
            </div>
        </div>
    )
}

export default OrganiserSection