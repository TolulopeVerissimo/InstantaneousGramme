import React from "react";
import "./dropdown.css";
import "./comments.css";
import CommentContent from './comment'
import { useSelector } from "react-redux";


const Comments = ({postId}) => {
	const comments = useSelector((state) => state.posts[postId].comments)
	const user = useSelector((state) => state.session.user);
	console.log(comments.slice(2))
	return (
		<>
			{comments && comments.length > 2 ? `View all ${comments.length} comments` : null}
			{comments &&
				user &&
				comments.splice(2).map((comment) => (
					<CommentContent comment={comment} key={comment.id} />

				))}
		</>
	);
};

export default Comments;
