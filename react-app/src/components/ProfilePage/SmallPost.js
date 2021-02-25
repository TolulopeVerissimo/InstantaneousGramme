import React from 'react'
export default function SmallPost({ post }) {
  return (
    <div className="profilePost">
      <img src={post.imagePath} alt="ig post" />
    </div>
  )
}
