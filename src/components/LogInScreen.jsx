import React, { useState } from "react";
import SignUpScreen from "./SignUpScreen";
import { Link } from "react-router-dom";
import back from "../assets/back2.png";

const LogInScreen = ({ signIn, setSignIn, setMenu }) => {
  return (
    <div className="loginscreen">
      <div className="loginScreen_background">
        {/* <img className="loginScreen_logo" src={netflix} alt="koko" />
        <button className="loginScreen_button" onClick={() => setSignIn(true)}>
          Sign In
        </button> */}
        <div className="loginScreen_gradient" />

        <div className="loginScreen_body">
          <div>
            {/* NAVBAR */}
            <div className="flex justify-between z-[100] w-full fixed top-0 px-[3rem]  pt-[28px]">
              <Link to="/">
                <img
                  onClick={() => {
                    setSignIn(false);
                    setMenu(false);
                  }}
                  className="loginLogo w-[166.5px] h-[45px] cursor-pointer  "
                  src={back}
                  alt="logo "
                />
              </Link>
              <div>
                {signIn ? (
                  ""
                ) : (
                  <Link to="/signin">
                    <button
                      onClick={() => setSignIn(true)}
                      className="loginbtn  bg-[#e50914] px-[0.97rem]  py-[0.32rem] rounded-[3px] cursor-pointer text-white "
                    >
                      Sign In
                    </button>
                  </Link>
                )}
              </div>
            </div>
            {/* NAVBAR */}

            <div className="loginScreen_body two">
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <Link to="/home">
                    <button
                      className="loginScreen_getStarted"
                      onClick={() => {
                        setSignIn(true);
                        setMenu(true);
                      }}
                    >
                      Get Started
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInScreen;
