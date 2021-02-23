import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import postsReducer from './posts'

const rootReducer = combineReducers({
  posts: postsReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;



const SET_POSTS = 'posts/SET_DRINKS';
const CREATE_POSTS = 'posts/CREATE_DRINK';
const REMOVE_POSTS = 'posts/REMOVE_DRINK';

const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts,
  };
};

const createPosts = (posts) => {
  return {
    type: CREATE_POSTS,
    posts,
  };
};

const removePosts = (id) => {
  return {
    type: REMOVE_POSTS,
    id,
  };
};

export const getPosts = () => async (dispatch) => {
  console.log('sdsadsadsadasdsadasdsad')  
  const response = await fetch('/api/posts');
  if (response.ok) {
    dispatch(setPosts(response.data.posts));
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