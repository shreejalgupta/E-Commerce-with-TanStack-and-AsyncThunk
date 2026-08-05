import { createSlice } from "@reduxjs/toolkit";

import { hydrationUser, loginUser } from "./authThunk";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: true,
        isAuth: false
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
            isLoading: false
            isAuth: false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.isLoading = false
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false;
            state.isAuth = true
        }).addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false
        }).addCase(hydrationUser.pending, (state, action) => {
            state.isLoading = false
        }).addCase(hydrationUser.fulfilled, (state, action ) => {
            state.user = action.payload
            state.isLoading = false
            state.reject = true
        })
    },
})

export const {addUser} = authSlice.actions
export default authSlice.reducer