import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addNowPlyingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const nowPlayingMoviesFetch = async () => {
  
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_OPTIONS);
  
      const json = await data.json();
  
  
      dispatch(addNowPlyingMovies(json?.results));
    }
  
    useEffect(() => {
      nowPlayingMoviesFetch();
    },[])
  
};

export default useNowPlayingMovies;