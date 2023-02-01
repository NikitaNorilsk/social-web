const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    data1: {
        dialogsData: [
            {
                id: 1,
                name: 'Жора Зубенко',
                img: 'https://picsum.photos/200/300',
                message: 'Всем здарова, это мой сообщение'
            },
            {
                id: 2,
                name: 'Алексей Ишудченко',
                img: 'https://picsum.photos/200',
                message: 'Всем здарова, это мой сообщение'
            },
            {
                id: 3,
                name: 'Андрей Щербин',
                img: 'https://picsum.photos/seed/picsum/200/300',
                message: 'Всем здарова, это мой сообщение'
            },
        ],
        messages: [
            {id: 1, message: 'Zdarova'},
            {id: 2, message: 'Zdarova bcem'},
            {id: 3, message: 'Zdarova rebyata'},
            {id: 4, message: 'Zdarova narod'},
            {id: 5, message: 'Zdarova zavod'}
        ],
        postsData: [
            {
                name: "Жора Зубенко",
                message: 'Всем здравствуйте, это мой первый пост',
                img: 'https://picsum.photos/seed/picsum/200/300'
            },
            {
                name: "Алексей Ишудченко",
                message: 'Продолжаем.',
                img: 'https://picsum.photos/200'
            },
            {
                name: "Андрей Щербин",
                message: 'Всем здравствуйте, это мой первый пост',
                img: 'https://picsum.photos/200/300'
            }
        ],
        newPostText: 'Введите текст...',
        newMessageBody: ''
    }
}

const messagesReducer = (state = initialState, action) => {

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