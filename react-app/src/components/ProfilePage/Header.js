import React from 'react'
import { useSelector } from 'react-redux'
import FollowUser from '../FollowUser'
import './styles/headers.css'
function Header({ profile }) {
    const userId = useSelector(state => state.session.user.id)
    return (
        <>

            {profile &&
                <div className="HeaderMain">

                    <div className="pfp">
                        <img src={profile.profilePicture} alt={profile.username} />
                    </div>
                    <div className="userinfo">
                        <h2 className="userHandle">{profile.username}</h2>
                        {/* <i style={{ fontSize: '3.2rem' }} class="fas fa-cog"></i> */}
                        <div className="metrics">
                            <span><span style={{ fontWeight: '700'}}>{profile.postCount}</span> posts</span>
                            <span className="s"></span>
                            <span><span style={{ fontWeight: '700'}}>{profile.followerCount}</span> followers</span>
                            <span className="s"></span>
                            <span><span style={{ fontWeight: '700'}}>{profile.followingCount}</span> following</span>
                        </div>
                        <div><h4>{profile.username}</h4></div>
                        <div><p>{profile.biography}</p></div>
                        {profile.id !== userId &&
                        <FollowUser followedUserId={profile.id} />
                        }
                    </div>
                </div>}

        </>
    )
}
export default Header
