import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [signIn,setSignIn] = useState(true);

    const handleSignIn = () =>{
        setSignIn(!signIn)

    }
  return (
    <>
      <Header />
      <div className="absolute">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"
      />
      </div>

      <div>

      <form className="w-3/12 p-12 bg-black absolute text-white my-36 mx-auto right-0 left-0 z-0 bg-opacity-70 rounded-lg">
        <h3 className="my-3 mx-0 p-4 font-bold text-4xl">{signIn?"Sign In" : "Sign Up"}</h3>
        {!signIn && <input type="text" placeholder="Full Name" className="my-4 mx-0 p-4 w-full rounded-lg bg-gray-700" />}
        <input type="text" placeholder="Email Adress" className="my-4 mx-0 p-4 w-full rounded-lg bg-gray-700" />
        <input type="password" placeholder="Password" className="my-4 mx-0 p-4 w-full rounded-lg bg-gray-700" />
        <button className="my-4 mx-0 p-4 bg-red-700 w-full rounded-lg font-bold">{signIn?"Sign In" : "Sign Up"}</button>
        <p className="cursor-pointer" onClick={handleSignIn}>{signIn?"New to Netfix? Sign Up Here." : "Already User? Click to Sign In"}</p>
      </form>
      </div>
    </>
  );
};

export default Login;