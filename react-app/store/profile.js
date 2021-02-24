import { fetch } from './csrf';

const SET_PROFILES = 'profileProfile_PROFILES';
const CREATE_PROFILE = 'profiles/CREATE_PROFILE';
const REMOVE_PROFILE = 'profiles/REMOVE_PROFILE';

const setProfiles = (profiles) => {
    return {
        type: SET_PROFILES,
        profiles,
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
export const getProfiles = () => async (dispatch) => {
    const response = await fetch('/api/profiles');
    if (response.ok) {
        dispatch(setProfiles(response.data.profiles));
        return response;
    }
};



export const formProfile = (profile) => async (dispatch) => {
    const { ratings, name, description, ABV, IBU } = profile;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('ratings', ratings);
    formData.append('ABV', ABV);
    formData.append('IBU', IBU);
    const response = await fetch('/api/profiles', {
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    dispatch(createProfile(response.data.profile));
    return response.data.profile;
};

export const updateProfile = ({ id, name, description, ratings, ABV, IBU }) => async (dispatch) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('ratings', ratings);
    formData.append('ABV', ABV);
    formData.append('IBU', IBU);
    const response = await fetch(`/api/profiles/${id}`, {
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
    const response = await fetch(`/api/profiles/${id}`, {
        method: 'DELETE',
    });
    return response.data.message;
};

const initialState = {};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILES:
            const profile = action.profile.reduce((acc, ele) => {
                acc[ele.id] = ele;
                return acc;
            }, {});
            return { ...state, ...profile };
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