import React, { useState } from 'react'
import { getSignedRequest } from '../../services/upload'
import './NewPostForm.css'


function NewPostForm() {
  const [photo, setPhoto] = useState('')
  const [description, setDescription] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)
  const handleSubmit= async (e) => {
    e.preventDefault();
    const photo_url = await getSignedRequest(photo)


    // const data = {description, isPrivate}
    // const options =
    //                 {
    //                   method: 'POST',
    //                   body: photo, data
    //                 }
    // const res = await fetch('/api/posts/', options)
  }
  return (
    <form className="newpostform" onSubmit={handleSubmit}>
      <label className="newpostform__label">
        Photo
        <input
          type="file"
          className="newpostform__input"
          onChange={(e) => setPhoto(e.target.files[0])}/>
      </label>
      <label className="newpostform__label textarea">
        <input
          type="textarea"
          value={description}
          placeholder="Enter a description"
          onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label className="newpostform__label">
        Private
        <input
          type="checkbox"
          className="newpostform__input checkbox"
          checked={isPrivate}
          onChange={(e) => setIsPrivate(e.target.checked)} />
      </label>
      <button type="submit" className="newpostform__button"><div>Submit Post</div></button>
    </form>
  )
}

export default NewPostForm
