import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { TMDB_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispactch = useDispatch();
  const languageKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);


  const getTmdbMovies = async (gptMovies) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+gptMovies+"&include_adult=false&language=en-US&page=1", TMDB_OPTIONS);
    const json = await data.json();

    return json.results;
  }

  const handleSraechBtn = async () => {
    console.log(searchText.current.value);

    const gptQurey =
      "Act as a movie recommendation system and suggest the movie for the query:" +
      searchText.current.value +
      "proviede 5 movies comma separated as shown ahead in the example. Example :Hunter, Raaz, Fighter, Phir Hera Pheri, Gadar";

    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQurey }],
    });
    // console.log(gptResults.choices[0].message.content);
    const gptMovies = gptResults.choices[0].message.content.split(",");

    const promiseArray = gptMovies.map(movie => getTmdbMovies(movie));

    const movies = await Promise.all(promiseArray);

    console.log(movies);

    dispactch(addGptMoviesResult({movieNames:gptMovies, movieResults :movies}));

  };
  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="bg-black p-6 m-6 w-1/2 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[languageKey].palceHolderText}
          ref={searchText}
          className="px-2 py-6 col-span-9 rounded-lg font-bold"
        />
        <button
          className="bg-red-700 px-2 py-4 rounded-lg mx-2 col-span-3 text-white font-bold"
          onClick={handleSraechBtn}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
