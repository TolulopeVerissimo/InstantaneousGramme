import React, { useState } from 'react'
import { Modal } from '../../Context/Modal'
import PostForm from '../PostModal/PostForm'

function EditPostModal( { post }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i className="fas fa-ellipsis-h navbar__icon" onClick={()=>setShowModal(true)} />
      {showModal &&(
        <Modal>
          <PostForm post={post} edit={true} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  )
}

export default EditPostModal;
