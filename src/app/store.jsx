import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/state/authSlice'
import quickViewReducer from '../features/products/state/quickViewSlice'
import cartReducer from '.././features/cart/state/cartSlick'
import favReducer from '../features/FavoritesPage/state/favSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        quickView: quickViewReducer,
        cartItem: cartReducer,
        fav: favReducer
    }
})