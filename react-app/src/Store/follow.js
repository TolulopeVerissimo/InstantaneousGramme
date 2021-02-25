const SET_FOLLOWS = 'follows/SET_FOLLOWS';
const CREATE_FOLLOW = 'follows/CREATE_FOLLOW';
const REMOVE_FOLLOW = 'follows/REMOVE_FOLLOW';

const setFollows = (follows, id = null) => {
    return {
        type: SET_FOLLOWS,
        follows,
        id
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
export const getFollows = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/follows`);
    if (response.ok) {
        const follows = await response.json()
        dispatch(setFollows(follows, id));
        return follows;
    }
};



export const formFollow = (followers, id) => async (dispatch) => {
    const { follower_id, followed_id } = followers;
    const formData = new FormData();
    formData.append('follower_id', follower_id);
    formData.append('followed_id', followed_id);


    const response = await fetch(`/api/users/${id}/follow`, {
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    const follow = await response.json()
    dispatch(createFollow(follow));
    return follow;
};

export const updateFollow = ({ id, follower_id, followed_id }) => async (dispatch) => {
    const formData = new FormData();
    formData.append('follower_id', follower_id);
    formData.append('followed_id', followed_id);

    const response = await fetch(`/api/users/${id}/follow`, {
        method: 'PUT',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    const follow = await response.json()
    dispatch(createFollow(follow));
    return follow;
};

export const deleteFollow = (id) => async (dispatch) => {
    await dispatch(removeFollow(id));
    const response = await fetch(`/api/users/${id}/follow`, {
        method: 'DELETE',
    });
    const follow = await response.json()
    return follow;
};

const initialState = {};

const followsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FOLLOWS:
            return { ...state, ...{ [action.id]: action.follows } };
        case CREATE_FOLLOW:
            return { ...state, ...{ [action.follow.id]: action.follow } };
        case REMOVE_FOLLOW:
            const newState = { ...state };
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default followsReducer;
