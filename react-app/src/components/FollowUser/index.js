import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { followUser } from '../../Store/follow';

export default function FollowUser({followedUserId }) {
  const dispatch = useDispatch();
  const follows = useSelector(state => state.follows[followedUserId])
  const userId = useSelector(state => state.session.user.id)
  const follow = async (e) => {
    e.preventDefault()
    dispatch(followUser(userId, followedUserId))
  }
  const unfollow = async (e) => {
    e.preventDefault()
    dispatch(unfollow(userId, followedUserId))
  }
  return (
    <div>
      {follows &&
        <form onSubmit={follows[userId] ? unfollow: follow}>
          <input name="follower_id" type="hidden" value={userId} />
          <button className={follows[userId] ? "unfollowUser" : "followUser"} type="submit">{follows[userId] ? 'Unfollow' :'Follow'}</button>
        </form>}
    </div>

  )
}
