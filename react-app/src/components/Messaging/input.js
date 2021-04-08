import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createChat } from '../../store/chat';
import { useOtherUserContext } from '../../context/otherUser';

//* CHAT INPUT FORM
export default function ChatForm() {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');

    const { otherUser } = useOtherUserContext();
    console.log(otherUser)
    const lgdInUserId = useSelector((state) => state.session.user.id);

    const onSend = async function (e) {
        e.preventDefault();
        const messageOrErrors = await dispatch(
            createChat({
                senderId: lgdInUserId,
                receiverId: otherUser.id,
                message: message,
            })
        );
        if (!messageOrErrors.errors) {
            setMessage('');
        }
    };

    return (
        <form onSubmit={onSend} className='chat-form'>
            <div style={{ width: "22rem", display: "flex", alignItems: "center" }}>
                <textarea style={{ width: "" }}
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    className='chat-form__input'
                    maxLength={500}
                    rows={3}
                    required
                />

                <button type='submit' className='chat-form__button'> Send
        <i className='fas fa-play fa-2x'></i>
                </button>
            </div>
        </form>
    );
}