import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import Main from "../components/Main";
import Nav from "../components/Nav";
import Row from "../components/Row";
import requests from "../Requests";
import back from "../assets/back2.png";
import back2 from "../assets/N.png";

const Home = () => {
  const { setSignIn, setMenu } = useContext(UserContext);
  const [show, handleShow] = useState(false);

  return (
    <div>
      {/* <Nav /> */}
      <div className={`nav nav_black`}>
        <div className="nav_contents flex items-center justify-between">
          <Link to="/" onClick={() => setSignIn(false)}>
            <img className="wordlogo nav_logo" src={back} alt="logo" />
            <img className="letterlogo nav_logo" src={back2} alt="logo" />
          </Link>
          <div className="flex items-center">
            <h2 className="navdescription text-white text-[13px]">
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
      {/* <Nav /> */}
      {/* <Main /> */}
      <div className="newmain">
        <div className="newmain_container">
          <h2>Movies</h2>
          <p>
            Movies move us like nothing else can, whether they’re scary, funny,
            dramatic, romantic or anywhere in-between. So many titles, so much
            to experience.
          </p>
        </div>
      </div>
      <Row rowID="1" title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row
        rowID="2"
        title="Popular on Netflix"
        fetchURL={requests.requestPopular}
      />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
};

export default Home;
