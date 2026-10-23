import { Link } from "react-router-dom";
import { events } from "../data/events";
import EventList from "../components/EventList";

export default function Games() {
  const destaque = events.find((e) => e.id === "mundial-brawl-stars");
  const eventosGames = events.filter(
    (e) => e.categorias.includes("Games") || e.categorias.includes("E-sports")
  );

  return (
    <div className="container section">
      <h1>Games e E-sports</h1>

      <article className="destaque" style={{ background: destaque.cor }}>
        <span className="destaque-emoji">{destaque.emoji}</span>
        <div>
          <h2>{destaque.nome}</h2>
          <p>{destaque.descricao}</p>
          <Link to={`/eventos/${destaque.id}`} className="btn btn-light">
            Ver detalhes
          </Link>
        </div>
      </article>

      <section className="section">
        <h2>Campeonatos de e-sports</h2>
        <p className="muted">
          Competições de diversos jogos reúnem equipes profissionais, transmissões ao vivo e
          grandes premiações. Veja também lançamentos e atrações nos eventos abaixo.
        </p>
      </section>

      <section className="section">
        <h2>Todos os eventos de games</h2>
        <EventList eventos={eventosGames} />
      </section>
    </div>
  );
}