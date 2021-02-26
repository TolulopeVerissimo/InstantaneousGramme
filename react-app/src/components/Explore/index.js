import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as postActions from "../../Store/posts";
import { getUsers } from "../../Store/user";

import './explore.css'
const Explore = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        dispatch(getUsers())
        dispatch(postActions.getPosts());
    }, [dispatch]);


    const posts = useSelector((state) => Object.values(state.posts));
    const user = useSelector((state) => state.session.user);
    const users = useSelector((state) => state.user);


    useEffect(() => {
        if (posts && user) setIsLoaded(true);
    }, [posts, user]);

    console.log(posts)

    return (
        <>
            <Explore posts={posts} user={user} />\
        </>
    );
};
export default Explore