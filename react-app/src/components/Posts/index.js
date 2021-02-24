import React from "react";
import "./posts.css";

const Posts = () => {
  return (
    <div className='post__container'>
      <div className='post__header'>
        <div className='post__profile-pic'></div>
        <div className='user-info'>
          <div className='post-header'> Username</div>
          <div className='post-header'> Username</div>
        </div>
      </div>
      <div className='post__image'>
        <img src='https://i.imgflip.com/4howsd.jpg' alt='user_post'></img>
      </div>
      <div className='post__icons'></div>
      <div className='post__comments'>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
