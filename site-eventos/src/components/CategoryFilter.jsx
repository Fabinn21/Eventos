import { categorias } from "../data/events";

export default function CategoryFilter({ selecionada, onChange }) {
  return (
    <div className="filters">
      {["Todos", ...categorias].map((c) => (
        <button
          key={c}
          className={selecionada === c ? "chip ativo" : "chip"}
          onClick={() => onChange(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}