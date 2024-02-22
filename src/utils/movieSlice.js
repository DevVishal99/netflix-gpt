import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies : null,
    topRatedMovies : null,
    upComingMovies : null,
    movieTrailrs: null,
  },
  reducers: {
    addNowPlyingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailrs = action.payload;
    },
  },
});

export const { addNowPlyingMovies, addMovieTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer;
