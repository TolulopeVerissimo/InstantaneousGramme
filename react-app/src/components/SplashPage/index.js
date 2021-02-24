import React from 'react'
import LoginForm from '../auth/LoginForm.js'
import { useHistory } from 'react-router-dom'
import './splash.css'
import './appstore.css'
import RotatingImage from './RotatingImage'
import AppStore from './AppStore'
function Splash({ authenticated, setAuthenticated }) {
    let history = useHistory()
    const signUpRedirect = () => {
        history.push('/sign-up')
    }
    return (
        <>
            <div className="SplashContainer">
                <div className="centerPiece">

                    <div className="splashLeft">
                        <div className="blankPhone">
                            <RotatingImage />
                        </div>
                    </div>

                    <div className="splashRight">
                        <div className="login">
                            <div className="loginForm__logo" />
                            <LoginForm authenticated={authenticated}
                                setAuthenticated={setAuthenticated} />

                            <div className="lineBox">
                                <div className="wordSeperator">or</div>
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
                        <div className="appstore__wrapper">
                            <AppStore />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Splash
