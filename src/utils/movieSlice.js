import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies : null,
    topRatedMovies : null,
    upComingMovies : null,
    movieTrailrs: null,
    newMovieTrailers : null,
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
    addNewMovieTrailer: (state, action) => {
      state.newMovieTrailers = action.payload;
    },
  },
});

export const { addNowPlyingMovies, addMovieTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addNewMovieTrailer } = movieSlice.actions;
export default movieSlice.reducer;
