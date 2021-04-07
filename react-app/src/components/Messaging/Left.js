import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Modal } from '../../Context/Modal'
import SearchModal from './SearchModal.js'
import './styles/left.css'


const LeftSide = () => {
    const [showModal, setShowModal] = useState(false);
    let history = useHistory()
    const user = useSelector(state => state.session.user)
    const userId = useSelector(state => state.session.user.id)
    const profileRedirect = () => {
        history.push(`/profile/${userId}`)
    }

    return (
        <>
            <div className="Leftcontainer">
                <div className="topbox">
                    <h3 onClick={profileRedirect}>{`${user.name}`}</h3>
                    <i className="fas fa-edit leftEdit" onClick={() => {
                        showModal && (
                            <Modal onClose={() => setShowModal(false)}>
                                < SearchModal />
                            </Modal>
                        )
                    }

                    }></i>
                </div>

                <div className="userList">

                </div>

            </div>
        </>
    );
}

export default LeftSide;
