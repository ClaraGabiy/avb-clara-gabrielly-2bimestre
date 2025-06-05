import { useEffect, useState } from "react";
import axios from "axios";
import CatCard from "../../components/CatCard";

export default function Detalhes() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios
      .get("https://catfact.ninja/breeds?limit=10")
      .then((res) => setBreeds(res.data.data))
      .catch(() => {});
  }, []);

   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-rose-600 mb-6">
          🐱 Raças de Gatos
        </h1>
        <ul className="grid gap-4">
          {breeds.map((b, i) => (
            <CatCard key={i} item={b} />
          ))}
        </ul>
      </section>
    </div>
  );
}
