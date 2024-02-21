import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailrs: null,
  },
  reducers: {
    addNowPlyingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailrs = action.payload;
    },
  },
});

export const { addNowPlyingMovies, addMovieTrailer } = movieSlice.actions;
export default movieSlice.reducer;
