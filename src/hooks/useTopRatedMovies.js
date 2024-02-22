import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants"
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();


    const fetchTopRatedMOvies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', TMDB_OPTIONS);
        const json = await data.json();

        dispatch(addTopRatedMovies(json?.results));    
    }

    useEffect(()=>{
        fetchTopRatedMOvies();
    },[])
};

export default useTopRatedMovies;