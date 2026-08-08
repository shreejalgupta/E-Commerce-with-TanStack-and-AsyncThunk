import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: 'fav',
    initialState: {
        favItem: null
    },
    reducers: {
        addFav: (state, action) => {
            state.favItem = action.payload
        }
    }
})

export const {addFav} = favSlice.actions
export default favSlice.reducer