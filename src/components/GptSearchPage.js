import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return <div>
    <div className="fixed w-full -z-10">
        <img
          className="h-screen object-cover w-screen"
          src={BACKGROUND_IMG}
          alt="background"
        />
      </div>
    <GptSearchBar/>
    <GptMovieSuggestion/>
  </div>;
};

export default GptSearchPage;
