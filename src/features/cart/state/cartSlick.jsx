import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItem: null
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItem = action.payload
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer