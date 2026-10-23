import { useState } from "react";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  const enviar = (e) => {
    e.preventDefault();
    setEnviado(true);
    e.target.reset();
  };

  return (
    <section className="container section">
      <h1>Contato</h1>
      <p className="muted">Envie sua sugestão de evento ou dúvida.</p>

      <form className="form" onSubmit={enviar}>
        <label>
          Nome
          <input type="text" required />
        </label>
        <label>
          E-mail
          <input type="email" required />
        </label>
        <label>
          Mensagem
          <textarea rows="5" required></textarea>
        </label>
        <button type="submit" className="btn">Enviar</button>
        {enviado && <p className="sucesso">Mensagem enviada com sucesso! ✅</p>}
      </form>
    </section>
  );
}