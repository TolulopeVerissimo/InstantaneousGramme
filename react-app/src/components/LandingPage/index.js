import React from "react";
import Posts from "../Posts";
import NavBar from "../NavBar";
import StationarySide from "../other/.Home/StationarySide";
import "./styles.css";

const LandingPage = () => {
  // posts = fetch("/");

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className='landing__container'>
        <div className='posts__feed'>
          <Posts />
        </div>
        <div>
          <StationarySide />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
