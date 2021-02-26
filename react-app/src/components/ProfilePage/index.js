import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Header from './Header.js'
// import FeaturedStories from './FeaturedStories.js'
// import Posts from './Posts.js'
import { getProfile } from "../../Store/profile";
import { getFollows } from "../../Store/follow";
import { getPosts } from "../../Store/posts";
import { getUsers } from "../../Store/user";
import { useParams } from "react-router-dom";
function Profile() {
  const profile = useSelector((state) => state.profiles);
  const user = useSelector((state) => state.users);
  const follow = useSelector((state) => state.follows);
  const post = useSelector((state) => state.posts);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    debugger;
    dispatch(getProfile(id));
    // dispatch(getFollows(id))
    // dispatch(getUsers())
  }, [dispatch]);

  return (
    <>
      {profile && <h2>hi {profile.username}</h2>}

      {/* <Header profile={profile} user={user} /> */}
      {/* <FeaturedStories /> */}
      {/* <Posts /> */}
    </>
  );
}

export default Profile;
