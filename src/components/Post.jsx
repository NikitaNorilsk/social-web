import React from 'react'

export default function Post(props) {
    return (
        <div className='flex mt-4 bg-gray-100'>
            <img className='w-20 h-20 rounded-full' src={props.img} alt="" />
            <div className='pl-4'>
                <h1 className='text-xl pb-4'>{props.name}</h1>
                <p className='text-lg'>{props.message}</p>
            </div>
        </div>
    )
}
