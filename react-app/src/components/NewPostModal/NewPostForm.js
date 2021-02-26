import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getSignedRequest } from '../../services/upload'
import './NewPostForm.css'


function NewPostForm() {
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
    const url = await getSignedRequest(photo)
    setImagePath(url)
    const options =
    {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ isPrivate, description, imagePath, userId })
    }
    const res = await fetch('/api/posts/', options)
    return res
  }
  return (
    <form className="newpostform" onSubmit={handleSubmit}>
      <label className="newpostform__label fileInput__label">
        Choose a Photo
        <input
          type="file"
          className="newpostform__input fileInput"
          onChange={(e) => setPhoto(e.target.files[0])} />
      </label>
      <textarea
        rows="5"
        cols="33"
        type="textarea"
        value={description}
        placeholder="Enter a description"
        onChange={(e) => setDescription(e.target.value)} />

      <label className="newpostform__label">
        Private
        <input
          type="checkbox"
          className="newpostform__input checkbox"
          checked={isPrivate}
          onChange={(e) => setIsPrivate(e.target.checked)} />
      </label>
      <button type="submit" className="newpostform__button">Submit Post</button>
    </form>
  )
}

export default NewPostForm
