import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createChat } from '../../store/chat';
import { useOtherUserContext } from '../../context/otherUser';


export default function TextArea() {
    const dispatch = useDispatch();
    const [msg, setMsg] = useState('');

    const { otherUser } = useOtherUserContext();
    console.log(otherUser)
    const lgdInUserId = useSelector((state) => state.session.user.id);
    const [query, setQuery] = useState("");

    const onSend = async function (e) {
        e.preventDefault();
        const msgOrErrors = await dispatch(
            createChat({
                senderId: lgdInUserId,
                receiverId: otherUser.id,
                message: msg,
            })
        );
        if (!msgOrErrors.errors) {
            setMsg('');
        }
    };
    return (
        <>
            <form onSubmit={onSend} className="textarea">
                <div></div>
                <textarea
                    value={msg}
                    onChange={(e) => {
                        setMsg(e.target.value)
                    }}
                    className="textinput"
                    maxLength={1000}
                    rows={6}
                    required
                />
          //Render swap the blue button
          <button type="submit" className="messageSubmitButton">{query ? 'Send' : query}</button>

            </form>
        </>
    )