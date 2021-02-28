import React from 'react'
import FollowUser from '../FollowUser'
import './hover.css'
const Hover = (post, profile) => {

    return (
        <>
            <div className='modalLandingPage__container'>

                <div className="modalLandingPage__levelOne">
                    <div className='modalLandingPage__header'>
                        <div className='modalLandingPage__profile-pic'>
                            <img src={post.profilePicture} alt='profile pic' />
                        </div>
                        <div className='modalLandingPage__user-info'>
                            <div className='modalLandingPage__username'>{post.username}</div>
                        </div>
                        <div className='modalLandingPage__userBio'>
                            <div className='modalLandingPage__username'>{profile.biography}</div>
                        </div>
                    </div>
                </div>

                <div className="modalLandingPage__levelTwo">
                    {/* Followers and Following */}
                </div>

                <div className="modalLandingPage__levelThree">
                    <div className='modalLandingPage__image'>
                        <img className='modalLandingPage__img-tag' src={post.imagePath} alt='user_post' />
                    </div>
                </div>

                <div key={post.id} className="modalLandingPage__levelFour">
                    <FollowUser />
                </div>


            </div>
        </>
    )
}
export default Hover