import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext({});

export const FavoritesProvider = ({ children }) => {
  const [favoritList, setFavoriteList] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favoritList, setFavoriteList }}>
      {children}
    </FavoritesContext.Provider>
  );
};
