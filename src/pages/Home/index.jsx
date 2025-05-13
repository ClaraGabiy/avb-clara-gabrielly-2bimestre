import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    axios
      .get("https://catfact.ninja/facts?limit=10")
      .then(res => setFacts(res.data.data))
      .catch(() => {});
  }, []);

  return (
    <section className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold text-center text-rose-600 mb-6">🐱 Fatos de Gatos</h1>
      <ul className="space-y-4">
        {facts.map((f, i) => (
          <li key={i} className="p-4 bg-pink-100 rounded-lg shadow text-gray-700">
            {f.fact}
          </li>
        ))}
      </ul>
    </section>
  );
}