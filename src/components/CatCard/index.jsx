import { useFavorites } from "../../context/FavoritesContext";

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

const getImageForBreed = (breed) => {
  if (!breed) return "";
  const trimmedBreed = breed.trim();
  return breedImages[trimmedBreed] || "";
};

export default function CatCard({ item }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorito = favorites.some((fav) => fav.breed === item.breed);

  return (
    <li className="p-4 bg-pink-100 rounded-lg shadow text-gray-700 flex flex-col items-center">
      {getImageForBreed(item.breed) && (
        <img
          src={getImageForBreed(item.breed)}
          alt={item.breed}
          className="w-48 h-32 object-cover rounded-md mb-4"
        />
      )}

      <p><strong>Raça:</strong> {item.breed}</p>
      <p><strong>Origem:</strong> {item.country}</p>
      <p><strong>Pelagem:</strong> {item.coat || "Desconhecido"}</p>
      <p><strong>Padrão:</strong> {item.pattern || "Desconhecido"}</p>

      <button
        onClick={() => toggleFavorite(item)}
        className="mt-2 px-3 py-1 bg-rose-500 text-black rounded hover:bg-rose-600"
      >
        {isFavorito ? "❤️" : "💔"}
      </button>
    </li>
  );
}
