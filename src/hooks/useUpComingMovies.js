import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpComingMovies = () => {
    const dispatch = useDispatch();
    const upComingMovies = useSelector((store) => store.movie.upComingMovies);


    const fetchUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', TMDB_OPTIONS);
        const json = await data.json();

        dispatch(addUpcomingMovies(json?.results));    
    }

    useEffect(()=>{
        !upComingMovies && fetchUpcomingMovies();
    },[])
}

export default useUpComingMovies;