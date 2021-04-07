import React from "react";
import "./dropdown.css";
import "./comments.css";
import CommentContent from './comment'
import { useSelector } from "react-redux";


const Comments = ({postId}) => {
	const comments = useSelector((state) => {
		return Object.values(state.comments).filter(
			(comment) => comment.postId === postId
		);
	});
	const user = useSelector((state) => state.session.user);

	return (
		<>
			{comments &&
				user &&
				comments.map((comment) => (
					<CommentContent comment={comment} key={comment.id} />

				))}
		</>
	);
};

export default Comments;
