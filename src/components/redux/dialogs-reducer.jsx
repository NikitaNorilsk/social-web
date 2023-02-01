const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                name: 'Антон Горохов',
                message: action.postMessage,
                img: 'https://picsum.photos/200'
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = (text) => ({ type: ADD_POST, postMessage: text })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default dialogsReducer