import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useNewMovieTrailer from "../hooks/useNewMovieTrailer";
import { addNewMovieTrailer } from "../utils/movieSlice";

const Trailer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const trailerInfo = useSelector((store) => store?.movie?.newMovieTrailers);

  useNewMovieTrailer(movieId);

  const handleGptSearch = () => {
    navigate("/browse");
    dispatch(addNewMovieTrailer(null));

  };

  return (
    <>
      <div className="bg-black h-screen">
        <div className="flex">
          <iframe
            className="w-screen aspect-video mt-10"
            src={
              "https://www.youtube.com/embed/" +
              trailerInfo?.key +
              "?autoplay=1&mute=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
            allowFullScreen
          ></iframe>
          <button
            className="md:px-4 px-2 md:py-2 py-3 md:m-2 mx-1 bg-purple-800 rounded-lg text-white md:font-bold absolute"
            onClick={handleGptSearch}
          >
            Home Page
          </button>
        </div>
      </div>
    </>
  );
};

export default Trailer;
