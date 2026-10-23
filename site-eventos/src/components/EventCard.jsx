import { Link } from "react-router-dom";

export default function EventCard({ evento }) {
  return (
    <article className="card">
      <div className="card-img" style={{ background: evento.cor }}>
        <span>{evento.emoji}</span>
      </div>
      <div className="card-body">
        <div className="tags">
          {evento.categorias.map((c) => (
            <span key={c} className="tag">{c}</span>
          ))}
        </div>
        <h3>{evento.nome}</h3>
        <p>{evento.resumo}</p>
        <Link to={`/eventos/${evento.id}`} className="btn">
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}