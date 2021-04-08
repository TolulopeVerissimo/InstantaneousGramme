import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import "./comments.css";
import smilyIcon from '../../images/icons/insta_smily_face_icon.png'
import {createComment} from '../../Store/comments'

const CommentForm = ({postId}) => {
  const [content, setContent] = useState('')
  const [lines, setLines] = useState(1)
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()


  const formSubmitHandler = async (e) => {
    e.preventDefault()
    if(!content) return alert('there is no content')
    const userId = user.id
    dispatch(createComment(userId,postId,content))
  }


  return (
    <div className='comment-form__container'>
      <form className="commentform" onSubmit={formSubmitHandler}>
        <textarea
          className='comment-form__input'
          placeholder='Add a comment...'
          onChange={(e) => {
            setContent(e.target.value)
            setLines(Math.ceil(e.target.value.length/70)> 0 ? Math.ceil(e.target.value.length/70) : 1)
            console.log(lines)
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
