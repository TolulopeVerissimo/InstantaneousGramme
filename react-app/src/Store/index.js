import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import commentsReducer from './comments'
import postsReducer from "./posts";
import usersReducer from "./user";
import profileReducer from "./profile";
import followsReducer from "./follow";
import sessionReducer from "./session";
import DMReducer from "./DM";

const rootReducer = combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
  users: usersReducer,
  profiles: profileReducer,
  follows: followsReducer,
  session: sessionReducer,
  message: DMReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
