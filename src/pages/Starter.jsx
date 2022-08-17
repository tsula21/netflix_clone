import React, { useState } from "react";
import "../pages/LoginScreen.css";
import back from "../assets/back2.png";
import SignUpScreen from "../components/SignUpScreen";

const Starter = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginscreen">
      <div className="loginScreen_background">
        {/* <img className="loginScreen_logo" src={back} alt="koko" />
        <button className="loginScreen_button" onClick={() => setSignIn(true)}>
          Sign In
        </button> */}
        <div className="loginScreen_gradient" />

        <div className="loginScreen_body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="loginScreen_getStarted"
                    onClick={() => setSignIn(true)}
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Starter;
