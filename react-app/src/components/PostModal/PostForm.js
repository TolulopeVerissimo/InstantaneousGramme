import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getSignedRequest } from '../../services/upload'
import { createPost, editPost, deletePost } from '../../Store/posts'
import './PostForm.css'


function PostForm({ edit, post }) {
  const history = useHistory()
  const dispatch = useDispatch()
  const [description, setDescription] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)
  const user = useSelector(state => state.session.user)
  let userId
  if (user) {
    userId = user.id
  }
  const handleSubmit = async (e) => {
    const form = e.target;
    const photo = form.elements["image"].files[0]
    e.preventDefault();
    if (edit) {
      await dispatch(editPost(post.id, description, isPrivate))
    } else {
      const url = await getSignedRequest(photo)
      await dispatch(createPost({userId, description, url, isPrivate }))
    }
    history.push('/')
  }
  const removePost = async (e) => {
    await dispatch(deletePost(post.id))
  }
  return (
    <form className="postform" onSubmit={handleSubmit}>
      {/* {photo && <img src={photo} />} */}
      {!edit && <label className="postform__label fileInput__label">
        Choose a Photo
        <input
          name="image"
          type="file"
          className="postform__input fileInput"
        />
      </label>}

      <textarea
        rows="5"
        cols="33"
        type="textarea"
        value={description}
        placeholder="Enter a description"
        onChange={(e) => setDescription(e.target.value)} />

      <label className="postform__label">
        Private
        <input
          type="checkbox"
          className="postform__input checkbox"
          checked={isPrivate}
          onChange={(e) => setIsPrivate(e.target.checked)} />
      </label>
      <button type="submit" className="postform__button">{edit ?'Edit Post': 'Submit Post'}</button>
      {edit && <a onClick={removePost} className="postform__button postform__delete">Delete Post</a>}
    </form>
  )
}

export default PostForm
