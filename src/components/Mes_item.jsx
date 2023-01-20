import React from 'react'

export default function Mes_item(props) {
    return (
        <div>
            <div className='flex mt-4 bg-gray-100 p-2'>
                <img className='w-12 h-12 my-auto ml-2 rounded-full' src={props.img} alt="" />
                <div className='pl-4 my-auto'>
                    <h1 className='text-m'>{props.name}</h1>
                </div>
            </div>
        </div>
    )
}

