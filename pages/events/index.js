import Image from 'next/image';

const EventsPage = ({data}) => {
  return (
    <div>
      <h1>Event page</h1>
      {data.map(ev => (
        <a key={ev.id} href={`/events/${ev.id}`}>
          <Image src={ev.image} alt={ev.title} width={300} height={400} />
          <h2>{ev.title}</h2>
        </a>
      ))}
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json')
  return {
    props: {
      data: events_categories,
    }
  }
}
