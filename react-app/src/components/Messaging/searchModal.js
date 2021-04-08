import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Search from "./search";

import './styles/searchModal.css'

const SearchModal = () => {
    const [faded, setFaded] = useState(false)
    const [showModal, setShowModal] = useState(false);
    let history = useHistory()
    const users = useSelector(state => state.users)
    return (
        <>
            <div className="searchModal">

                <div className="topboarder">
                    <i className="fas fa-times XMark" onClick={() => setShowModal(false)}></i>
                    <h4 className="newMessage">New Message</h4>
                    <h4 className={faded ? 'NOTfadedWords words' : 'fadedWords words'}> Next </h4>
                </div>
                <div className="searchBoxModal">
                    <Search />
                </div>
                <div className="suggestionsFromFriendsList"></div>

            </div>
        </>
    );
}

export default SearchModal;
