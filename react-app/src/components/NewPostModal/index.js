import { useState } from 'react'
import { Modal } from '../../Context/Modal'
import NewPostForm from './NewPostForm'
function NewPostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i className="far fa-plus-square" onClick={()=>setShowModal(true)} />
      {showModal &&(
        <Modal onClose={() => setShowModal(false)}>
          <NewPostForm />
        </Modal>
      )}
    </>
  )
}

export default NewPostModal;
