export default function SearchBar({ valor, onChange }) {
  return (
    <input
      type="search"
      className="search"
      placeholder="Pesquisar evento pelo nome..."
      value={valor}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}