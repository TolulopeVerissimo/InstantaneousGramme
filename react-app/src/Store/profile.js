
const SET_PROFILE = 'profile/SET_PROFILE';
const CREATE_PROFILE = 'profile/CREATE_PROFILE';
const REMOVE_PROFILE = 'profile/REMOVE_PROFILE';

const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile,
    };
};

const createProfile = (profile) => {
    return {
        type: CREATE_PROFILE,
        profile
    }
}
const removeProfile = (id) => {
    return {
        type: REMOVE_PROFILE,
        id
    }
}
export const getProfile = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/profile`);
    if (response.ok) {
        const profile = await response.json()

        dispatch(setProfile(profile));
        return profile;
    }
};

export const formProfile = (profile) => async (dispatch) => {
    const { name } = profile;
    const formData = new FormData();
    formData.append('name', name);

    const response = await fetch('/api/users/profile', {
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    dispatch(createProfile(response.data.profile));
    return response.data.profile;
};

export const updateProfile = ({ id, name, }) => async (dispatch) => {
    const formData = new FormData();
    formData.append('name', name);

    const response = await fetch(`/api/users/${id}/profile/`, {
        method: 'PUT',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    dispatch(createProfile(response.data.profile));
    return response.data.profile;
};

export const deleteProfile = (id) => async (dispatch) => {
    await dispatch(removeProfile(id));
    const response = await fetch(`/api/users/profile/${id}`, {
        method: 'DELETE',
    });
    return response.data.message;
};

const initialState = {};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return { ...state, ...{ [action.profile.id]: action.profile } };
        case CREATE_PROFILE:
            return { ...state, [action.profile.id]: action.profile };
        case REMOVE_PROFILE:
            const newState = { ...state };
            delete newState[action.id];
            return newState;
        default:
            return state;
    }

};

export default profileReducer;
