import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header.js'
import SmallPost from './SmallPost'
// import FeaturedStories from './FeaturedStories.js'
// import Posts from './Posts.js'
import { getProfile } from '../../Store/profile'
import { getFollows } from '../../Store/follow'
import { getPosts } from '../../Store/posts'
import { getUsers } from '../../Store/user'
import { useParams } from 'react-router-dom'
import FollowUser from '../FollowUser'
import './styles/Profile.css'
function Profile() {
	const { id } = useParams()
	const profiles = useSelector(state => state.profiles)
	const user = useSelector(state => state.users)
	// const follow = useSelector(state => state.follows)
	const posts = useSelector(state => state.posts)
	const dispatch = useDispatch()
	const userPosts =
		[
			"https://images.unsplash.com/photo-1484723091739-30…3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
			"https://images.unsplash.com/photo-1484723091739-30…3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
			"https://images.unsplash.com/photo-1484723091739-30…3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
			"https://images.unsplash.com/photo-1484723091739-30…3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
			"https://images.unsplash.com/photo-1484723091739-30…3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
			"https://images.unsplash.com/photo-1484723091739-30…3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
		]
	useEffect(() => {
		// debugger;
		dispatch(getProfile(id))
		// dispatch(getFollows(id))
		dispatch(getPosts())
	}, [dispatch])
	if (posts) {
		for (let key in posts) {
			if (posts[key].userId == id) {
				userPosts.push(posts[key])
			}
		}
	}
	return (
		<>
			{/* {profiles &&  <h2>hi {profiles[id].username}</h2>} */}

			< Header profile={profiles[id]} user={user} />
			<FollowUser />
			{/* <FeaturedStories /> */}

			<div className="gridContainer">
				{
					userPosts &&
					userPosts.map((post) => <SmallPost post={post} />)
				}

			</div>
		</>

	)
}

export default Profile
