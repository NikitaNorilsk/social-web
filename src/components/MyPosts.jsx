import React from 'react'

export default function MyPosts(props) {

    let newPostElement = React.createRef()
    const addNew = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        props.updateNewPostText('')
    } 

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
        console.log(text)
    }

    return (
        <div>
            <div className="w-24 h-20 bg-gray-300">
                <button>Remove</button>
                <input
                value={props.data.newPostText}
                ref={newPostElement}
                onChange={onPostChange}
                type="text"
                className='bg-gray-100' />
                <button onClick={addNew}>Add post</button>
            </div>
        </div>
    )
}
