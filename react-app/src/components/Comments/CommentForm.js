import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import "./comments.css";
import smilyIcon from '../../images/icons/insta_smily_face_icon.png'

const CommentForm = (props) => {
  const [comment, setComment] = useState('')


  const formSubmitHandler = (e) => {
   
    if (!comment.errors) {
      
    } else {
      alert("Comment could not be submitted")
    }    
  }


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
        onChange={(e) => setComment(e.target.value)}
        onSubmit={() => formSubmitHandler}
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
