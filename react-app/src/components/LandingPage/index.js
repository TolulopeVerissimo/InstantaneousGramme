import React, {useEffect,useState} from "react";
import Posts from "../Posts";
import NavBar from "../NavBar";
import {useDispatch,useSelector} from 'react-redux'
import StationarySide from "../other/.Home/StationarySide";
import "./styles.css";
import ScrollingSide from "../other/.Home/ScrollingSide";
import * as postActions from "../../Store/posts"




const LandingPage = () => {
  const dispatch = useDispatch()
  const [posts,setPosts] = useState([])
  // posts = fetch("/");

  useEffect(() => {
    dispatch(postActions.getPosts())



  },[])

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className='landing__container'>
        <div className='posts__feed'>
          <Posts />
          {/* <ScrollingSide /> */}
        </div>
        <div>
          <StationarySide />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
