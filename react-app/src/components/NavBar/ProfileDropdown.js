import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import { logout } from "../../services/auth";

function ProfileDropdown({ setAuthenticated }) {
  const [showMenu, setShowMenu] = useState(false);
  let history = useHistory()
  const logoutNow = () => {
    logout()
    setAuthenticated(false)
  }

  const profileRedirect = () => {
    history.push('/profile')
  }

  const openMenu = () => {
    setShowMenu(true);
  }
  useEffect(() => {
    if (!showMenu) return
    const closeMenu = () => {
      setShowMenu(false);
    }
    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu])


  return (
    <div className="dropdown">
      {showMenu && (
        <ul className="dropdown__list">
          <li onClick={profileRedirect}>Profile </li>
          <li onClick={logoutNow}>Logout</li>
        </ul>
      )}
      <div>
        <i className="far fa-user navbar__icon" onClick={openMenu} />
      </div>
    </div>
  )
}

export default ProfileDropdown
