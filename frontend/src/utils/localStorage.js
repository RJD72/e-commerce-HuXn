// Add a product to localStorage
export const addFavoriteToLocalStorage = (product) => {
  const favorites = getFavoritesFromLocalStorage();
  if (!favorites.some((p) => p._id === product._id)) {
    favorites.push(product);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

// Remove product from localStorage
export const removeFavoriteFromLocalStorage = (productId) => {
  const favorites = getFavoritesFromLocalStorage();
  const newFavorites = favorites.filter((p) => p._id !== productId);
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
};

// Retrieve favorites form localStorage
export const getFavoritesFromLocalStorage = () => {
  const favoriteJSON = localStorage.getItem("favorites");
  return favoriteJSON ? JSON.parse(favoriteJSON) : [];
};
