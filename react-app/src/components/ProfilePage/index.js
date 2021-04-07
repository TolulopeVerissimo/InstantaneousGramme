import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header.js'
import SmallPost from './SmallPost'
import { getProfile } from '../../Store/profile'
import { getPosts } from '../../Store/posts'
import { getComments } from '../../Store/comments'
import { useParams } from 'react-router-dom'
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
		dispatch(getComments())
		setLoaded(true)
	}, [dispatch, id])
	if (posts) {
		for (let key in posts) {
			if (posts[key].userId === parseInt(id, 10)) {
				userPosts.push(posts[key])
			}
		}
	}
	return (
		<>
			{ loaded &&
				<div id="profile">
					< Header profile={profiles[id]} />
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
