import { createContext, useState } from "react";

export const FavoriteContext = createContext()

export default function FavoriteContextProvider  ({ children }) {
    const [allFavorits, setAllFavorite] = useState(JSON.parse(localStorage.getItem("favorites")) || [])
    
    function addFavorite(item) {
        const updatedFavorites = [...allFavorits, item];
        setAllFavorite(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
    
    function removeFavorite(item) {
        const favoritesFilters = allFavorits.filter((movie) => movie.id !== item.id);
        setAllFavorite(favoritesFilters);
        localStorage.setItem("favorites", JSON.stringify(favoritesFilters));
    }
    
    function getFavorite (id) {
        return allFavorits.some((movie => movie.id === id))
    }
    const data = {
        allFavorits,
        addFavorite,
        removeFavorite,
        getFavorite
    }
    
    return <FavoriteContext.Provider value={data}> { children } </FavoriteContext.Provider>
}