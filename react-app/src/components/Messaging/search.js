import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import io from "socket.io-client";

const Search = () => {
    const [query, setQuery] = useState("");

    let regex = new RegExp(`w*${query}w*`, "i");
    const searchResults = useSelector((state) =>
        Object.values(state.users).filter((user) => regex.test(user.username))
    );

    let endPoint = "http://localhost:5000"
    // connect with server using socket.io
    let socket = io.connect(`${endPoint}`)
    const getMessages = () => {
        socket.on('message', msg => {
            setMessages([...messages, msg.msg.message]);
        });
    };
    const [messages, setMessages] = useState(initialState)
    const [singleMessage, setSingleMessage] = useState(initialState)
    const [chatList, setChatList] = useState(initialState)



    return (
        <div className='DM__search'>
            <i className='fas fa-search DM__icon' />
            <input
                type='text'
                placeholder='Search'
                className='DM__searchfield'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            ></input>
            {query && searchResults.length !== 0 && (
                <ul className='results__dropdown'>
                    {searchResults.map((user) => (
                        <li key={user.id}>
                            <div className='results__user-card'>
                                <img
                                    className='results__pic'
                                    src={user.profilePicture}
                                    alt='profile'
                                />
                                {/* <NavLink
                                    to={`/profile/${user.id}`}
                                    className='results__username'
                                    onClick={() => setQuery("")}
                                >
                                    {user.username}
                                </NavLink> */}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Search;
