import React from "react";
import "./comments.css";

const Comments = (post) => {
  return (
    <div className='comments__container'>
      {/* if( comments.length > 2) collapse content  
            "View all 152 comments" */}
      <div className='comments__user-comment'>
        <div className='comment__username'>comment_username</div>
        <div className='comment__content'>body of the comment</div>
      </div>
    </div>
  );
};

export default Comments;
