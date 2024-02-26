/* eslint-disable jsx-a11y/alt-text */
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { setGptSearchClick } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import { selectedLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const gptSearch = useSelector((store) => store?.gpt?.gptSearchClick);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(setGptSearchClick());
  };

  const handleLanguageChange= (e)=>{
    dispatch(selectedLanguage(e.target.value));
  }

  return (
    <>
      <div className="absolute flex z-50  my-0 bg-gradient-to-b from-black w-full h-24 flex-col md:flex-row md:justify-between" >
        <div className="z-50 mx-auto md:mx-0">
          <img className="md:w-44 w-40" src={LOGO} alt="logo" />
        </div>
        {user && (
          <div className="flex gap-2 my-0 md:my-4 justify-between md:justify-normal">
            {gptSearch && <select className="md:py-1 px-3 md:my-4 mx-1 rounded-md" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>) }
            </select>}
            <button
              className="md:px-4 px-2 md:py-2 py-3 md:m-2 mx-1 bg-purple-800 rounded-lg text-white md:font-bold"
              onClick={handleGptSearch}
            >
              {!gptSearch ? "GPT Search" : "Home Page"}
            </button>
            <img
              className="rounded-lg hidden md:inline-block"
              src={user?.photoURL}
              alt={user.displayName}
            />
            <button
              onClick={handleSignOut}
              className="bg-red-600 text-black md:my-4 my-0 px-1  md:px-2 rounded-lg mx-1"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
