import React, { useState } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";

import Post from "./Post";
import "./posts.css";

const Posts = ({ posts }) => {
  const user = useSelector((state) => state.session.user);
  posts = posts.filter((post) => post.userId !== user.id);

  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [postsToDisplay, setPostsToDisplay] = useState([]);

  const loadFunc = () => {
    const newPosts = [...postsToDisplay];
    for (let i = count; i < count + 10; i++) {
      if (!posts[i]) {
        setHasMore(false);
        break;
      }
      newPosts.push(posts[i]);
    }
    setCount((count) => count + 10);
    setPostsToDisplay(newPosts);
  };

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
        {postsToDisplay &&
          user &&
          postsToDisplay.map((post) => (
            <Post key={post.id} post={post} user={user} />
          ))}
      </InfiniteScroll>
    </>
  );
};

export default Posts;
