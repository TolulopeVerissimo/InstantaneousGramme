
const SET_COMMENTS = 'COMMENTS/SET_COMMENTS';
const CREATE_COMMENTS = 'COMMENTS/CREATE_COMMENTS';
const REMOVE_COMMENT = 'COMMENTS/REMOVE_COMMENT';
const UPDATE_COMMENT = "posts/UPDATE_COMMENT";

const setComments = (comments) => {
    return {
        type: SET_COMMENTS,
        comments,
    };
};

const updateComment = (comment) => {
    return {
      type: UPDATE_COMMENT,
      comment,
    };
  };

const createComments = (comments) => {
    return {
        type: CREATE_COMMENTS,
        comments
    }
}
const removeComment = (id) => {
    return {
        type: REMOVE_COMMENT,
        id
    }
}



export const getComments = () => async (dispatch) => {
    const response = await fetch('/api/comments/');
    if (response.ok) {
        const res = await response.json()
        dispatch(setComments(res.comments));
        return response;
    }
};

export const createComment = (userId, postId, content) => async (dispatch) => {
    const options =
    {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ userId, postId, content })
    }
    const res = await fetch('/api/comments/', options)
    if (!res.ok) alert('issue')
    const data = await res.json()

    return dispatch(setComments([data]));

};

export const updateComments = ({userId, postId, content}) => async (dispatch) => {

    const options =
    {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ userId, postId, content })
    }
    const res = await fetch('/api/comments/', options)
    if (!res.ok) alert('issue')
    const data = await res.json()
    dispatch(setComments[data])
};

export const deleteComment = (id) => async (dispatch) => {
    await dispatch(removeComment(id));
    const res = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
    });
    if (res.ok) {
        
    }
};

const initialState = {};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS:
            const comments = action.comments.reduce((acc, ele) => {
                acc[ele.id] = ele;
                return acc
            }, {});;
            return { ...state, ...comments };

        case CREATE_COMMENTS:
            return { ...state, [action.comments.id]: action.comments };
        case REMOVE_COMMENT:
            const newState = { ...state };
            delete newState[action.id];
            return newState;
        default:
            return state;
    }

};

export default commentsReducer;
