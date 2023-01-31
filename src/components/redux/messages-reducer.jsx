const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const messagesReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({ id: 6, message: body })
        default:
            return state
    }
}

export const sendMessageCreator = (text) => ({ type: SEND_MESSAGE, body: text })
export const updateNewMassageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text })


export default messagesReducer