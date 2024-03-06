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
        <button
            className="bg-purple-800 rounded-lg text-white md:font-bold px-4 py-2 md:ml-[92%] mt-4 relative z-30"
            onClick={handleGptSearch}
          >
            Back
          </button>
          <iframe
            className="md:w-screen aspect-video -mt-[5%] absolute w-screen h-screen"
            src={
              "https://www.youtube.com/embed/" +
              trailerInfo?.key +
              "?autoplay=1&mute=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
            allowFullScreen
          ></iframe>
          
        </div>
      </div>
    </>
  );
};

export default Trailer;
