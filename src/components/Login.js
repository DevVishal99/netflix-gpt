import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkFieldsValidation } from "../utils/validator";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR_URL } from "../utils/constants";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSubmitClick = () => {
    const message = checkFieldsValidation(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);

    if (message) return;

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:AVATAR_URL
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const handleSignIn = () => {
    setSignIn(!signIn);
  };
  return (
    <>
      <Header />
      <div className="absolute w-full">
        <img
          className="w-screen h-screen sm:w-screen sm:h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-3/12 p-12 bg-black absolute text-white my-36 mx-auto right-0 left-0 z-0 bg-opacity-70 rounded-lg"
        >
          <h3 className="my-3 mx-0 p-4 font-bold text-4xl max-sm:text-xl">
            {signIn ? "Sign In" : "Sign Up"}
          </h3>

          {!signIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="my-4 mx-0 p-4 w-full rounded-lg bg-gray-700"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Adress"
            className="my-4 mx-0 p-4 w-full rounded-lg bg-gray-700"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-4 mx-0 p-4 w-full rounded-lg bg-gray-700"
          />

          <p className="text-red-600 font-bold">{errorMessage}</p>

          <button
            onClick={handleSubmitClick}
            className="my-4 mx-0 p-4 bg-red-700 w-full rounded-lg font-bold"
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="cursor-pointer" onClick={handleSignIn}>
            {signIn
              ? "New to Netfix? Sign Up Here."
              : "Already User? Click to Sign In"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
