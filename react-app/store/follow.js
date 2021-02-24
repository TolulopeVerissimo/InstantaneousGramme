import { fetch } from './csrf';

const SET_FOLLOWS = 'follows/SET_FOLLOWS';
const CREATE_FOLLOW = 'follows/CREATE_FOLLOW';
const REMOVE_FOLLOW = 'follows/REMOVE_FOLLOW';

const setFollows = (follows) => {
    return {
        type: SET_FOLLOWS,
        follows,
    };
};

const createFollow = (follow) => {
    return {
        type: CREATE_FOLLOW,
        follow
    }
}
const removeFollow = (id) => {
    return {
        type: REMOVE_FOLLOW,
        id
    }
}
export const getFollows = () => async (dispatch) => {
    const response = await fetch('/api/follows');
    if (response.ok) {
        dispatch(setFollows(response.data.follows));
        return response;
    }
};



export const formFollow = (follow) => async (dispatch) => {
    const { follower_id, followed_id } = follow;
    const formData = new FormData();
    formData.append('follower_id', follower_id);
    formData.append('followed_id', followed_id);


    const response = await fetch('/api/follows', {
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    dispatch(createFollow(response.data.follow));
    return response.data.follow;
};

export const updateFollow = ({ id, follower_id, followed_id }) => async (dispatch) => {
    const formData = new FormData();
    formData.append('follower_id', follower_id);
    formData.append('followed_id', followed_id);

    const response = await fetch(`/api/follows/${id}`, {
        method: 'PUT',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    dispatch(createFollow(response.data.follow));
    return response.data.follow;
};

export const deleteFollow = (id) => async (dispatch) => {
    await dispatch(removeFollow(id));
    const response = await fetch(`/api/follows/${id}`, {
        method: 'DELETE',
    });
    return response.data.message;
};

const initialState = {};

const followsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FOLLOWS:
            const follows = action.follows.reduce((acc, ele) => {
                acc[ele.id] = ele;
                return acc;
            }, {});
            return { ...state, ...follows };
        case CREATE_FOLLOW:
            return { ...state, [action.follow.id]: action.follow };
        case REMOVE_FOLLOW:
            const newState = { ...state };
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default followsReducer;