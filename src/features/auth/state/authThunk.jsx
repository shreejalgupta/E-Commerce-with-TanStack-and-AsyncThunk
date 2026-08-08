import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../../react Reux thunk/src/config/api";
import { toast } from "react-toastify";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (cred, thunkApi) => {
    
    try {
      let res = await api.post("/auth/login", {
        username: cred.email,
        password: cred.password,
      });
      localStorage("accessToken", res.data.accessToken);
      toast.success('user is logged')
      return res.data;
    } catch (error) {}
  },
);

export const hydrationUser = createAsyncThunk(
  "auth/me",
  async (cred, thunkApi) => {
    try {
      let res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${cred}`, // Pass JWT via Authorization header
        },
        
      });
      toast.success('userIs logged')
      
      return res.data;
    } catch (error) {
      
      console.log(error);
    }
  },
);
