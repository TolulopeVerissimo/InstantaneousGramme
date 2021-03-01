import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sideItems } from "./sideItems.js";
import { useSelector } from "react-redux";
import "./StationarySide.css";

function StationarySide() {
  const [isLoaded, setIsLoaded] = useState(false);

  // const userId = useSelector((state) => state.session.user.id);

  const allUsers = useSelector((state) => state.users);
  const suggestedUsers = [];

  for (let i = 10; i < 15; i++) {
    suggestedUsers.push(allUsers[i]);
  }

  useEffect(() => {
    if (suggestedUsers[0]) setIsLoaded(true);
  }, [suggestedUsers]);
  return (
    <>
      <div className='stationary__container scrollingMain'>
        <h3>Suggestions For You</h3>
        <div className='follow__suggestions'>
          {isLoaded &&
            suggestedUsers.map((user) => (
              <>
                <div className='suggestion__profile' key={user.id}>
                  <div className='suggestion__pic'>
                    <img src={user.profilePicture} alt='profile pic' />
                  </div>
                  <div>
                    <div className='suggestion__username'>
                      <a href={`/profile/${user.id}`}>{user.username}</a>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
        <div className='side__items'>
          <nav>
            <ul>
              {sideItems.map((item, idx) => {
                return (
                  <li>
                    <div key={idx} className='side__item item-text'>
                      <a href={item.path}>{item.title}</a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default StationarySide;
