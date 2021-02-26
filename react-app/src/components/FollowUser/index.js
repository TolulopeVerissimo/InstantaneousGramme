import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function FollowUser() {
  const followed_user  = useParams();
  const userId = useSelector(state => state.session.user.id)
  const follow = async (e) => {
    e.preventDefault()
    console.log(userId)
    const res = await fetch(`/api/users/${followed_user.id}/follow`, {
      method: 'POST',
      headers: {'Content-Type': 'application/JSON'},
      body: JSON.stringify({follower_id: userId})
    })
    console.log(res)
  }
  return (
    <div>
      {userId &&
      <form onSubmit={follow}>
        <input name="follower_id" type="hidden" value={userId} />
        <button className="followUser" type="submit">{'Follow This User'}</button>
        </form>}
    </div>

  )
}
