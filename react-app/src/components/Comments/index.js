import React, {useState,useEffect} from "react";
import "./comments.css";



const Comments = (props) => {
  const [comments, setComments] = useState([]);
  console.log(props.postId);
  const [isLoaded,setIsLoaded] = useState(false)
  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/comments/${props.postId}`);
      const comments = await response.json();
      console.log("sdsdsd", comments.comments);
      setComments(comments);
      if(comments) setIsLoaded(true)
    })();
  }, [comments]);

  return (
    <>
      {isLoaded &&
        comments.comments.map((comments) => (
          <div className='comments__container'>
            {/* if( comments.length > 2) collapse content  
                  "View all 152 comments" */}
            <div className='comments__user-comment'>
              <div className='comment__username'>{comments.username}</div>
              <div className='comment__content'>{comments.content}</div>
            </div>
          </div>


        ))}
        
        </>  
    );
      
      
      
      

};

export default Comments;
