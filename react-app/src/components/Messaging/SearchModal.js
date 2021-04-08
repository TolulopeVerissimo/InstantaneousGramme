import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'


import './styles/searchModal.css'



const SearchModal = () => {
    const [faded, setFaded] = useState(false)
    let history = useHistory()
    const users = useSelector(state => state.users)


    return (
        <>
            <div className="searchModal">
                <div className="topboarder">
                    <button className="closeModalX"></button>
                    <h4>New Message</h4>
                    <button className={faded = faded ? 'fadedWords' : 'NOTfadedWords'}> Next </button>
                </div>
                <div className="searchBoxModal"></div>
                <div className="suggestionsFromFriendsList"></div>

            </div>
        </>
    );
}

export default SearchModal;
