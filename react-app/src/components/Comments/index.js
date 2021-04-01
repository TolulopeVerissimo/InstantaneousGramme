
import React, { useState, useEffect, useRef } from "react";
import './dropdown.css'
import "./comments.css";
import { useSelector } from 'react-redux'
import {useDetectOutsideClick} from "../../services/detectOutsideClick"



const Comments = (props) => {



  const comments = useSelector((state) => {
    return Object.values(state.comments).filter(
      (comment) => comment.postId === props.postId
    );
  });
  const user = useSelector((state) => state.session.user);

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);



  const [isLoaded,setIsLoaded] = useState(false)
  useEffect(() => {
    if (comments && user) setIsLoaded(true);
  }, [comments, user]);
  const showDelete = () => {

  }
  return (
    <>
      {comments &&
        user &&
        comments.map((comment) => (
          <div className='comments__container menu-container'>
            <div className='comments__user-comment'>
              <div className='comment__username'>{comment.username}</div>
              <div className='comment__content menu-trigger' onClick={onClick}>{comment.content} 
              <nav
            ref={dropdownRef}
            className={`menu abs ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <div className=''  >Delete</div>
              </li>
              <li>
                <div className='' >Edit</div>
              </li>
            </ul>
          </nav>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Comments;
