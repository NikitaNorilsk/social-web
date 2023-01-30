import React from 'react'
import Dia_item from './Dia_item'
import Mes_item from './Mes_item'
import { updateNewMassageBodyCreator, sendMessageCreator } from './Data'

export default function Dialogs(props) {

    // let newPostElement = React.createRef()
    let newMessageBody =  props.data.data.newMessageBody

    let onSendMessageClick = () => {
        props.data.dispatch(sendMessageCreator(newMessageBody))
    } 

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.data.dispatch(updateNewMassageBodyCreator(body))
    }

    return (
        <div className='flex w-full'>
            <div className='w-1/3'>
                {props.data.data.dialogsData.map((item) => {
                    return <Mes_item name={item.name} img={item.img} />
                })}
            </div>
            <div className="w-2/3 bg-gray-200 mt-4 border-l-[1px] border-white">
                {props.data.data.messages.map(item => <Dia_item message={item.message} />
                )}
                <div className="mt-20 bg-blue-100 w-1/2 h-20 flex justify-between">
                    <button onClick={onSendMessageClick} className='m-auto bg-green-100 w-20 h-16'>Add post</button>
                    <input
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    type="text"
                    className='bg-gray-100 border' />
                </div>
            </div>
        </div>
    )
}
