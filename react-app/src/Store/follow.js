const SET_FOLLOWS = 'follows/SET_FOLLOWS';
const CREATE_FOLLOW = 'follows/CREATE_FOLLOW';
const REMOVE_FOLLOW = 'follows/REMOVE_FOLLOW';

const setFollows = (follows) => {
    return {
        type: SET_FOLLOWS,
        follows,
    };
};
const createFollow = (follows, followedId) => {
    return {
        type: CREATE_FOLLOW,
        follows,
        followedId
    }
}
const removeFollow = (followerId, followedId) => {
    return {
        type: REMOVE_FOLLOW,
        followerId,
        followedId
    }
}
export const getFollowers = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/follows`);
    if (response.ok) {
        const follows = await response.json()
        dispatch(setFollows(follows));
    }
};

export const followUser = (followerId, followedId) => async dispatch  => {
    const res = await fetch(`/api/users/${followedId}/follow`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify({ follower_id: followerId })
    })
    if(res.ok) {
        const follows = await res.json()
        dispatch(createFollow(follows, followedId))
    }
    }


export const unfollowUser = (followerId, followedId) => async (dispatch) => {
    const res = await fetch(`/api/users/${followedId}/follow`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify({ follower_id: followerId })
    })
    dispatch(removeFollow(followerId, followedId));
    const follow = await res.json()
    return follow;
};

const initialState = {};

const followsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FOLLOWS:
            return {...state, ...action.follows}
        case CREATE_FOLLOW:
            const newState = {...state}
            newState[action.followedId] = action.follows
            return newState
        case REMOVE_FOLLOW:
            newState = { ...state };
            delete newState[action.followedId][action.followedId];
            return newState;
        default:
            return state;
    }
};

export default followsReducer;
