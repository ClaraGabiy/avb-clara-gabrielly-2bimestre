import { useEffect, useState } from "react";
import axios from "axios";

export default function Detalhes() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios
      .get("https://catfact.ninja/breeds?limit=10")
      .then(res => setBreeds(res.data.data))
      .catch(() => {});
  }, []);

  return (
    <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold text-center text-rose-600 mb-6">🐈 Raças de Gatos</h1>
      <ul className="grid gap-4">
        {breeds.map((b, i) => (
          <li key={i} className="p-4 bg-pink-100 rounded-lg shadow text-gray-700">
            <p><strong>Raça:</strong> {b.breed}</p>
            <p><strong>Origem:</strong> {b.country}</p>
            <p><strong>Corpo:</strong> {b.body_type || 'Desconhecido'}</p>
            <p><strong>Padrão:</strong> {b.pattern || 'Desconhecido'}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}