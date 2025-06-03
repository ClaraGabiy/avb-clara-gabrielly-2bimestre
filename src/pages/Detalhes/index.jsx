import { useEffect, useState } from "react";
import axios from "axios";
import { useFavorites } from "../../App"; // usa o contexto do App.jsx

// Mapeamento das raças para URLs de imagens
const breedImages = {
  Abyssinian: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
  Aegean: "https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg",
  "American Curl": "https://cdn2.thecatapi.com/images/xnsqonbjW.jpg",
  "American Bobtail": "https://cdn2.thecatapi.com/images/8f9.jpg",
  "American Shorthair": "https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg",
  "American Wirehair": "https://cdn2.thecatapi.com/images/BkR5a3qPl.jpg",
  "Arabian Mau": "https://cdn2.thecatapi.com/images/NkY1B8fK9.jpg",
  "Australian Mist": "https://cdn2.thecatapi.com/images/_a3-JHd4B.jpg",
  Asian: "https://cdn2.thecatapi.com/images/Y7VG7s1Eb.jpg",
  "Asian Semi-longhair": "https://cdn2.thecatapi.com/images/dDneFlbI4.jpg",
};

// Função para obter imagem da raça com segurança
const getImageForBreed = (breed) => {
  if (!breed) return "";
  const trimmedBreed = breed.trim();
  return breedImages[trimmedBreed] || "";
};

export default function Detalhes() {
  const [breeds, setBreeds] = useState([]);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    axios
      .get("https://catfact.ninja/breeds?limit=10")
      .then((res) => setBreeds(res.data.data))
      .catch(() => {});
  }, []);

  const isFavorito = (item) => favorites.some((fav) => fav.breed === item.breed);

  const CatCard = ({ item }) => (
    <li className="p-4 bg-pink-100 rounded-lg shadow text-gray-700 flex flex-col items-center">
      {/* Imagem do gato */}
      {getImageForBreed(item.breed) && (
        <img
          src={getImageForBreed(item.breed)}
          alt={item.breed}
          className="w-48 h-32 object-cover rounded-md mb-4"
        />
      )}

      <p>
        <strong>Raça:</strong> {item.breed}
      </p>
      <p>
        <strong>Origem:</strong> {item.country}
      </p>
      <p>
        <strong>Pelagem:</strong> {item.coat || "Desconhecido"}
      </p>
      <p>
        <strong>Padrão:</strong> {item.pattern || "Desconhecido"}
      </p>
      <button
        onClick={() => toggleFavorite(item)}
        className="mt-2 px-3 py-1 bg-rose-500 text-white rounded hover:bg-rose-600"
      >
        {isFavorito(item) ? "💔 Remover" : "❤️ Favoritar"}
      </button>
    </li>
  );

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
