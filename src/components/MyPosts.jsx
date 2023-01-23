import React from 'react'
import { renderEntireTree } from '../render'

export default function MyPosts(props) {

    let newPostElement = React.createRef()

    const addNew = () => {
        console.log(props)
        props.addPost(newPostElement.current.value)
    } 

    return (
        <div>
            <div className="w-24 h-20 bg-gray-300">
                <button>Remove</button>
                <input ref={newPostElement} type="text" className='bg-gray-100' />
                <button onClick={addNew}>Add post</button>
            </div>
        </div>
    )
}
