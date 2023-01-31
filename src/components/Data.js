import dialogsReducer from "./redux/dialogs-reducer"
import messagesReducer from "./redux/messages-reducer"

export let store = {
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
        this.data1 = messagesReducer(this.data1,action)
        this.data1 = dialogsReducer(this.data1,action)
        this.renderEntireTree(this)
    }
}


window.state = store


export default store