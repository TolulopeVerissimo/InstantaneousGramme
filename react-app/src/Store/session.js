const SET_SESSION = 'session/SET_SESSION';
const setSession = (user) => {
    return {
        type: SET_SESSION,
        user,
    };
};

export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const response = await fetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        }),
    });
    dispatch(setSession(response.data.user));
    return response;
};

export const demo = () => async (dispatch) => {
    try {
        const response = await fetch('/api/session/demo', {
            method: 'POST',
            body: JSON.stringify({ credential: 'demo', password: 'demo' }),
        });
        dispatch(setSession(response.data.user));
        return response;
    } catch (err) {
        return err;
    }
};

const initialState = {
    user: null,
};

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SESSION:
            return { ...state, user: action.user }
        case REMOVE_SESSION:
            return { ...state, user: null };
        default:
            return state;
    }
};

export default sessionReducer;