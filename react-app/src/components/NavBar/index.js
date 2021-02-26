import React from 'react';
import { useHistory } from 'react-router-dom';
import NewPostModal from '../NewPostModal'
import ProfileDropdown from './ProfileDropdown'
import './NavBar.css'

const NavBar = ({ setAuthenticated }) => {
  let history = useHistory()
  const homeRouter = () => {
    history.push('/')
  }
  const exploreRouter = () => {
    history.push('/explore')
  }
  return (
    <nav className="navbar">
      <div className="navbar__logocontainer">
        <h1 className="navbar__logo" style={{ cursor: 'pointer' }} onClick={homeRouter}>Instantaneous-Gramme</h1>
      </div>
      <div className="navbar__search">
        <i className="fas fa-search navbar__icon" />
        <input type="text" placeholder="Search" className="navbar__searchfield"></input>
      </div>
      <div className="navbar__navicons">
        <NewPostModal />
        <i className="fas fa-home navbar__icon" onClick={homeRouter} />
        <i className="far fa-paper-plane navbar__icon" />
        <i className="far fa-compass navbar__icon" onClick={exploreRouter} />
        <i className="far fa-heart navbar__icon" />
        <ProfileDropdown setAuthenticated={setAuthenticated} />
      </div>
    </nav>
  );
}

export default NavBar;
