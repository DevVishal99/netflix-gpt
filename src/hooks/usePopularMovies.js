import { useDispatch, useSelector } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants"
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movie.popularMovies);


    const fetchPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', TMDB_OPTIONS);
        const json = await data.json();

        dispatch(addPopularMovies(json?.results));    
    }

    useEffect(()=>{
        !popularMovies && fetchPopularMovies();
    },[])
};

export default usePopularMovies;