import AppRoutes from "./routes/AppRoutes";
import { FavoritesProvider } from "./context/FavoritesContext"; // novo

function App() {
  return (
    <FavoritesProvider>
      <AppRoutes />
    </FavoritesProvider>
  );
}

export default App;
