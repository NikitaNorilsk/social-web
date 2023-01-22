import React from 'react'
import Dia_item from './Dia_item'
import Mes_item from './Mes_item'

export default function Dialogs(props) {

    return (
        <div className='flex w-full'>
            <div className='w-1/3'>
                {props.data.state.dialogsData.map((item)=>{
                    return <Mes_item name={item.name} img={item.img} />
                })}
            </div>
            <div className="w-2/3 bg-gray-200 h-40 mt-4 border-l-[1px] border-white">
                {props.data.state.dialogsData.map( item =><Dia_item message={item.message} />
                )}
            </div>
        </div>
    )
}
