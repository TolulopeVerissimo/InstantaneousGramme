import React, { useEffect, useState, useContext } from 'react'
import Header from './Header.js'
import FeaturedStories from './FeaturedStories.js'
import Posts from './Posts.js'
function Profile() {

    return (
        <>
            <Header />
            <FeaturedStories />
            <Posts />
        </>
    )
}

export default Profile