import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { followUser, unfollowUser } from '../../Store/follow';
export default function FollowUser({followedUserId }) {
  const dispatch = useDispatch();
  const follows = useSelector(state => state.follows[followedUserId])
  const userId = useSelector(state => state.session.user.id)
  const [isFollowed, setIsFollowed] = useState(false)
  const follow = async (e) => {
    e.preventDefault()
    dispatch(followUser(userId, followedUserId))
    setIsFollowed(true)
  }
  const unfollow = async (e) => {
    e.preventDefault()
    dispatch(unfollowUser(userId, followedUserId))
    setIsFollowed(false)
  }
  useEffect(() => {
    if (follows) {
      if (follows[userId]) {
        setIsFollowed(true);
      } else setIsFollowed(false);
    }
  }, [setIsFollowed, follows, userId]);
  return (
    <div>
      {follows &&
        <form onSubmit={isFollowed ? unfollow: follow}>
          <input name="follower_id" type="hidden" value={userId} />
          <button className={isFollowed ? "unfollowUser" : "followUser"} type="submit">{isFollowed ? 'Unfollow' :'Follow'}</button>
        </form>}
    </div>

  )
}
