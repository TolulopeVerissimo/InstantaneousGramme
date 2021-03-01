import React, { useState } from 'react'
import './styles/smolboy.css'
import { Modal } from '../../Context/Modal'
import ModalPost from './modalClickPost'

export default function SmallPost({ post, user }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="ppContainer">
      <article className="card">
        <figure>
          <img src={post.imagePath} key={post.id} alt="ig post" onClick={() => { setShowModal(true) }
          } />
          {showModal
            && (<Modal onClose={() => {
              // setDisplayCSS('inline-block')
              setShowModal(false)
            }}>
              <ModalPost post={post} user={user} />
            </Modal>
            )}

        </figure>
      </article>
    </div>
  )
}
