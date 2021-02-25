import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import "./posts.css";

const Posts = () => {
  const posts = useSelector((state) => Object.values(state.posts));
  const user = useSelector((state) => state.session.user);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (posts && user) setIsLoaded(true);
  }, [posts, user]);

  return (
    <>
      {isLoaded &&
        posts.map((post) => (
          <div>
            <Post post={post} user={user} />
          </div>
        ))}
    </>
  );
};

export default Posts;
