import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import io from "socket.io-client";
import './styles/right.css'

const RightSide = () => {
    let history = useHistory()
    let endPoint = "http://localhost:5000"
    let socket = io.connect(endPoint)
    const [userMessages, setUserMessages] = useState(null)
    return (
        <>
            <div className="Rightcontainer">
                {userMessages ?
                    <>
                        <h1>
                            Messaging PlaceHolder
                        </h1>

                    </>
                    :
                    <>
                        <div className="rightCircle">
                            <i class="fas fa-paper-plane"></i>
                        </div>
                        <h3>Your Messages</h3>
                        <p>Send private photos and messages to a friend or group.</p>
                        <button>Send a message</button>

                    </>
                }
            </div>
        </>
    );
}

export default RightSide;
