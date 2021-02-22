import React, { useEffect, useState } from "react";

function ProfileDropdown() {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  }
  useEffect(()=> {
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
          <li>Logout</li>
        </ul>
      )}
      <div>
        <i className="far fa-user navbar__icon" onClick={openMenu}/>
      </div>
      </div>
    </div>

  )
}

export default ProfileDropdown
