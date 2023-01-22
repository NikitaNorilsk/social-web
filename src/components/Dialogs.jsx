import React from 'react'
import Dia_item from './Dia_item'
import Mes_item from './Mes_item'

export default function Dialogs(props) {

    let newPostElement = React.createRef()

    const addPost = () => {
        alert(newPostElement.current.value)
    }

    return (
        <div className='flex w-full'>
            <div className='w-1/3'>
                {props.data.dialogsData.map((item) => {
                    return <Mes_item name={item.name} img={item.img} />
                })}
            </div>
            <div className="w-2/3 bg-gray-200 mt-4 border-l-[1px] border-white">
                {props.data.dialogsData.map(item => <Dia_item message={item.message} />
                )}
                <div className="mt-20 bg-blue-100 w-1/2 h-20 flex justify-between">
                    <button className='m-auto bg-green-100 w-20 h-16'>Add post</button>
                    <input ref={newPostElement} type="text" className='bg-gray-100 border' />
                </div>
            </div>
        </div>
    )
}
