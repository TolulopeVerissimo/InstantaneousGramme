
const SET_COMMENTS = 'COMMENTS/SET_COMMENTS';
const CREATE_COMMENTS = 'COMMENTS/CREATE_COMMENTS';
const REMOVE_COMMENTS = 'COMMENTS/REMOVE_COMMENTS';

const setComments = (comments) => {
    return {
        type: SET_COMMENTS,
        comments,
    };
};

const createComments = (comments) => {
    return {
        type: CREATE_COMMENTS,
        comments
    }
}
const removeComments = (id) => {
    return {
        type: REMOVE_COMMENTS,
        id
    }
}



export const getComments = () => async (dispatch) => {
    const response = await fetch('/api/comments');
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

export const updateCOMMENTS = ({ id, name, }) => async (dispatch) => {
    const formData = new FormData();
    formData.append('name', name);

    const response = await fetch(`/api/users/${id}/COMMENTS/`, {
        method: 'PUT',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    dispatch(createComments(response.data.COMMENTS));
    return response.data.COMMENTS;
};

export const deleteComments = (id) => async (dispatch) => {
    await dispatch(removeComments(id));
    const response = await fetch(`/api/users/COMMENTS/${id}`, {
        method: 'DELETE',
    });
    return response.data.message;
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
        case REMOVE_COMMENTS:
            const newState = { ...state };
            delete newState[action.id];
            return newState;
        default:
            return state;
    }

};

export default commentsReducer;
