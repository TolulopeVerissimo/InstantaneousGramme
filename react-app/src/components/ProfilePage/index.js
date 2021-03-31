import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header.js'
import SmallPost from './SmallPost'
import { getProfile } from '../../Store/profile'
import { getPosts } from '../../Store/posts'
import { useParams } from 'react-router-dom'
import FollowUser from '../FollowUser'
import './styles/Profile.css'
import { getFollowers } from '../../Store/follow.js'

function Profile() {
	const { id } = useParams()
	const [loaded, setLoaded] = useState(false)
	const user = useSelector((state) => state.session.user);
	const profiles = useSelector(state => state.profiles)
	const posts = useSelector(state => state.posts)
	const dispatch = useDispatch()
	const userPosts = []

	useEffect(() => {

		dispatch(getProfile(id))
		dispatch(getPosts())
		dispatch(getFollowers(id))
		setLoaded(true)
	}, [dispatch, id])
	if (posts) {
		for (let key in posts) {
			if (posts[key].userId === parseInt(id, 10)) {
				console.log()
				userPosts.push(posts[key])
			}
		}
	}
	return (
		<>
			{ loaded &&
				<div>
					< Header profile={profiles[id]} />

					<div className="moveTheFollowButton">
						<FollowUser followedUserId={id} />
					</div>

					<div className="gridContainer">
						{userPosts &&
							userPosts.map((post) => <SmallPost post={post} key={post.id} user={user} />)
						}
					</div>
				</div>
			}
		</>

	)
}

export default Profile;
