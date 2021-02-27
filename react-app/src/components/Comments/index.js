import React, {useState,useEffect} from "react";
import "./.css";



const Comments = (props) => {
  const [, setComments] = useState([]);
  console.log(props.postId);
  const [isLoaded,setIsLoaded] = useState(false)
  useEffect(() => {
    (async () => {
      const response = await fetch(`/api//${props.postId}`);
      const  = await response.json();
      console.log("sdsdsd", .);
      setComments();
      if() setIsLoaded(true)
    })();
  }, []);

  return (
    <>
      {isLoaded &&
        ..map(() => (
          <div className='comments__container'>
            {/* if( .length > 2) collapse content  
                  "View all 152 " */}
            <div className='comments__user-comment'>
              <div className='comment__username'>{.username}</div>
              <div className='comment__content'>{.content}</div>
            </div>
          </div>


        ))}
        
        </>  
    );
      
      
      
      

};

export default Comments;
