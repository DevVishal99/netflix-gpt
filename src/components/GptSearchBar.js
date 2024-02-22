import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

  const languageKey = useSelector(store => store.config.language);
  return <div className="pt-[8%] flex justify-center">
    <form className="bg-black p-6 m-6 w-1/2 grid grid-cols-12 rounded-lg">
      <input type="text" placeholder={lang[languageKey].palceHolderText} className="px-2 py-6 col-span-9 rounded-lg font-bold"/>
      <button className="bg-red-700 px-2 py-4 rounded-lg mx-2 col-span-3 text-white font-bold">{lang[languageKey].search}</button>
    </form>
  </div>;
};

export default GptSearchBar;
