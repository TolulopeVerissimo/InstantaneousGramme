import React, { useEffect, useState, useContext } from 'react'
import Header from './Header.js'
import FeaturedStories from './FeaturedStories.js'
import Posts from './Posts.js'
function Profile() {

    useEffect(async () => {
        const res = await fetch(`users/${userid}`,
            {
                method: `GET`,
                headers: { 'Content-type': 'application/json' }
            })
        const data = await res.json()
        console.log(data)

    }, [])

    const follow = () => {
        const res = await fetch(`users/${userid}/follow`,
            {
                method: `PUT`,
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    followerId: userid
                })
            })
        const data = await res.json()
        console.log(data)

        const act = await(data) => {
        dispatch({ type: "UPDATE", payload: { followERS: data.followedUserId, followING: data.followerId } })
        local

    }

}
const followUser = () => {
    fetch('/follow', {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('jwt')
        },
        body: JSON.stringify({
            followId: userid
        })
    }).then(res => res.json())
        .then(data => {

            dispatch({ type: "UPDATE", payload: { following: data.following, followers: data.followers } })
            localStorage.setItem("user", JSON.stringify(data))
            setProfile((prevState) => {
                return {
                    ...prevState,
                    user: {
                        ...prevState.user,
                        followers: [...prevState.user.followers, data._id]
                    }
                }
            })
            setShowFollow(false)
        })
}



return (
    <>
        <Header />
        <FeaturedStories />
        <Posts />
    </>
)
}

export default Profile