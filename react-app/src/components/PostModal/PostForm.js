import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getSignedRequest } from '../../services/upload'
import { createPost, editPost } from '../../Store/posts'
import './PostForm.css'


function PostForm({ edit, post }) {
  const [photo, setPhoto] = useState('')
  const [description, setDescription] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)
  const [imagePath, setImagePath] = useState('')
  const user = useSelector(state => state.session.user)
  let userId
  if (user) {
    userId = user.id
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (edit) {
      editPost(post.id, description, isPrivate)
    } else {
      const url = await getSignedRequest(photo)
      setImagePath(url)
      createPost({userId, description, imagePath, isPrivate })
    }

  }
  return (
    <form className="postform" onSubmit={handleSubmit}>
      {!edit && <label className="postform__label fileInput__label">
        Choose a Photo
        <input
          type="file"
          className="postform__input fileInput"
          onChange={(e) => setPhoto(e.target.files[0])} />
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
    </form>
  )
}

export default PostForm
