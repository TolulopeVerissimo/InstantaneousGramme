import React, { useState, useEffect, useRef } from "react";
import "./dropdown.css";
import "./comments.css";
import { useSelector, useDispatch } from "react-redux";
import { useDetectOutsideClick } from "../../services/detectOutsideClick";
import { editComment, deleteComment } from "../../Store/comments";

const Comments = (props) => {
  const dispatch = useDispatch();
  let activeElement

	const comments = useSelector((state) => {
		return Object.values(state.comments).filter(
			(comment) => comment.postId === props.postId
		);
	});
	const user = useSelector((state) => state.session.user);

  const handleEnter = (e) => {

    if (e.key === "Enter") alert('enter')
  }
  
  const showDropMenu = (comment, user) => {
    if (comment.userId !== user.id) return
    // let droppedElement = document.querySelector(`#comment-${comment.id}`)
    activeElement = document.querySelector(`#comment-${comment.id}`)

    // droppedElement.classList.add('active')
    activeElement.classList.add('active')
    console.log(activeElement)
    // console.log(comment,droppedElement)
    // setIsActive(!isActive);
  }
  // const dropdownRef = useRef(null);
  // const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

	const removeComment = async (commentId) => {
		await dispatch(deleteComment(commentId));
	};

	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		if (comments && user) setIsLoaded(true);
	}, [comments, user]);

	const editActionHandler = (e, comment) => {
    // console.log(comment)
    // let editableElement = document.getElementById(`comment-${comment.id}`)
    // console.log(editableElement)
    // editableElement.setAttribute("contenteditable", true);
    // editableElement.focus()
    activeElement.setAttribute("contenteditable", true);
    activeElement.classList.add('highlight')
    activeElement.focus()
	};
	return (
		<>
			{comments &&
				user &&
				comments.map((comment) => (
					<div className="comments__container menu-container">
						<div className="comments__user-comment">
							<div className="comment__username">{comment.username}</div>
              <div
                id={`comment-${comment.id}`}
								className="comment__content menu-trigger"
								suppressContentEditableWarning="true"
                contentEditable='false'
                onKeyPress={handleEnter}
								onClick={() => showDropMenu(comment,user)}
							>
								{comment.content}
								{
									comment.userId === user.id &&  (
										<>
											<nav
												// ref={dropdownRef}
                        className={`menu abs 
                       `
                      //  ${
                      //   isActive ? "active" : "inactive"
                      // }
                      }
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
									)
									//   <nav
									//   ref={dropdownRef}
									//   className={`menu abs ${isActive ? "active" : "inactive"}`}
									// >
									//   <ul>
									//     <li>
									//       <div className=''  suppressContentEditableWarning='true' contentEditable='false' onClick={()=>removeComment(comment.id)}  >Delete</div>
									//     </li>
									//     <li>
									//       <div className='' suppressContentEditableWarning='true' contentEditable='false'  onClick={(e)=>editActionHandler(e)} >Edit</div>
									//     </li>
									//   </ul>
									// </nav>
								}
							</div>
						</div>
					</div>
				))}
		</>
	);
};

export default Comments;
