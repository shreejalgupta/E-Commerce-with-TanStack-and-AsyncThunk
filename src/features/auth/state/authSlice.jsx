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
        },
        removeUser: (state) => {
            state.user = null,
            state.isAuth = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.isLoading = true
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false;
            state.isAuth = true
        }).addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false
        }).addCase(hydrationUser.pending, (state, action) => {
            state.isLoading = true
        }).addCase(hydrationUser.fulfilled, (state, action ) => {
            state.user = action.payload
            state.isLoading = false
            state.isAuth = true
        }).addCase(hydrationUser.rejected, (state, action) => {
            state.isLoading = false
        })
    },
})

export const {addUser, removeUser} = authSlice.actions
export default authSlice.reducer