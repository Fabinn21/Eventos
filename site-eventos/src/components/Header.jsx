import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const fechar = () => setAberto(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={fechar}>
          Geek<span>Eventos</span>
        </Link>

        <button
          className="menu-btn"
          aria-label="Abrir menu"
          onClick={() => setAberto(!aberto)}
        >
          ☰
        </button>

        <nav className={aberto ? "nav aberto" : "nav"}>
          <NavLink to="/" onClick={fechar}>Início</NavLink>
          <NavLink to="/games" onClick={fechar}>Games e E-sports</NavLink>
          <NavLink to="/cultura" onClick={fechar}>Livros e Cultura</NavLink>
          <NavLink to="/contato" onClick={fechar}>Contato</NavLink>
        </nav>
      </div>
    </header>
  );
}