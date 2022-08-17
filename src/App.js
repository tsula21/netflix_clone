import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

import { Routes, Route } from "react-router-dom";
import axios from "axios";
import LogInScreen from "./components/LogInScreen";
import Nav from "./components/Nav";
import SingleMovie from "./pages/SingleMovie";

// Pages
import Navbar from "./components/Navbar";
import SignUpScreen from "./components/SignUpScreen";
import Home from "./pages/Home";
import Starter from "./pages/Starter";
// 49
function App() {
  const [signIn, setSignIn] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <UserContext.Provider
        value={{
          signIn,
          setSignIn,
          menu,
          setMenu,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <LogInScreen
                setMenu={setMenu}
                signIn={signIn}
                setSignIn={setSignIn}
              />
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="movies/:movieId" element={<SingleMovie />} />
          <Route path="/signin" element={<SignUpScreen />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
