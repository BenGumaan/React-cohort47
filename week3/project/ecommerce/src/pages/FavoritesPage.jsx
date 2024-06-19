import React from 'react';
import { useFavorites } from "../contexts/FavoritesContext";
import Products from "../components/Products";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>You haven't chosen any favorites yet!</p>
      ) : (
        <Products favoritesOnly={true} />
      )}
    </div>
  );
};

export default FavoritesPage;