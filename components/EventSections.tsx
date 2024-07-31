"use client"


import { useState } from "react";
import { Tabs, Tab } from '@nextui-org/react';
import { BadgeCheck, EyeIcon, LucideWorkflow, Mic2, School, Speaker, Ticket, TrendingUp, Users } from 'lucide-react';
import AboutSection from "./AboutSection";
import TicketSection from "./TicketSection";
import SpeakerSection from "./SpeakerSection";
import WorkshopSection from "./WorkshopSection";
import SponsorSection from "./SponsorSection";
import OrganiserSection from "./OrganiserSection";

function EventSections({ eventid }: { eventid: string }) {

    const [selected, setSelected] = useState<any>('about')

    return (
        <div className="h-full w-full py-4">
            <Tabs
                selectedKey={selected}
                onSelectionChange={setSelected}
                variant="underlined"
                aria-label="Dashboard tabs"
                color="primary"
                classNames={{
                    tab: 'h-full text-lg',
                    tabContent: "text-black overflow-y-scroll",
                    tabList: "flex flex-wrap md:flex-nowrap justify-center",
                    panel: "h-full"
                }}
            >
                <Tab
                    key="about"
                    title={
                        <div className="flex items-center gap-2 pb-4 justify-center">
                            <EyeIcon className="w-6 h-6" />
                            <span className="">About</span>
                        </div>
                    }
                >
                    <AboutSection id={eventid} />
                </Tab>
                <Tab
                    key="tickets"
                    title={
                        <div className="flex items-center gap-2 pb-4  justify-center">
                            <Ticket className="w-6 h-6" />
                            <span>Tickets</span>
                        </div>
                    }
                >
                    <TicketSection id={eventid} />
                </Tab>
                <Tab
                    key="speakers"
                    title={
                        <div className="flex items-center gap-2 pb-4  justify-center">
                            <Mic2 className="w-6 h-6" />
                            <span>Speakers</span>
                        </div>
                    }
                >
                    <SpeakerSection id={eventid} />
                </Tab>
                <Tab
                    key="workshops"
                    title={
                        <div className="flex items-center gap-2 pb-4  justify-center">
                            <LucideWorkflow className="w-6 h-6" />
                            <span>Workshops</span>
                        </div>
                    }
                >
                    <WorkshopSection id={eventid} />
                </Tab>
                <Tab
                    key="sponsors"
                    title={
                        <div className="flex items-center gap-2 pb-4  justify-center">
                            <School className="w-6 h-6" />
                            <span>Sponsors</span>
                        </div>
                    }
                >
                    <SponsorSection id={eventid} />
                </Tab>
                <Tab
                    key="organisers"
                    title={
                        <div className="flex items-center gap-2 pb-4  justify-center">
                            <Users className="w-6 h-6" />
                            <span>Organisers</span>
                        </div>
                    }
                >
                    <OrganiserSection id={eventid} />
                </Tab>
            </Tabs>
        </div>
    )
}

export default EventSections