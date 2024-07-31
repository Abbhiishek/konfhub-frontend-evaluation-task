import React from 'react'
import { AvailableCategoryTickets, AvailableUnCategorisedTickets } from "@/data/ticket"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'
import { formatNumber } from '@/lib/utils'
import { MapPin } from 'lucide-react'
import Link from 'next/link'
import { Accordion, AccordionItem } from "@nextui-org/react";


function TicketSection({ id }: { id: string }) {


    return (
        <div className='flex flex-col gap-3 max-w-4xl'>
            {AvailableUnCategorisedTickets.map((ticket, index) => {
                return <TicketCard key={index} ticket={ticket} />
            })}
            <Accordion variant="splitted" defaultExpandedKeys={["1"]}>
                {AvailableCategoryTickets.map((category, index) => {
                    return (
                        <AccordionItem
                            key={index}
                            aria-label="Accordion 1"
                            className='rounded-lg'
                            title={category.categoryName}
                        >
                            <p className='text-base text-muted-foreground'>{category.description}</p>
                            <div className='flex flex-col gap-3 max-w-4xl py-4'>
                                {category.tickets.map((ticket, index) => {
                                    return <TicketCard key={index} ticket={ticket} />
                                })}
                            </div>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </div >
    )
}

function TicketCard({ ticket }: { ticket: any }) {
    const isdonation = ticket.ticketType === "donation"
    return (
        <Card className='border-primary/70 shadow-lg'>
            <CardHeader>
                <CardTitle className='text-3xl'>{ticket.name}</CardTitle>
                <CardDescription className='text-lg'>
                    {ticket.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Link href={ticket.venueLink} target='_blank' className='flex justify-start items-center text-blue-500 hover:text-blue-600 gap-2'>
                    <MapPin size={18} />
                    <span>{ticket.venueName}</span>
                </Link>
                <p className='pb-2'>This is additional venue details.</p>
                <span className='p-2 bg-slate-200 hover:bg-slate-200/90 rounded-xl text-sm'>Available Till: {ticket.validtill}</span>
            </CardContent>
            <CardFooter className='flex flex-row justify-between items-center'>
                {!isdonation ?
                    <p className='font-semibold text-2xl'>{ticket.ispaid ? `₹${formatNumber(ticket.price)}` : "FREE"}</p>
                    :
                    <p>Min <span className='font-semibold text-2xl'>₹{formatNumber(ticket.minprice!)}</span>  - Max <span className='font-semibold text-2xl'>₹{formatNumber(ticket.price)}</span></p>}

                <Button
                    variant={"default"}
                    size={"lg"}
                    className='bg-black hover:bg-black/70 font-semibold text-lg'>
                    {isdonation ? "Donate" : "Register"}
                </Button>
            </CardFooter>
        </Card>
    )
}


export default TicketSection