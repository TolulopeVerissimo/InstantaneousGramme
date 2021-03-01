import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../Comments";
import CommentForm from "../Comments/CommentForm";
import commentIcon from "../../images/icons/insta_comment_icon.png";
import blankHeart from "../../images/icons/insta_heart_blank_icon.png";
import redHeart from "../../images/icons/insta_heart_red_icon.png";
import { postLike } from "../../Store/postLike";
import './styles/modalClickPost.css'

const ModalPost = ({ post, user }) => {
    const [isLiked, setIsLiked] = useState(false);
    const posts = useSelector(state => state.posts)
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

    // console.log("post modal", posts)
    return (

        <div key={post.id} className='modalPost__container'>
            <div className="modalPost__left">

                <div className='modalPost__image'>
                    <img className='modalPost__img-tag' src={post.imagePath} alt='user_post' />
                </div>

            </div>

            <div className="modalPost__right">

                <div className='modalPost__header'>
                    <div className='modalPost__profile-pic'>
                        <img src={post.profilePicture} alt='profile pic' />
                    </div>
                    <div className='modalPost__user-info'>
                        <div className='modalPost__username'>{post.username}</div>
                    </div>
                </div>


                <div className='comment__container'>


                    <div className='modalPost__title'>
                        <p className='modalPost__user'>{post.username}</p>
                        <p className='modalPost__description'>{post.description}</p>
                    </div>

                    <div className='modalPost__comments'>
                        {/* pass user in as props to Comments */}
                        <Comments post={post} />
                    </div>


                </div>

                <div className='modalPost__icons'>
                    <div className='modalPost__icon'>
                        <img
                            src={isLiked ? redHeart : blankHeart}
                            alt='post like button'
                            onClick={() => likeHandler()}
                        />
                    </div>
                    <div className='modalPost__icon'>
                        <img
                            src={commentIcon}
                            alt='post comment button'
                            // opens up comment section?
                            onClick={() => console.log("clicked")}
                        />
                    </div>
                    <div className='modalPost__icon'></div>

                </div>
                <p className='commment__likes-count'>
                    {"Liked by " + post.likesUsers.length + " " + likeCount()}
                </p>
                <p className='modalPost__createdAt'>{post.date_created}</p>


                <div className='modalPost__comment-form'>
                    <CommentForm />
                </div>

            </div>


        </div>
    );
};

export default ModalPost
