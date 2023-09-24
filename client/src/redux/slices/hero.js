import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHeros = createAsyncThunk("heros/fetchHeros", async (page) => {
  const { data } = await axios.get(`http://localhost:4444/heros?page=${page}`);
  return data;
});
const initialState = {
  heros: {
    pages: 0,
    items: [],
  },
};

const herosSlice = createSlice({
  name: "heros",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchHeros.pending]: (state, action) => {
      state.heros.items = [];
      state.heros.pages = 0;
    },
    [fetchHeros.fulfilled]: (state, action) => {
      state.heros.items = action.payload.heros;
      state.heros.pages = action.payload.pages;
    },
    [fetchHeros.rejected]: (state) => {
      state.heros.items = [];
    },
  },
});

export const herosReducer = herosSlice.reducer;
