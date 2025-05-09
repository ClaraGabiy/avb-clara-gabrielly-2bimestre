import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    axios
      .get("https://catfact.ninja/facts?limit=10")
      .then((res) => setFacts(res.data.data))
      .catch((err) => console.error("Erro ao buscar fatos:", err));
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-blend-overlay bg-pink-200 p-6 text-gray-800"
      style={{
        backgroundImage: `url('https://marketplace.canva.com/MADAUzWiF5E/1/thumbnail_large-1/canva-kitten-MADAUzWiF5E.jpg')`,
      }}
    >
      <div className="max-w-2xl mx-auto bg-white bg-opacity-80 rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Fatos sobre Gatos</h2>
        <ul className="space-y-4">
          {facts.map((fact, index) => (
            <li
              key={index}
              className="p-4 bg-white bg-opacity-70 rounded shadow text-base font-medium"
            >
              {fact.fact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}