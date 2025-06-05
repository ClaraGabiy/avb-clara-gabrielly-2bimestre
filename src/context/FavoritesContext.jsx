
import { createContext, useContext, useState } from "react";

// Criação do contexto
const FavoritesContext = createContext();

// Hook personalizado
export function useFavorites() {
  return useContext(FavoritesContext);
}

// Provedor do contexto
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (item) => {
    const exists = favorites.some(fav => fav.breed === item.breed);
    const updated = exists
      ? favorites.filter(fav => fav.breed !== item.breed)
      : [...favorites, item];
    setFavorites(updated);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
