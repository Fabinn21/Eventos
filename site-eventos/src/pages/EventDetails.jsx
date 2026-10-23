import { useParams, Link } from "react-router-dom";
import { events } from "../data/events";

export default function EventDetails() {
  const { id } = useParams();
  const evento = events.find((e) => e.id === id);

  if (!evento) {
    return (
      <section className="container section">
        <h1>Evento não encontrado</h1>
        <Link to="/" className="btn">Voltar ao início</Link>
      </section>
    );
  }

  return (
    <article className="container section">
      <Link to="/" className="voltar">← Voltar</Link>

      <div className="detalhe-img" style={{ background: evento.cor }}>
        <span>{evento.emoji}</span>
      </div>

      <h1>{evento.nome}</h1>
      <div className="tags">
        {evento.categorias.map((c) => (
          <span key={c} className="tag">{c}</span>
        ))}
      </div>

      <p className="descricao">{evento.descricao}</p>

      <ul className="info-lista">
        <li><strong>📍 Local:</strong> {evento.local}</li>
        <li><strong>📅 Data:</strong> {evento.data}</li>
      </ul>

      {!evento.confirmado && (
        <p className="aviso">
          ⚠️ Data e/ou local ainda não confirmados. Consulte o site oficial para atualizações.
        </p>
      )}

      <h2>Principais atrações</h2>
      <ul className="atracoes">
        {evento.atracoes.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>

      {evento.site ? (
        <a href={evento.site} target="_blank" rel="noreferrer" className="btn">
          Visitar site oficial
        </a>
      ) : (
        <p className="muted">Este item não possui um site oficial único.</p>
      )}
    </article>
  );
}