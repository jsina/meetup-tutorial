import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  favoriteMeetups: [],
  totalFavorites: 0,
  addFavorites: () => {},
  removeFavorite: () => {},
  isFavorite: () => {},
});

export function FavoriteContextContainer({ children }) {
  const [favorites, setFavorites] = useState([]);
  const initialValue = {
    favoriteMeetups: favorites,
    totalFavorites: favorites.length,
    addFavorites,
    removeFavorite,
    isFavorite,
  };

  function addFavorites(meetup) {
    setFavorites((prev) => [...prev, meetup]);
    console.log({ favorites });
  }

  function removeFavorite(id) {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  }

  function isFavorite(id) {
    return favorites.some((item) => item.id === id);
  }

  return (
    <FavoriteContext.Provider value={initialValue}>
      {children}
    </FavoriteContext.Provider>
  );
}
