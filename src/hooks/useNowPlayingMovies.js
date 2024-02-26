import { useDispatch, useSelector } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addNowPlyingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);

  const nowPlayingMoviesFetch = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      TMDB_OPTIONS
    );

    const json = await data.json();

    dispatch(addNowPlyingMovies(json?.results));
  };

  useEffect(() => {
    !nowPlayingMovies && nowPlayingMoviesFetch();
  }, []);
};

export default useNowPlayingMovies;
