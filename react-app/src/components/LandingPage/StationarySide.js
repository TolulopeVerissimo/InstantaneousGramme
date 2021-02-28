import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { sideItems } from "./sideItems.js";
import { useSelector } from "react-redux";
import "./StationarySide.css";

function StationarySide() {
  const [isLoaded, setIsLoaded] = useState(false);

  let history = useHistory();
  const userId = useSelector((state) => state.session.user.id);

  const profileRedirect = () => {
    history.push(`/profile/${userId}`);
  };

  const allUsers = useSelector((state) => state.users);
  const suggestedUsers = [];

  for (let i = 10; i < 15; i++) {
    suggestedUsers.push(allUsers[i]);
  }

  useEffect(() => {
    if (suggestedUsers[0]) setIsLoaded(true);
  }, [suggestedUsers]);

  console.log(suggestedUsers);

  return (
    <>
      <div className='stationary__container scrollingMain'>
        <h3>Suggestions For You</h3>
        <div className='follow__suggestions'>
          {isLoaded &&
            suggestedUsers.map((user) => (
              <div classname='suggestion__profile' key={user.id}>
                <div className='suggestion__pic'>
                  <img src={user.profilePicture} alt='profile pic' />
                </div>
                <div>
                  <div className='suggestion__username'>
                    <a href={`/profile/${user.id}`}>{user.username}</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div style={{ display: "flex", marginTop: "6rem" }}>
          <nav>
            {sideItems.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  className={item.cName}
                  id='underline'
                  to={item.path}
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ marginRight: "1rem" }}>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* <div className='scrollingMain'>
        <div className='profileContainer'>
          <div onClick={profileRedirect} style={{ cursor: 'pointer' }} className='testCircle'>
            <img src={imgArr[4]} alt='' />
          </div>
          <div onClick={profileRedirect} style={{ cursor: 'pointer' }} className='username'>
            <h5>Demo_McDemerson</h5>
            <h6>Slayer60NoThousand</h6>
          </div>
        </div>
        <div className='suggested'>
          {imgArr &&
            imgArr.map((el, idx) => {
              return (
                <div key={idx}>
                  <div className='circle'>
                    <img src={el} alt="user profile pic"></img>
                  </div>
                  <div className='users'>
                    <h5>Suggested User {idx}</h5>
                    <h6 >
                      {/* {following ? <button title="Unfollow" onClick={() => dispatch(updateFollow())}>Unfollow</button> : <FollowUser />} 
                    </h6>

                  </div>
                </div>
              );
            })}
        </div>
        <div style={{ display: "flex", marginTop: "6rem" }}>
          <nav>
            {sideItems.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  className={item.cName}
                  id='underline'
                  to={item.path}
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ marginRight: "1rem" }}>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div> */}
    </>
  );
}

export default StationarySide;
