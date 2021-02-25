import React, { useEffect, useState, useContext } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getProfile } from '../../Store/profile'

import { getFollows } from '../../Store/follow'

import { useParams } from 'react-router-dom'

import './styles/headers.css'


function Header() {

    const profile = useSelector(state => state.profiles)
    // console.log("Profile from useSelection", profile)
    // const { item } = profile
    // console.log("asdasdasdsad", Object.values(profile)[0])
    const item = Object.values(profile)[0]
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfile(id))
        // dispatch(getFollows())
    }, [dispatch])


    return (
        <>
            <div className="HeaderMain">
                <div className="pfp">
                    <img src={item.profilePicture} alt={item.username} />
                </div>
                <h2 className="userHandle">{item.username}</h2>
                <i style={{ fontSize: '10rem' }} class="fas fa-cog"></i>

                <br />
                <br />
                <br />
                <div>
                    <span>posts</span>
                    <span>followers</span>
                    <span>following</span>
                </div>
                <div><h4>{item.username}</h4></div>
                <div><p>Synopsis goes here.</p></div>
            </div>
        </>
    )
}
export default Header