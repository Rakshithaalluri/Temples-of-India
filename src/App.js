import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import FeaturedTemples from "./components/FeaturedTemples";
import RecentlyEditedTemples from "./components/RecentlyEditedTemples";
import About from "./components/About";

import "./App.css";

function App() {
  /* const [backendData, setBackendData] = useState({});

, { useEffect, useState }

  useEffect(() => {
    const funName = async () => {
      try {
        const response = await fetch("/api", {
          method: "GET",
        });
        const data = await response.json();
        setBackendData(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    funName();
  }, []);
  */

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/featured-temples" element={<FeaturedTemples />} />
          <Route path="/recently-updated" element={<RecentlyEditedTemples />} />
          <Route path="aboutUs" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
