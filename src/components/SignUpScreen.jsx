import React, { useContext } from "react";
import "../components/SignUpScreen.css";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import back from "../assets/back2.png";

const SignUpScreen = () => {
  const { setSignIn, setMenu } = useContext(UserContext);

  const register = (e) => {
    e.preventDefault();
  };
  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="loginscreen">
      {/* <Navbar /> */}
      <div className="loginScreen_gradient" />

      <div className="signinlogo flex justify-between z-[100] w-full fixed top-0 px-[3rem]  pt-[28px] ">
        <Link to="/">
          <img
            onClick={() => {
              setSignIn(false);
              setMenu(false);
            }}
            className="signinimg w-[166.5px] h-[45px] cursor-pointer"
            src={back}
            alt="logo "
          />
        </Link>
      </div>

      <div className="signupScreen">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone number" />
          <input type="passsword" placeholder="Password" />
          <button type="submit" onClick={() => signIn()}>
            Sign In
          </button>

          <div className="flex items-center justify-between  mt-[12px]">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="remembermeInput w-[16px] h-[17px] mr-[5px] bg-[#555555]"
              />
              <p className="text-[#b3b3b3] font-[500] text-[13px] select-none">
                Remember me
              </p>
            </div>
            <p className="text-[#b3b3b3] font-[500] text-[13px]">Need help?</p>
          </div>

          <h4>
            <span className="signupScreen_gary">New to Netflix? </span>
            <span
              className="signupScreen_link"
              onClick={() => setSignIn(false)}
            >
              Sign up now.
            </span>
          </h4>
          <p className="text-[#8c8c8c] text-[13px] text-left mt-[11px] leading-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpScreen;
