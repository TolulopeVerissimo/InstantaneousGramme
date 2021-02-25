const SET_SESSION = 'session/SET_SESSION';
const REMOVE_SESSION='session/REMOVE_SESSION';
const setSession = (user) => {
    return {
        type: SET_SESSION,
        user,
    };
};

export const login = (email, password) => async (dispatch) => {
	const response = await fetch('/api/auth/login', {
		method: 'POST',
		headers: {
				'Content-Type': 'application/json'
			},
		body: JSON.stringify({
			email,
			password
			})
		});
		const user = await response.json()
		dispatch(setSession(user));
		return user;
};

export const restoreUser = () => async dispatch => {
    const res = await fetch('/api/auth')
		const user = await res.json()
    if (res.ok) {
    	dispatch(setSession(user))
    }
	return user;
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
