import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchClick: false,
    movieNames: null,
    movieResults : null
  },
  reducers: {
    setGptSearchClick: (state, action) => {
      state.gptSearchClick = !state.gptSearchClick;
    },
    addGptMoviesResult: (state, action) => {
      const {movieNames,movieResults} = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { setGptSearchClick, addGptMoviesResult } = gptSlice.actions;
export default gptSlice.reducer;
