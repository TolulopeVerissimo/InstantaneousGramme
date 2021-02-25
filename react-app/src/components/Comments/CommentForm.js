import React from "react";
import "./comments.css";
import smilyIcon from '../../images/icons/insta_smily_face_icon.png'

const CommentForm = () => {
  return (
    <div className='comment-form__container'>
      <img
        alt="smile emoji"
        className='comment-form__icon'
        src={smilyIcon}
      ></img>
      <input
        className='comment-form__input'
        placeholder='Add a comment...'
      ></input>
      <form action='/' method='post'>
        <button type='submit' className='comment-form__button'>
          Post
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
