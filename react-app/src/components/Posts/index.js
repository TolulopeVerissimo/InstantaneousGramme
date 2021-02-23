import React from "react";
import Comments from "../Comments";
import "./posts.css";

const Posts = () => {
  return (
    <div className='post__container'>
      <div className='post__header'>
        <div className='post__profile-pic'></div>
        <div className='post__user-info'>
          <div className='post__username'> Username</div>
        </div>
      </div>
      <div className='post__image'>
        <img
          className='post__img-tag'
          src='https://i.imgflip.com/4howsd.jpg'
          alt='user_post'
        ></img>
      </div>
      <div className='post__icons'>
        <div className='post__icon'>
          <img
            src='/icons/insta_heart_blank_icon.png'
            // changes icon to heart_red_icon and sets state of post to liked
            onClick={() => console.log("clicked")}
          />
        </div>
        <div className='post__icon'>
          <img
            src='/icons/insta_comment_icon.png'
            // opens up comment section?
            onClick={() => console.log("clicked")}
          />
        </div>
        <div className='post__icon'>
          <img
            src='/icons/insta_share_icon.png'
            // Do we want the share icon? what would it enable?
            onClick={() => console.log("clicked")}
          />
        </div>
      </div>
      <div className='commment__likes-count'>??? likes</div>
      <div className='description'> USERNAME | Post description</div>
      <div className='post__comments'>
        {/* pass user in as props to Comments */}
        <Comments />
      </div>
      <div className='post__createdAt'>??? HOURS AGO</div>
      <div className='post__comment-form'>{/* <CommentForm /> */}</div>
    </div>
  );
};

export default Posts;
