import React, { useEffect, useState } from "react";
import Posts from "../Posts";
import NavBar from "../NavBar";
import { useDispatch, useSelector } from "react-redux";
import StationarySide from "./StationarySide";
import "./LandingPage.css";
import * as postActions from "../../Store/posts";
// import * as userActions from "../../Store/users";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  // posts = fetch("/");

  useEffect(() => {
    dispatch(postActions.getPosts());
    // dispatch(postActions.getUsers());
  }, []);

  return (
    <>
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
