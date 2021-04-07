import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'

import './styles/searchModal.css'



const SearchModal = () => {
    let history = useHistory()
    const users = useSelector(state => state.users)


    return (
        <>

        </>
    );
}

export default SearchModal;
