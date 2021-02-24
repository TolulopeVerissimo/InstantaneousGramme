import React, { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Header from './Header.js'
// import FeaturedStories from './FeaturedStories.js'
// import Posts from './Posts.js'
import { getProfile } from '../../Store/profile'

import { getFollows } from '../../Store/follow'
import { getUsers } from '../../Store/user'
import { useParams } from 'react-router-dom'
function Profile() {

    const { id } = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
        debugger;
        dispatch(getProfile(id))
        dispatch(getFollows(id))
        // dispatch(getUsers())
    }, [dispatch])

    return (
        <>
            <h2>hi</h2>
            {/* <Header /> */}
            {/* <FeaturedStories /> */}
            {/* <Posts /> */}
        </>
    )
}

export default Profile