const SET_POSTS = "posts/SET_POSTS";
const CREATE_POSTS = "posts/CREATE_POSTS";
const REMOVE_POSTS = "posts/REMOVE_POSTS";

const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts,
  };
};

// const createPosts = (posts) => {
//   return {
//     type: CREATE_POSTS,
//     posts,
//   };
// };

// const removePosts = (id) => {
//   return {
//     type: REMOVE_POSTS,
//     id,
//   };
// };

export const getPosts = () => async (dispatch) => {
  const response = await fetch("/api/posts/");
  if (response.ok) {
    let res = await response.json();
    console.log(res.posts);
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
    default:
      return state;
  }
};

export default postsReducer;
