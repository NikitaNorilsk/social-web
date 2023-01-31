const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const dialogsReducer = (state, action) => {

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

export const addPostActionCreator = (text) =>({type: ADD_POST,postMessage: text})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default dialogsReducer