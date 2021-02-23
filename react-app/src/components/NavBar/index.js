import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import LogoutButton from '../auth/LogoutButton';
import ProfileDropdown from './ProfileDropdown'
import './NavBar.css'

const NavBar = ({ setAuthenticated }) => {
  let history = useHistory()
  const homeRouter = () => {
    history.push('/')
  }
  return (
    <nav className="navbar">
      {/* <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </li>
      </ul> */}
      <div className="navbar__logocontainer">
        <img src="/ig-logo.png" className="navbar__logo" alt="Instanttaneous Gramme Logo" />
      </div>
      <div className="navbar__search">
        <i className="fas fa-search navbar__icon" />
        <input type="text" placeholder="Search" className="navbar__searchfield"></input>
      </div>
      <div className="navbar__navicons">
        <i className="fas fa-home navbar__icon" onClick={homeRouter} />
        <i className="far fa-paper-plane navbar__icon" />
        <i className="far fa-compass navbar__icon" />
        <i className="far fa-heart navbar__icon" />
        <ProfileDropdown setAuthenticated={setAuthenticated} />
      </div>
    </nav>
  );
}

export default NavBar;
