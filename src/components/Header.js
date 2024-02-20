/* eslint-disable jsx-a11y/alt-text */
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate('/error');
    });
  }

  return (
    <>
      <div className="absolute flex z-50  my -7 bg-gradient-to-b from-black w-full h-24 justify-between">
        <div className="z-50  my -7 bg-gradient-to-b from-black">
          <img
            className="w-44"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </div>
        {user && <div className="flex gap-2 my-4">
          <img src={user?.photoURL} alt={user.displayName}/>
          <button onClick={handleSignOut} className="bg-red-600 text-black py-0 px-2 h-8 rounded-lg">Sign Out</button>
        </div>
        }
      </div>
    </>
  );
};

export default Header;
