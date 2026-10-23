import { Link } from "react-router-dom";
import { events } from "../data/events";
import EventCard from "../components/EventCard";
import EventList from "../components/EventList";

export default function Home() {
  const destaques = events.filter((e) => e.destaque);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Descubra os próximos grandes eventos</h1>
          <p>Games, livros, e-sports e cultura geek em um só lugar.</p>
          <Link to="/games" className="btn">Explorar eventos</Link>
        </div>
      </section>

      <section className="container section">
        <h2>Eventos em destaque</h2>
        <div className="grid">
          {destaques.map((e) => (
            <EventCard key={e.id} evento={e} />
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>Próximos eventos</h2>
        <EventList eventos={events} />
      </section>
    </>
  );
}