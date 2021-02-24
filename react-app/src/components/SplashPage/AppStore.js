import React from 'react'
import './appstore.css'
export default function AppStore(){

  return (
    <div className="appStore__buttonContainer">
      <button className="appStore__button">
          <span className="fa fa-apple appStore__icon"></span>
          <p>Download on the</p>
          <h1>App Store</h1>
      </button>
      <button className="appStore__button">
          <span className="fa fa-google-wallet appStore__icon"></span>
          <p>Available at</p>
          <h1>Google</h1>
      </button>
    </div>
  )

}
