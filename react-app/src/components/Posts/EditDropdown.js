import { useEffect, useState } from "react"
import React, { useEffect, useState } from 'react'

export default function EditDropdown() {
  const [showMenu, setShowMenu] = useState(false)
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
          <li onClick={profileRedirect}>
            <i className="far fa-user dropdown__icon" />
            <p className="dropdown__link">Profile</p> </li>
          <li>
            <i className="far fa-bookmark dropdown__icon" />
            <p className="dropdown__link">Saved</p>
          </li>
          <li>
            <i className="fas fa-cog dropdown__icon" />
            <p className="dropdown__link">Settings</p>
          </li>
          <li onClick={logoutNow}>
            <i className="fas fa-sign-out-alt dropdown__icon" />
            <LogoutButton setAuthenticated={setAuthenticated} />
          </li>
        </ul>
      )}
      <div>
        <i className="far fa-user navbar__icon" onClick={openMenu} />
      </div>
    </div>
  )
}
