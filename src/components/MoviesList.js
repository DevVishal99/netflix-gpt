import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="md:p-6 p-4 -mt-12 md:mt-0 text-white">
      <div className="md:text-3xl text-xl md:p-2 py-2 md:my-2 my-4">
        <h1 className="pb-4">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex md:gap-4 gap-2">
            {movies.map((movie) => (
              <MovieCard key={movie?.id} movie={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
