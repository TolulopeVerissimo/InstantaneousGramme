import React, { useEffect } from "react";
import Posts from "../Posts";
import { useDispatch, useSelector } from "react-redux";
import StationarySide from "./StationarySide";
import Search from './search.js'
import "./LandingPage.css";
import * as postActions from "../../Store/posts";
import * as userActions from "../../Store/user";

const LandingPage = () => {
  const dispatch = useDispatch();
  // const [posts, setPosts] = useState([]);
  // posts = fetch("/");

  const user = useSelector((state) => state.user);
  console.log("users for landing page: ", user)
  useEffect(() => {
    dispatch(postActions.getPosts());
    dispatch(userActions.getUsers());
  }, [dispatch]);

  return (
    <>
      <Search user={user} />
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
