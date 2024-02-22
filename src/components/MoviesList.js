import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="p-6 text-white">
      <div className="">
        <h1 className="text-3xl pb-4">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie?.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
