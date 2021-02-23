import React, { useState, useEffect, useRef } from 'react'
import LoginForm from '../auth/LoginForm.js'
import { useHistory } from 'react-router-dom'

import './splash.css'
import './appstore.css'
import { NavLink } from 'react-router-dom'
function Splash({ authenticated, setAuthenticated }) {
    let history = useHistory()

    const signUpRedirect = () => {
        history.push('/sign-up')
    }

    let imgArr =
        [
            "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F034%2F408%2FPunching_Pepe_Banner.jpg",
            "https://i.imgflip.com/4howsd.jpg",
            "https://i.kym-cdn.com/photos/images/newsfeed/001/591/675/a27.png",
            "https://starecat.com/content/wp-content/uploads/pope-francis-punch-man-with-damaged-face-photoshopped.jpg",
            "https://i.kym-cdn.com/entries/icons/original/000/027/269/Screen_Shot_2018-09-28_at_3.14.37_PM.png"
        ]

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    let [num, setNum] = useState(0)
    useInterval(() => {
        // console.log(num === imgArr.length - 1, num, imgArr.length - 1)
        if (num === imgArr.length) {
            setNum(0)
        }
        setNum(num = (num + 1) % imgArr.length)
    }, 1000)


    return (
        <>
            <div className="SplashContainer">
                <div className="centerPiece">

                    <div className="splashLeft">
                        LEFT SIDE
                        <div className="blankPhone">
                            <img className="blank" src="https://st3.depositphotos.com/6064568/17093/v/450/depositphotos_170933392-stock-illustration-vector-modern-smartphone-isolated-mobile.jpg" />

                            <div className="childImage">
                                <img className="MyTurn" src={imgArr[num]} alt="changing image" />
                            </div>
                        </div>
                    </div>

                    <div className="splashRight">
                        RIGHT SIDE
                        <div className="login">
                            <LoginForm authenticated={authenticated}
                                setAuthenticated={setAuthenticated} />

                            <div className="lineBox">
                                <div className="line"></div>
                                <div className="wordSeperator">or</div>
                                <div className="line"></div>
                            </div>

                            <div className="Demo-Login">
                                <form>
                                    <input type="submit" value="DEMO LOGIN" />
                                </form>
                            </div>
                        </div>

                        <div className="signup">
                            <div style={{ marginTop: '15px' }}>
                                <span>Don't have an account? </span>
                                <span onClick={signUpRedirect} style={{ cursor: 'pointer', color: '#0095f6' }}>Sign Up </span>
                            </div>
                        </div>

                        <p style={{ textAlign: 'center' }}> Get the app.</p>
                        <div className="appStore">

                            <div className="wrapper">
                                <button className="app-store">
                                    <span className="fa fa-apple app-store-icon"></span>
                                    <p>Download on the</p>
                                    <h1>App Store</h1>
                                </button>
                                <button className="app-store">
                                    <span className="fa fa-google-wallet app-store-icon"></span>
                                    <p>Available at</p>
                                    <h1>Google</h1>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Splash