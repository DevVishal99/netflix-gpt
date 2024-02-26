import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerInfo = useSelector((store) => store?.movie?.movieTrailrs);

  useMovieTrailer(movieId);

  return (
    <div className="bg-black">
      <div className="pt-[30%] md:pt-0">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailerInfo?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
        allowFullScreen
      ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
