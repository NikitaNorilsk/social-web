import React from 'react'

export default function MyPosts(props) {
    return (
        <div>
            <div className="w-24 h-20 bg-gray-300">
                <button>Add post</button>
                <input type="text" className='bg-gray-100' />
                <button>Remove</button>
            </div>
    </div>
    )
}
