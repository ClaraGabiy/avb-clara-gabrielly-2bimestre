import CatCard from "../../components/CatCard";
import { useFavorites } from "../../context/FavoritesContext";

export default function Favoritos() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-rose-600 mb-6">⭐ Favoritos</h1>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-600">Nenhum item favoritado ainda.</p>
        ) : (
          <ul className="grid gap-4">
            {favorites.map((item, i) => (
              <CatCard key={i} item={item} />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}