import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const GptMovieSuggestion = () => {

  const {movieNames, movieResults}= useSelector(store => store?.gpt);
  if(!movieNames) return <Shimmer/>;

  return <div className="bg-black m-4 p-4 opacity-90 rounded-lg">
    {movieNames.map((movie,index) =><MoviesList key={index} title={movie} movies={movieResults[index]}/>)}
    
  </div>;
};

export default GptMovieSuggestion;
