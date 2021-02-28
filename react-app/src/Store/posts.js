const SET_POSTS = "posts/SET_POSTS";
const CREATE_POSTS = "posts/CREATE_POSTS";
const REMOVE_POSTS = "posts/REMOVE_POSTS";
const UPDATE_POST = "posts/UPDATE_POST";

const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts,
  };
};

const updatePosts = (post) => {
  return {
    type: UPDATE_POST,
    post,
  };
};

export const createPost = (post) => async dispatch => {
    const { isPrivate, description, imagePath, userId} = post
    const options =
    {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ isPrivate, description, imagePath, userId })
    }
    const res = await fetch('/api/posts/', options)
    return res
}
export const editPost = (id, description, isPrivate) => async dispatch => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(description, isPrivate)
  }
  const newPost = await fetch(`/api/posts/${id}`, options)
}
export const updatePostLikes = (like) => async (dispatch) => {
  const { postId } = like;
  const response = await fetch(`/api/posts/${postId}`);
  if (response.ok) {
    const res = await response.json();
    dispatch(updatePosts(res));
  }
  return response;
};

export const getPosts = () => async (dispatch) => {
  const response = await fetch("/api/posts/");
  if (response.ok) {
    let res = await response.json();
    dispatch(setPosts(res.posts));
  }
  return response;
};

const initialState = {};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      const posts = action.posts.reduce((acc, ele) => {
        acc[ele.id] = ele;
        return acc;
      }, {});
      return { ...state, ...posts };
    case CREATE_POSTS:
      return { ...state, [action.drink.id]: action.drink };
    case REMOVE_POSTS:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    case UPDATE_POST:
      const newPosts = { ...state };
      const index = action.post.id;
      newPosts[index] = action.post;
      return newPosts;
    default:
      return state;
  }
};

export default postsReducer;
