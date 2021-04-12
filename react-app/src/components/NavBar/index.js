import React from "react";
import { useHistory } from "react-router-dom";
import PostModal from "../PostModal";
import SearchBar from "./SearchBar";
import ProfileDropdown from "./ProfileDropdown";
import "./NavBar.css";

const NavBar = ({ setAuthenticated }) => {
  let history = useHistory();
  const homeRouter = () => {
    history.push('/')
  }
  const exploreRouter = () => {
    history.push('/explore')
  }
  const DMRouter = () => {
    history.push('/DM')
  }

  return (
    <nav className='navbar'>
      <div className='navbar__logocontainer'>
        <h1
          className='navbar__logo'
          style={{ cursor: "pointer" }}
          onClick={homeRouter}
        >
          Instantaneous-Gramme
        </h1>
      </div>
      <SearchBar />
      <div className='navbar__navicons'>
        <PostModal edit={false} />
        <i className='fas fa-home navbar__icon' onClick={homeRouter} />
        {/* <i className="fas fa-inbox navbar__icon" onClick={DMRouter} /> */}
        <i className='far fa-heart navbar__icon' />
        <ProfileDropdown setAuthenticated={setAuthenticated} />
      </div>
    </nav>
  );
};

export default NavBar;
