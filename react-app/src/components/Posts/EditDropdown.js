import React, { useEffect, useState } from 'react'

export default function EditDropdown() {
  const [showMenu, setShowMenu] = useState(false)

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
    <div className="editpost__dropdown">
      {showMenu && (
        <ul className="dropdown__list">
            <li>
              <a href="">Edit Post</a>
              </li>
            <li>
              <a href="">Delete Post</a>
            </li>
        </ul>
      )}
      <div>
      <i className="fas fa-ellipsis-h" onClick={openMenu} />
      </div>
    </div>
  )
}
