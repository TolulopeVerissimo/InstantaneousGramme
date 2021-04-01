import React, { useState, useEffect, useRef } from "react";
import "./dropdown.css";
import "./comments.css";
import CommentContent from './comment'
import { useSelector } from "react-redux";


const Comments = (props) => {
  const [isLiked, setIsLiked] = useState(false);



	const comments = useSelector((state) => {
		return Object.values(state.comments).filter(
			(comment) => comment.postId === props.postId
		);
	});
	const user = useSelector((state) => state.session.user);

	return (
		<>
			{comments &&
				user &&
				comments.map((comment) => (
					<CommentContent comment={comment} />

				))}
		</>
	);
};

export default Comments;
