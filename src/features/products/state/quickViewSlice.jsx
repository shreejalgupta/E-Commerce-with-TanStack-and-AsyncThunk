import { createSlice } from "@reduxjs/toolkit";

const quickViewSlice = createSlice({
    name: 'quickView',
    initialState:{
        quickView: false,
        quickViewProduct: null
    },
    reducers: {
        onClickQuick: (state, action) => {
            state.quickView = true;
            state.quickViewProduct = action.payload
        },
        onQuickViewClose: (state, action) => {
            state.quickView = false
            state.quickViewProduct = null
        }

    }
});

export const {onClickQuick, onQuickViewClose} = quickViewSlice.actions;
export default quickViewSlice.reducer