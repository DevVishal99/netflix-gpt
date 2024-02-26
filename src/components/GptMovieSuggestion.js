import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const GptMovieSuggestion = () => {

  const {movieNames, movieResults}= useSelector(store => store?.gpt);
  if(!movieNames) return null;

  return <div className="bg-black m-4 p-4 opacity-90 rounded-lg">
    {movieNames.map((movie,index) =><MoviesList title={movie} movies={movieResults[index]}/>)}
    
  </div>;
};

export default GptMovieSuggestion;
