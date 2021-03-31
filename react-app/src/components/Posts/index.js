import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";

import Post from "./Post";
import "./posts.css";

const Posts = () => {
  const user = useSelector((state) => state.session.user);
  const posts = useSelector((state) =>
    Object.values(state.posts).filter((post) => post.userId !== user.id)
  );

  let count = 0;
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [postsToDisplay, setPostsToDisplay] = useState([]);
  const dispatch = useDispatch();

  const loadFunc = () => {
    //need to check for end of posts
    const newPosts = [];
    for (let i = 0; i < 10; i++) {
      if (count >= posts.length) {
        console.log("count over posts length");
        setHasMore(false);
        return;
      }
      newPosts.push(posts[count]);
      count++;
    }
    setPostsToDisplay(newPosts);
  };

  useEffect(() => {
    if (posts) {
      loadFunc();
    }
  }, [posts]);

  useEffect(() => {
    if (postsToDisplay.length && user) setIsLoaded(true);
  }, [postsToDisplay, user]);

  return (
    <>
      <InfiniteScroll
        hasMore={hasMore}
        loadMore={loadFunc}
        loader={
          <div className='loader' key={0}>
            Loading ...
          </div>
        }
      >
        {isLoaded &&
          postsToDisplay.map((post) => (
            <Post key={post.id} post={post} user={user} />
          ))}
      </InfiniteScroll>
    </>
  );
};

export default Posts;
