import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getSignedRequest } from '../../services/upload'
import { updateProfilePic } from '../../Store/user'
import FollowUser from '../FollowUser'
import './styles/headers.css'
import spin from '../../images/Spin-1s-200px.gif'
function Header({profile}) {
  const dispatch = useDispatch();
  const { id: userId } = useParams()
  const [profilePic, setProfilePic] = useState(profile.profilePicture)

  const handleProfilePic = async (e) => {
    setProfilePic(spin)
    const src = URL.createObjectURL(e.target.files[0])
    const res = await getSignedRequest(e.target.files[0]);
    if (!res.error){
      const url = res.url + res.fields.key
      await dispatch(updateProfilePic(userId, url))
      setProfilePic(src)
    }
  }

  return (
      <>
        {profile &&
          <div className="HeaderMain">
            <div className="pfp">
              <form>
                <label htmlFor="profilepic-upload">
                  <img src={profilePic} alt={profile.username} />
                  <input type="file"
                    id="profilepic-upload"
                    accept="image/jpeg, image/png"
                    onChange={handleProfilePic}
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
