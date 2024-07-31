import EventHeader, { EventHeaderCard } from "@/components/EventHeader";
import EventSections from "@/components/EventSections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center container h-full pt-20">
      <div className='flex lg:flex-row flex-col w-full h-full lg:gap-4 gap-3'>
        <div className='lg:basis-4/6 h-full'>
          <EventHeader />
          <EventSections eventid="konfhub-frontend-evaluation-task" />
        </div>
        <div className="lg:basis-2/6 hidden w-full lg:block h-full">
          <EventHeaderCard />
        </div>
      </div>
    </main>
  );
}
