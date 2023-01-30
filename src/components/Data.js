const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export let store = {
    data1: {
        dialogsData: [
            {
                id: 1,
                name: 'Жора Зубенко',
                img: 'https://i.picsum.photos/id/52/200/200.jpg?hmac=CQCpnfTd-I1A6rOsdB9t4Dt3W3nllS8VW1azyfj8phY',
                message: 'Всем здарова, это мой сообщение'
            },
            {
                id: 2,
                name: 'Алексей Ишудченко',
                img: 'https://i.picsum.photos/id/666/200/200.jpg?hmac=keuaJ7nJC5hkHIEyee1b6jdEMbHBZbozYQ9NClt2_lk',
                message: 'Всем здарова, это мой сообщение'
            },
            {
                id: 3,
                name: 'Андрей Щербин',
                img: 'https://i.picsum.photos/id/692/200/200.jpg?hmac=PBAPILlS_qaKe0OMYjT0eXnftJjTGdwOgqCQMUVDGbg',
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
                img: 'https://i.picsum.photos/id/52/200/200.jpg?hmac=CQCpnfTd-I1A6rOsdB9t4Dt3W3nllS8VW1azyfj8phY'
            },
            {
                name: "Алексей Ишудченко",
                message: 'Продолжаем.',
                img: 'https://i.picsum.photos/id/666/200/200.jpg?hmac=keuaJ7nJC5hkHIEyee1b6jdEMbHBZbozYQ9NClt2_lk'
            },
            {
                name: "Андрей Щербин",
                message: 'Всем здравствуйте, это мой первый пост',
                img: 'https://i.picsum.photos/id/692/200/200.jpg?hmac=PBAPILlS_qaKe0OMYjT0eXnftJjTGdwOgqCQMUVDGbg'
            }
        ],
        newPostText: 'Введите текст...',
        newMessageBody: ''
    },
    renderEntireTree() {
        console.log('hi')
    },
    callSubscribe() {
        console.log('Store was change')
    },
    subscribe(observer) {
        this.renderEntireTree = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                name: 'Антон Горохов',
                message: action.postMessage,
                img: 'https://picsum.photos/200'
            }
            this.data1.postsData.push(newPost)
            this.renderEntireTree(this)
            this.callSubscribe(this.data1)
            this.data1.newPostText = ''
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this.data1.newPostText = action.newText
            this.callSubscribe(this.data1)
            this.renderEntireTree(this)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this.data1.newMessageBody = action.body
            this.callSubscribe(this.data1)
            this.renderEntireTree(this)
        } else if (action.type === SEND_MESSAGE){
            let body = this.data1.newMessageBody
            this.data1.newMessageBody = ''
            this.data1.messages.push({id: 6, message: body})
            this.callSubscribe(this.data1)
            this.renderEntireTree(this)
        }
    }
}

export const addPostActionCreator = (text) =>({type: ADD_POST,postMessage: text})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = (text) =>({type: SEND_MESSAGE, body: text})
export const updateNewMassageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})

window.state = store


export default store