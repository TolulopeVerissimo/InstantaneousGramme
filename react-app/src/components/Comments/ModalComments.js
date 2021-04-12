import React, { useState } from "react";
import "./dropdown.css";
import "./comments.css";
import CommentContent from "./comment"
import { useSelector } from "react-redux";


const ModalComments = ({postId}) => {
	const comments = useSelector((state) => state.posts[postId].comments)
	const user = useSelector((state) => state.session.user);
	const post = useSelector((state) => state.posts[postId])
	const [showModal, setShowModal] = useState(false)

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

export default ModalComments;
