import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Cultura from "./pages/Cultura";
import EventDetails from "./pages/EventDetails";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/cultura" element={<Cultura />} />
          <Route path="/eventos/:id" element={<EventDetails />} />
          <Route path="/contato" element={<Contato />} />
          <Route
            path="*"
            element={
              <section className="container">
                <h1>Página não encontrada</h1>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}