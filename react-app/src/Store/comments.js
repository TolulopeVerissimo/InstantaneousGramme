const SET_COMMENTS = "posts/SET_COMMENTS";
const CREATE_COMMENTS = "posts/CREATE_COMMENTS";
const REMOVE_COMMENTS = "posts/REMOVE_COMMENTS";

const setComments = (comments) => {
  return {
    type: SET_COMMENTS,
    comments,
  };
};

const createComment = (comment) => {
  return {
    type: CREATE_COMMENTS,
    comment
  }
}

export const getPostComments = () => async (dispatch) => {
  const response = await fetch("/api/comments/");
  if (response.ok) {
    let res = await response.json();
    console.log(res)
    dispatch(setComments(res.posts));
  }
  return response;
};

export const createComments = (userId, postId, content) => async (dispatch) =>{
  // const { userId, postId, content } = comment
  console.log(
'sdsdasdadasdasdas')
  alert('route hit')
  const formData = new FormData();
  formData.append('userId', userId)
  formData.append('postId', postId)
  formData.append('content', content)

  const response = await fetch('api/comments/', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  // dispatch(createComment(response.data.comment));
  const comment = response.json()
  dispatch(createComment(comment))
  return comment
  // return response.data.comment

}

const initialState = {};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      const comments = action.comments.reduce((acc, ele) => {
        acc[ele.id] = ele;
        return acc;
      }, {});
      return { ...state, ...comments };
    case CREATE_COMMENTS:
      return { ...state, [action.comment.id]: action.comment };
    case REMOVE_COMMENTS:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;