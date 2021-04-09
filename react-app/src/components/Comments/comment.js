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
    const [commentContent,setCommentContent] = useState('')
    const [isUser, setIsUser] = useState(false)
    const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(false);
    const user = useSelector((state) => state.session.user);
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const [readonly, setReadonly]= useState(true)

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
        activeElement = document.querySelector(`#comment-${comment.id} input`)

        let content = activeElement.value;
        console.log(content)
        if (e.key === "Enter") {
          e.preventDefault()
            await dispatch(updateComments(commentId, content));
            activeElement.setAttribute("contenteditable", false);
            activeElement.classList.remove('highlight')
            setReadonly(true)
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
        activeElement = document.querySelector(`#comment-${comment.id} input`)

        setReadonly(false)
        activeElement.classList.add('highlight');
        activeElement.focus()
    }

    useEffect(() => {
        if (!comment || !user) return
        console.log(comment, user)
        if (comment.userId === user.id) setIsUser(true)
        setCommentContent(comment.content)

    },[isUser])

    return (
        <>
            <div className="comments__container menu-container">
                <div className="comments__user-comment">
                    <div className="comment__username" onClick={profileRedirect}>{comment.username}</div>
                    <div
                        id={`comment-${comment.id}`}
                        className="comment__content menu-trigger"
                        onKeyPress={(e)=>handleEnter(e,comment.id)}
                        onClick={() => showDropMenu(comment,user)}
                    >
                        {isUser && (
                            <input
                                className={`comment-input ${isUser ? 'user-comment': 'nonuser-comment'}`}
                                readOnly={readonly}
                                value={commentContent}
                                onChange={(e)=> setCommentContent(e.target.value)}
                            />
                        )}
                        {!isUser && (
                            <div className='comment__content'>{comment.content}</div>
                        )}
                        
                                

                                {comment.userId === user.id && (
                                    <>
                                    <nav
                                        ref={dropdownRef}
                                        className={`menu abs ${isActive ? "active" : "inactive"}`}
                                    >
                                            <ul>
                                                <li>
                                                    <div
                                                        className="drop-item"
                                                        onClick={() => removeComment(comment.id)}
                                                    >
                                                        Delete
                                                    </div>
                                                </li>
                                                <li>
                                                    <div
                                                        className="drop-item"
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
