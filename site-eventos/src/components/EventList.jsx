import { useState } from "react";
import EventCard from "./EventCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

export default function EventList({ eventos, mostrarFiltros = true }) {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const filtrados = eventos.filter((e) => {
    const nomeOk = e.nome.toLowerCase().includes(busca.toLowerCase());
    const catOk = categoria === "Todos" || e.categorias.includes(categoria);
    return nomeOk && catOk;
  });

  return (
    <div>
      {mostrarFiltros && (
        <div className="toolbar">
          <SearchBar valor={busca} onChange={setBusca} />
          <CategoryFilter selecionada={categoria} onChange={setCategoria} />
        </div>
      )}

      {filtrados.length === 0 ? (
        <p className="empty">Nenhum evento encontrado para a sua pesquisa. 😕</p>
      ) : (
        <div className="grid">
          {filtrados.map((e) => (
            <EventCard key={e.id} evento={e} />
          ))}
        </div>
      )}
    </div>
  );
}