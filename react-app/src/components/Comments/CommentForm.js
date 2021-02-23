import React from "react";
import "./comments.css";

const CommentForm = () => {
  return (
    <>
      <img
        className='comment-form__icon'
        src='/icons/insta_smily_face_icon.png'
      ></img>
      <input
        className='comment-form__input'
        placeholder='Add a comment...'
      ></input>
    </>
  );
};

export default CommentForm;
