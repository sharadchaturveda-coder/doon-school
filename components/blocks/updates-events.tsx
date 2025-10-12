import Image from 'next/image';

interface Update {
  title: string;
  date: string;
  desc: string;
  image: string;
}

interface Event {
  title: string;
  date: string;
  time: string;
  desc: string;
}

interface UpdatesEventsProps {
  latestUpdates: Update[];
  upcomingEvents: Event[];
}

export default function UpdatesEvents({ latestUpdates, upcomingEvents }: UpdatesEventsProps) {
  return (
    <section className="relative w-full bg-[#F9FAFB] py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* LATEST UPDATES */}
        <div>
          <h2 className="font-heading text-xl md:text-2xl font-bold text-primary mb-6">
            Latest Updates
          </h2>

          <div className="bg-white shadow-sm border border-gray-100 rounded-sm divide-y divide-gray-100">
            {/* Update 1 */}
            {latestUpdates.map((update, index) => (
              <div key={index} className="flex gap-4 p-2 md:p-4">
                <Image
                  src={update.image}
                  alt={update.title}
                  width={128}
                  height={96}
                  className="w-32 h-24 object-cover rounded-sm"
                />
                <div className="flex flex-col">
                  <h3 className="text-primary font-semibold">{update.title}</h3>
                  <p className="text-[#FFD300] text-sm italic">{update.date}</p>
                  <p className="text-gray-700 text-sm mt-1">
                    {update.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-primary text-white uppercase text-sm font-semibold px-8 py-3">
              View All
            </button>
          </div>
        </div>

        {/* UPCOMING EVENTS */}
        <div>
          <h2 className="font-heading text-xl md:text-2xl font-bold text-primary mb-6">
            Upcoming Events
          </h2>

          {/* Event Cards */}
          {upcomingEvents.map((event, index) => {
            const [month, dayWithComma, year] = event.date.split(' ');
            const day = dayWithComma.replace(',', '');
            return (
              <div key={index} className="bg-white p-4 mb-4 shadow-sm border border-gray-100 flex gap-4">
                <div className="w-20 text-center">
                  <div className="bg-[#FFD300] text-primary font-bold text-2xl py-2">{day}</div>
                  <div className="bg-[#FFD300] text-primary font-medium text-sm">{month}</div>
                  <div className="bg-primary text-white text-sm py-1">{year}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-primary font-semibold">{event.title}</h3>
                  <p className="text-gray-700 text-sm mt-1">
                    {event.desc}
                  </p>
                  <p className="text-primary font-semibold text-sm mt-2">
                    {event.time}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="flex justify-center mt-6">
            <button className="bg-primary text-white uppercase text-sm font-semibold px-8 py-3">
              All Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
