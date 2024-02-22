import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return <div>
    <div className="absolute w-full -z-10">
        <img
          className="w-screen h-screen sm:w-screen sm:h-screen"
          src={BACKGROUND_IMG}
          alt="background"
        />
      </div>
    <GptSearchBar/>
    <GptMovieSuggestion/>
  </div>;
};

export default GptSearchPage;
