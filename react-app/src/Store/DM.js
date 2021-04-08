const LOAD_MESSAGES = '/messages/LOAD_MESSAGES';
const CREATE_MESSAGE = '/messages/CREATE_MESSAGE';
const REMOVE_MESSAGE = '/messages/REMOVE_MESSAGE';

const load = (messages) => ({
    type: LOAD_MESSAGES,
    messages,
});

const create = (message) => ({
    type: CREATE_MESSAGE,
    message,
});

const remove = (messageId) => ({
    type: REMOVE_MESSAGE,
    messageId,
});


export const getMessages = () => async (dispatch) => {
    const res = await fetch('/api/DM');
    const json = await res.json();
    if (res.ok) {
        dispatch(load(json.messages));
    }
};


export const createChat = (newMessage) => async (dispatch) => {
    const { senderId, receiverId, message } = newMessage;
    console.log(senderId, receiverId)

    const res = await fetch(`/api/DM`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            senderId,
            receiverId,
            message,
        }),
    });
    const returnedMessage = await res.json();

    if (!returnedMessage.errors) {
        dispatch(create(returnedMessage));
        return returnedMessage;
    } else {
        const errors = returnedMessage;
        return errors;
    }
};


export const deleteMessage = (messageId) => async (dispatch) => {
    const res = await fetch(`/api/DM/${messageId}`, {
        method: 'DELETE',
    });
    if (res.ok) {
        dispatch(remove(messageId));
    }
};


const initState = {
    1: {
        senderId: 1,
        receiverId: 2,
        message: '',
        timestamp: '',
        sender: {
            firstname: '',
        },
        receiver: {
            firstname: '',
        },
    },
};

const DMReducer = (state = null, action) => {
    const newState = { ...state };

    switch (action.type) {
        case LOAD_MESSAGES:
            for (let message of action.messages) {
                newState[message.id] = message;
            }
            return newState;
        case CREATE_MESSAGE:
            newState[action.message.id] = action.message;
            return newState;
        case REMOVE_MESSAGE:
            delete newState[Number(action.messageId)];
            return newState;
        default:
            return newState;
    }
};

export default DMReducer;