import React from 'react'
import './styles/smolboy.css'
export default function SmallPost({ post }) {
  return (
    // <div className="profilePost">
    //   <div className="grid">
    // <img src={post.imagePath} alt="ig post" />
    //   </div>
    // </div>

    <div className="ppContainer">
      <article className="card">
        <figure>
          <img src={post.imagePath} alt="ig post" />
        </figure>
      </article>
    </div>
  )
}
