import { useState, createContext, useContext } from "react";
import AppRoutes from "./routes/AppRoutes"; // você já usa isso corretamente

// Criação do contexto de favoritos
const FavoritesContext = createContext();

// Hook personalizado para usar o contexto
export function useFavorites() {
  return useContext(FavoritesContext);
}

// Componente principal da aplicação
function App() {
  // Estado dos itens favoritos
  const [favorites, setFavorites] = useState([]);

  // Função para alternar (favoritar/desfavoritar)
  const toggleFavorite = (item) => {
    const exists = favorites.some(fav => fav.breed === item.breed);
    const updated = exists
      ? favorites.filter(fav => fav.breed !== item.breed)
      : [...favorites, item];
    setFavorites(updated);
  };

  return (
    // Provedor do contexto envolvendo todas as rotas da aplicação
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      <AppRoutes />
    </FavoritesContext.Provider>
  );
}

export default App;