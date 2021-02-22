import React, { useEffect, useState } from "react";
import { logout } from "../../services/auth";

function ProfileDropdown({ setAuthenticated }) {
  const [showMenu, setShowMenu] = useState(false);

  const logoutNow = () => {
    logout()
    setAuthenticated(false)
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
    <div className="dropdown__container">
      <div className="dropdown">
        {showMenu && (
          <ul className="dropdown__list">
            <li>Profile</li>
            <li onClick={logoutNow}>Logout</li>
          </ul>
        )}
        <div>
          <i className="far fa-user navbar__icon" onClick={openMenu} />
        </div>
      </div>
    </div>

  )
}

export default ProfileDropdown
