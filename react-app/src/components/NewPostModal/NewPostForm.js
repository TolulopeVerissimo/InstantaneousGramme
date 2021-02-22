function NewPostForm() {
  const [photo, setPhoto] = useState('')
  const handleSubmit= (e) => {
    e.preventDefault()
  }
  return (
    <form className="newpostform" onSubmit={handleSubmit}>
      <label className="newpostform__label">
        Photo:
        <input
          type="file"
          value={profilePicture}
          className="newpostform__input"
          onChange={(e) => setPhoto(e.target.value)}/>
      </label>
    </form>
  )
}
