import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav } from "../state/favSlice";

export const useFav = ( ) => {
    const dispatch = useDispatch()

    const favoriteItem = useSelector(store => store.fav.favItem) || [];

    const addFavItem = (product) => {
        let saveFav = [...favoriteItem, product]
        dispatch(addFav(saveFav))
        localStorage.setItem('favItem', JSON.stringify(saveFav))    
    } 

    const removeFavItem = (product) => {
        let saveFav = favoriteItem.filter(elem => elem.id !== product.id)
        dispatch(addFav(saveFav))
        localStorage.setItem('favItem', JSON.stringify(saveFav))    
    }

    return {
        addFavItem,
        removeFavItem,
        favoriteItem
    }
}