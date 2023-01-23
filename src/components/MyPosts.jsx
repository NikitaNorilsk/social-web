import React from 'react'
import { renderEntireTree } from '../render'
import { updateNewPostText } from './Data'

export default function MyPosts(props) {

    let newPostElement = React.createRef()

    const addNew = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        updateNewPostText('')
    } 

    let onPostChange = () => {
        let text = newPostElement.current.value
        updateNewPostText(text)
    }

    return (
        <div>
            <div className="w-24 h-20 bg-gray-300">
                <button>Remove</button>
                <input
                value={props.newPostText}
                ref={newPostElement}
                onChange={onPostChange}
                type="text"
                className='bg-gray-100' />
                <button onClick={addNew}>Add post</button>
            </div>
        </div>
    )
}
