import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import back from "../assets/back2.png";

const Nav = ({ signIn, setSignIn }) => {
  const [show, handleShow] = useState(false);

  // const transitionNavBar = () => {
  //   if (window.scrollY > 100) {
  //     handleShow(true);
  //   } else {
  //     handleShow(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", transitionNavBar);
  //   return () => window.removeEventListener("scroll", transitionNavBar);
  // });

  return (
    // <div className={`nav ${show && "nav_black"}`}>
    <div className={`nav nav_black`}>
      <div className="nav_contents flex items-center justify-between">
        <Link to="/" onClick={() => setSignIn(false)}>
          <img className="nav_logo" src={back} alt="logo" />
        </Link>
        <div className="flex items-center">
          <h2 className="text-white text-[13px]">
            UNLIMITED TV SHOWS & MOVIES
          </h2>
          <Link to="/" onClick={() => setSignIn(false)}>
            <button className="navredbutton rounded-[2px] text-white min-w-[112px] leading-[15px] text-[13px] mx-[8px] py-[9px] px-[20px]">
              JOIN NOW
            </button>
          </Link>
          <Link to="/signin">
            <button className="navwhitebutton rounded-[2px] text-white min-w-[85px] h-[33px] leading-[15px] text-[13px] py-[9px] px-[20px]">
              SIGN IN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
