import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header.js'
import SmallPost from './SmallPost'
// import FeaturedStories from './FeaturedStories.js'
// import Posts from './Posts.js'
import { getProfile } from '../../Store/profile'
// import { getFollows } from '../../Store/follow'
import { getPosts } from '../../Store/posts'
import { getUsers } from '../../Store/user'
import { useParams } from 'react-router-dom'
import FollowUser from '../FollowUser'
import './styles/Profile.css'
import { getFollowers } from '../../Store/follow.js'
function Profile() {
	const { id } = useParams()
	const [loaded,setLoaded] = useState(false)
	const userId = useSelector(state => state.session.user.id)
	const profiles = useSelector(state => state.profiles)
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
		dispatch(getPosts())
		dispatch(getFollowers(id))
		setLoaded(true)
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
			{ loaded &&
				<div>
					< Header profile={profiles[id]} />
				<div className="moveTheFollowButton">
					<FollowUser followedUserId={id}/>
				</div>
				<div className="gridContainer">
					{
						userPosts &&
						userPosts.map((post) => <SmallPost post={post} />)
					}
					</div>
				</div>
			}
		</>

	)
}

export default Profile;
