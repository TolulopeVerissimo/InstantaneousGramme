import React from 'react';
import LeftSide from './Left.js'
import RightSide from './Right.js'
import './styles/index.css'

const DMs = () => {

    return (
        <>
            <div className="DMcontainer">
                <LeftSide />
                <RightSide />
            </div>
        </>
    );
}

export default DMs;
