import { useDispatch, useSelector } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const movieTrailrs = useSelector(store => store.movie.movieTrailrs)
  const dispatch = useDispatch();
  const fetchBackgroundVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      TMDB_OPTIONS
    );
    const json = await data.json();

    const filterData = json?.results.filter(
      (video) => video?.type === "Trailer"
    );

    const movieTrailer = filterData.length ? filterData[0] : json.results[0];


    dispatch(addMovieTrailer(movieTrailer));
  };

  useEffect(() => {
    !movieTrailrs && fetchBackgroundVideo();
  }, []);
};

export default useMovieTrailer;
