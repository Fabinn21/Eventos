import { Link } from "react-router-dom";
import { events } from "../data/events";
import EventList from "../components/EventList";

export default function Cultura() {
  const destaque = events.find((e) => e.id === "bienal-do-livro");
  const eventosCultura = events.filter(
    (e) => e.categorias.includes("Livros") || e.categorias.includes("Cultura Geek")
  );

  return (
    <div className="container section">
      <h1>Livros e Cultura Geek</h1>

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

      <section className="section grid">
        <article className="info-box">
          <h3>📖 Feiras literárias</h3>
          <p>Encontros com autores, lançamentos e muito mais.</p>
        </article>
        <article className="info-box">
          <h3>🦸 Quadrinhos</h3>
          <p>HQs, mangás e artistas independentes.</p>
        </article>
        <article className="info-box">
          <h3>🎌 Animes</h3>
          <p>Festivais com música, cosplay e cultura japonesa.</p>
        </article>
      </section>

      <section className="section">
        <h2>Eventos de cultura</h2>
        <EventList eventos={eventosCultura} />
      </section>
    </div>
  );
}