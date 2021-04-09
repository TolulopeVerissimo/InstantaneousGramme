import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getSignedRequest } from '../../services/upload'
import FollowUser from '../FollowUser'
import './styles/headers.css'
function Header({ profile }) {
    const userId = useSelector(state => state.session.user.id)
    const [img, setImg] = useState("")

    const handleProfilePic = async (img) => {
      const url = await getSignedRequest(img);
      console.log(url)
    }
    return (
        <>
          {profile &&
            <div className="HeaderMain">
              <div className="pfp">
                <form>
                  <label htmlFor="profilepic-upload">
                    <img src={profile.profilePicture} alt={profile.username} />
                    <input type="file"
                      id="profilepic-upload"
                      accept="image/jpeg, image/png"
                      value={img}
                      onChange={(e) =>handleProfilePic(e.target.files[0])}
                      style={{display: "none"}}
                      />
                  </label>
                </form>

              </div>
              <div className="userinfo">
                <div className="userHandle">
                  <h2 >{profile.username}</h2>
                  {profile.id !== userId &&
                  <FollowUser followedUserId={profile.id} />
                  }
                </div>
                <div className="metrics">
                  <span><span style={{ fontWeight: '700'}}>{profile.postCount}</span> posts</span>
                  <span className="s"></span>
                  <span><span style={{ fontWeight: '700'}}>{profile.followerCount}</span> followers</span>
                  <span className="s"></span>
                  <span><span style={{ fontWeight: '700'}}>{profile.followingCount}</span> following</span>
                </div>
                <h4>{profile.username}</h4>
                <p>{profile.biography}</p>
              </div>
            </div>
          }
        </>
    )
}
export default Header
