import React, {useState,useRef,useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'
import {useDetectOutsideClick} from "../../services/detectOutsideClick"
import { updateComments, deleteComment } from "../../Store/comments";
import blankHeart from "../../images/icons/insta_heart_blank_icon.png";
import redHeart from "../../images/icons/insta_heart_red_icon.png";
import { commentLike } from '../../Store/commentLike'


export default function CommentContent({ comment }) {
    const history = useHistory()
    const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(false);
    const user = useSelector((state) => state.session.user);
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

    const profileRedirect = () => {
        history.push(`profile/${comment.userId}`)

    }


    const likeHandler = () => {
        const like = { userId: user.id, commentId: comment.id };
        setIsLiked(!isLiked);
        dispatch(commentLike(like));
      };
      let activeElement


    const handleEnter = async(e,commentId) => {
        activeElement = document.querySelector(`#comment-${comment.id}`)

        let content = activeElement.firstChild.nodeValue
        if (e.key === "Enter") {
          e.preventDefault()
            await dispatch(updateComments(commentId, content));
            activeElement.setAttribute("contenteditable", false);
            activeElement.classList.remove('highlight')
        }
      }

      const showDropMenu = (comment, user) => {
          if (comment.userId !== user.id) return
        setIsActive(!isActive);
        activeElement = document.querySelector(`#comment-${comment.id}`)
      }
      const removeComment = async (commentId) => {
		await dispatch(deleteComment(commentId));
	};


    const editActionHandler = (e, comment) => {
        activeElement = document.querySelector(`#comment-${comment.id}`)

        activeElement.setAttribute("contenteditable", true);
        activeElement.classList.add('highlight');
        activeElement.focus()
    }

    return (
        <>
            <div className="comments__container menu-container">
                <div className="comments__user-comment">
                    <div className="comment__username" onClick={profileRedirect}>{comment.username}</div>
                    <div
                        id={`comment-${comment.id}`}
                        className="comment__content menu-trigger"
                        suppressContentEditableWarning="true"
                        contentEditable='false'
                        onKeyPress={(e)=>handleEnter(e,comment.id)}
                        onClick={() => showDropMenu(comment,user)}
                                >
                                {comment.content}

                                {comment.userId === user.id && (
                                    <>
                                    <nav
                                        ref={dropdownRef}
                                        className={`menu abs ${isActive ? "active" : "inactive"}`}
                                    >
                                            <ul>
                                                <li>
                                                    <div
                                                        className=""
                                                        suppressContentEditableWarning="true"
                                                        contentEditable="false"
                                                        onClick={() => removeComment(comment.id)}
                                                    >
                                                        Delete
                                                    </div>
                                                </li>
                                                <li>
                                                    <div
                                                        className=""
                                                        suppressContentEditableWarning="true"
                                                        contentEditable="false"
                                                        onClick={(e) => editActionHandler(e,comment)}
                                                    >
                                                        Edit
                                                    </div>
                                                </li>
                                            </ul>
                                        </nav>
                                    </>
                                )}
                        </div>
                </div>
                <div className='commentLikeContainer'>
                    <img
                        className='commentLike-icon'
                        src={isLiked ? redHeart : blankHeart}
                        alt='post like button'
                        onClick={() => likeHandler()}
                        />
                </div>
            </div>
        </>
    )






}
