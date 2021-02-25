
const SET_USERS = 'users/USERS';
const CREATE_USER = 'users/CREATE_USER';

const setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    };
};
const createUsers = (user) => {
    return {
        type: CREATE_USER,
        user
    }
}

export const getUsers = () => async (dispatch) => {
    const response = await fetch('/api/users');

    console.log(response)
    if (response.ok) {

        dispatch(setUsers(response.data.users));
        return response;
    }
};

export const formUsers = (user) => async (dispatch) => {
    const { name, email, phoneNumber, username, biography, profilePicture } = user;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('username', username);
    formData.append('biography', biography);
    formData.append('profilePicture', profilePicture);

    const response = await fetch('/api/users', {
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    dispatch(createUsers(response.data.user));
    return response.data.user;
};

export const updateUser = ({ id, name, email, phoneNumber, username, biography, profilePicture }) => async (dispatch) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('username', username);
    formData.append('biography', biography);
    formData.append('profilePicture', profilePicture);
    const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    dispatch(createUsers(response.data.user));
    return response.data.user;
};

const initialState = {};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            console.log("ACTION", action.users)
            const users = action.users.reduce((acc, ele) => {
                acc[ele.id] = ele;
                return acc;
            }, {});
            return { ...state, ...users };
        default:
            return state;
    }
};

export default usersReducer