import React from "react";
import Posts from "../Posts";
import NavBar from "../NavBar";
import StationarySide from "./StationarySide";
import "./feed.css";

const Feed = () => {
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

export default Feed;
