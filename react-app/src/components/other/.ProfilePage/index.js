import React from 'react'
import Header from './Header.js'
import FeaturedStories from './FeaturedStories.js'
import Posts from './Posts.js'
function Profile({ User, UsersList }) {
    console.log(User)
    console.log(UsersList)
    return (
        <>
            <Header />
            <FeaturedStories />
            <Posts />
        </>
    )
}

export default Profile