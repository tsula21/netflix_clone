import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import back from "../assets/back2.png";

const Navbar = ({}) => {
  const { setSignIn, signIn, setMenu } = useContext(UserContext);

  return (
    <div className="flex justify-between z-[100] w-full fixed top-0 px-[3rem]  pt-[28px]">
      <Link to="/">
        <img
          onClick={() => {
            setSignIn(false);
            setMenu(false);
          }}
          className="w-[166.5px] h-[45px] cursor-pointer  "
          src={back}
          alt="logo "
        />
      </Link>

      <div>
        {/* <button className="bg-[rgba(0,0,0,.4)] text-white  w-[102px] h-[36px] mr-[2rem] rounded-[3px] border-white border-[1px] ]">
          Sign In
        </button> */}
        {signIn ? (
          ""
        ) : (
          // <Link to="/">
          <Link to="/signin">
            <button
              onClick={() => setSignIn(true)}
              className="bg-[#e50914] px-[0.97rem]  py-[0.32rem] rounded-[3px] cursor-pointer text-white "
            >
              Sign In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
