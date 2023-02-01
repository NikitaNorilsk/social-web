import { combineReducers, legacy_createStore as createStore } from "redux"
import dialogsReducer from "./dialogs-reducer"
import messagesReducer from "./messages-reducer"

let reducers = combineReducers({
    messagesReducer,
    dialogsReducer
})

let storeRedux = createStore(reducers)


export default storeRedux