import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import "./comments.css";
import {createComment} from '../../Store/comments'

const CommentForm = ({postId}) => {
  const [content, setContent] = useState('')
  const [lines, setLines] = useState(1)
  const [errors, setErrors] = useState("")
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()


  const formSubmitHandler = async (e) => {
    e.preventDefault()
    const comment = await  dispatch(createComment(user.id,postId,content))
    if (comment.errors) {      
      setErrors(comment.errors)
    }
  }


  return (
    <div className='comment-form__container'>
      <form className="commentform" onSubmit={formSubmitHandler}>
        <textarea
          className='comment-form__input'
          placeholder={errors? errors : 'Add a comment...'}
          onChange={(e) => {
            setContent(e.target.value)
            const numLines = Math.ceil(e.target.value.length/70)
            setLines( numLines > 0 ? numLines : 1)
          }}
          style={{height: `${lines * 32}px`}}
        ></textarea>
        <button type='submit' className='comment-form__button'>
          Post
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
