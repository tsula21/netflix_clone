import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [show, handleShow] = useState(true);

  let slider = document.getElementById("slider" + rowID);
  window.history.scrollRestoration = "manual";

  useEffect(() => {
    axios.get(fetchURL).then((resp) => {
      setMovies(resp.data.results);
    });
    console.log(fetchURL, "fetch");
  }, [fetchURL]);

  console.log("Row Page");

  const { movieId } = useParams();

  const slideLeft = () => {
    slider.scrollLeft = slider.scrollLeft - 1400;
  };

  const slideRight = () => {
    slider.scrollLeft = slider.scrollLeft + 1400;
  };

  return (
    <>
      <h2 className="rowcategory text-white text-[20px]  font-[500]  px-[3rem] py-[1rem]">
        {title}
      </h2>
      <div className="flex items-center">
        <MdChevronLeft
          onClick={function (event) {
            slideLeft();
            handleShow(false);
          }}
          className={`sliderArrows left-0 text-[#e50914] rounded-full cursor-pointer z-10 ${
            show ? "opacity-40" : ""
          }`}
          size={40}
        />

        <div
          id={"slider" + rowID}
          className="sliderForMovies w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth  relative pl-[3px]"
        >
          {movies.map((item, id) => (
            <div
              key={item.id}
              className="overflowRow w-[160] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <Link to={`/movies/${item.id}`}>
                <img
                  className=" rowelement w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                  alt={item?.title}
                />
              </Link>
              <div>
                <p className="rowtitle text-white flex justify-center mt-[2px]">
                  {item?.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <MdChevronRight
          onClick={function (event) {
            slideRight();
            handleShow(true);
          }}
          className={`sliderArrows right- text-[#e50914] rounded-full cursor-pointer z-10 ${
            show ? "" : "opacity-40"
          } `}
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
