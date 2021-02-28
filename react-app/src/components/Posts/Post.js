import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Comments from "../Comments";
import CommentForm from "../Comments/CommentForm";
import commentIcon from "../../images/icons/insta_comment_icon.png";
import blankHeart from "../../images/icons/insta_heart_blank_icon.png";
import redHeart from "../../images/icons/insta_heart_red_icon.png";
import { postLike } from "../../Store/postLike";
import EditPostModal from "../EditPostModal";

const Post = ({ post, user }) => {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

  const likeHandler = () => {
    const like = { userId: user.id, postId: post.id };
    setIsLiked(!isLiked);
    dispatch(postLike(like));
  };

  const likeCount = () => {
    if (post.likesUsers.length === 1) {
      return "other";
    } else {
      return "others";
    }
  };

  //sets isLiked to match redux state
  useEffect(() => {
    if (post) {
      if (post.likesUsers.includes(user.id)) {
        setIsLiked(true);
      } else setIsLiked(false);
    }
  }, [setIsLiked, post, user]);

  return (
    <div key={post.id} className='post__container'>
      <div className='post__header'>
        <div className='post__profile-pic'>
          <img src={post.profilePicture} alt='profile pic' />
        </div>
        <div className='post__user-info'>
          <div className='post__username'>{post.username}</div>
        </div>
        <div className="post__edit-button">

          <EditPostModal post={post} edit={true} />
        </div>
      </div>
      <div className='post__image'>
        <img className='post__img-tag' src={post.imagePath} alt='user_post' />
      </div>
      <div className='post__icons'>
        <div className='post__icon'>
          <img
            src={isLiked ? redHeart : blankHeart}
            alt='post like button'
            onClick={() => likeHandler()}
          />
        </div>
        <div className='post__icon'>
          <img
            src={commentIcon}
            alt='post comment button'
            // opens up comment section?
            onClick={() => console.log("clicked")}
          />
        </div>
        <div className='post__icon'></div>
      </div>
      <div className='comment__container'>
        <p className='commment__likes-count'>
          {"Liked by " + post.likesUsers.length + " " + likeCount()}
        </p>
        <div className='post__title'>
          <p className='post__user'>{post.username}</p>
          <p className='post__description'>{post.description}</p>
        </div>
        <div className='post__comments'>
          {/* pass user in as props to Comments */}
          <Comments post={post} />
        </div>
        <p className='post__createdAt'>{post.date_created}</p>
      </div>
      <div className='post__comment-form'>
        <CommentForm />
      </div>
    </div>
  );
};

export default Post;
