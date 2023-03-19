import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import requests from "../Requests";
import { UserContext } from "../UserContext";
import back from "../assets/back2.png";
import back2 from "../assets/N.png";

const SingleMovie = () => {
  const { setSignIn, setMenu } = useContext(UserContext);
  // Arr
  let genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  const { movieId } = useParams();
  const [popular, setPopular] = useState([]);
  const [horror, setHorror] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const [allArr, setAllArr] = useState([popular, horror]);

  const fetchData = () => {
    // REQUESTS
    const requestOne = axios.get(requests.requestPopular);
    const requestTwo = axios.get(requests.requestHorror);
    const requestThree = axios.get(requests.requestTopRated);
    const requestFour = axios.get(requests.requestTrending);
    const requestFive = axios.get(requests.requestUpcoming);

    axios
      .all([requestOne, requestTwo, requestThree, requestFour, requestFive])
      .then(
        axios.spread((...allData) => {
          const respPopular = allData[0];
          const respHorror = allData[1];
          const respRated = allData[2];
          const respTrending = allData[3];
          const respUpcoming = allData[4];

          // use/access the results
          setPopular(respPopular.data.results);
          setHorror(respHorror.data.results);
          setTopRated(respRated.data.results);
          setTrending(respTrending.data.results);
          setUpcoming(respUpcoming.data.results);
          // console
          console.log("data fetch");
        })
      )
      .catch((errors) => {
        // for errors
      });
  };

  useEffect(() => {
    //
    fetchData();
  }, []);
  allArr.push(...popular, ...horror, ...topRated, ...trending, ...upcoming);
  const film = allArr.find((item) => item.id == movieId);
  console.log(film);

  // Only for Genres

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  // const filmGenres = genres.find((item) => item.id == film.genre_ids[0]);
  return (
    <>
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
      <div className="singlemovieitem w-full h-[100vh] text-white overflow-hidden ">
        <div className="w-full h-full">
          <div className="fadeeffect absolute w-full h-[100vh] bg-gradient-to-r from-black"></div>

          <img
            className="singlemovieimg w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${film?.backdrop_path}`}
            alt=""
          />
          <div className="singlemovietextbox px-[5vw] py-[25px] md:p-[3rem] ">
            <div className="singlemovietext absolute w-[500px] top-[30%]  ">
              <h2 className="text-white text-[24px] font-[700] leading-[30px] my-[10px]">
                {film?.title}
              </h2>

              <div className="flex items-center text-[#a3a3a3] mt-[16px] ">
                <p className="text-[14px] font[500] leading-[18px]">
                  {film?.release_date.split("-")[0]}
                </p>

                <h3 className="mx-[6px] text-[17px]">|</h3>

                <div className="border-[#a1a1a1] border-[1px] w-[35px] h-[18px] flex items-center justify-center ">
                  <span className="px-[5px]">12+</span>
                </div>

                <h3 className="mx-[6px] text-[17px]">|</h3>

                <p className="text-[14px] font[500] leading-[18px]">
                  {film?.vote_average >= 6 ? "2h 2m" : "1h 47m"}
                </p>

                <h3 className="mx-[6px] text-[17px]">|</h3>

                <p className="text-[14px] font[500] leading-[18px]">
                  {/* {filmGenres?.name} */}
                  {film?.vote_average >= 6 ? "Action" : "Adventure"}
                </p>
              </div>
              <div className="">
                <p className="text-16px text-[400] leading-[22px] max-w-[100%] mt-[21px]">
                  {truncate(`${film?.overview}`, 150)}
                </p>
                <div className=" block items-center text-16px text-[400] leading-[22px]  pt-[16px]">
                  <span className="singlemoviespan text-[#a3a3a3] mr-[5px] ">
                    Starring:
                  </span>
                  <span className="singlemoviespan text-16px text-[400] leading-[22px] ml-[5px]">
                    {film?.vote_average >= 6
                      ? "Lily Collins, Mark Strong, Carrie Preston"
                      : "Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
