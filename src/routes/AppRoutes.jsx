import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";
import Favoritos from "../pages/Favoritos";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      {/* Navegação do topo */}
      <nav className="bg-pink-100 shadow-md p-4 flex justify-center gap-6">
        <Link to="/" className="text-rose-500 font-semibold hover:text-rose-700 transition">
          Fatos
        </Link>
        <Link to="/detalhes" className="text-rose-500 font-semibold hover:text-rose-700 transition">
          Raças
        </Link>
        <Link to="/favoritos" className="text-rose-500 font-semibold hover:text-rose-700 transition">
          Favoritos
        </Link>
      </nav>

      {/* Conteúdo principal */}
      <main className="bg-pink-50 min-h-screen p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes" element={<Detalhes />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}