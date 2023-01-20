import React from 'react'
import Dia_item from './Dia_item'
import Mes_item from './Mes_item'

export default function Dialogs() {

    let dialogsData = [
        {
        id: 1,
        name: 'Жора Зубенко',
        img:'https://i.picsum.photos/id/52/200/200.jpg?hmac=CQCpnfTd-I1A6rOsdB9t4Dt3W3nllS8VW1azyfj8phY',
        message:'Всем здарова, это мой сообщение'
    },
    {
        id: 2,
        name: 'Алексей Ишудченко',
        img:'https://i.picsum.photos/id/666/200/200.jpg?hmac=keuaJ7nJC5hkHIEyee1b6jdEMbHBZbozYQ9NClt2_lk',
        message:'Всем здарова, это мой сообщение'
    },
    {
        id: 3,
        name: 'Андрей Щербин',
        img:'https://i.picsum.photos/id/692/200/200.jpg?hmac=PBAPILlS_qaKe0OMYjT0eXnftJjTGdwOgqCQMUVDGbg',
        message:'Всем здарова, это мой сообщение'
    },
    ]

    return (
        <div className='flex w-full'>
            <div className='w-1/3'>
                <Mes_item name="Жора Зубенко" img='https://i.picsum.photos/id/52/200/200.jpg?hmac=CQCpnfTd-I1A6rOsdB9t4Dt3W3nllS8VW1azyfj8phY' />
                <Mes_item name="Алексей Ишудченко" img='https://i.picsum.photos/id/666/200/200.jpg?hmac=keuaJ7nJC5hkHIEyee1b6jdEMbHBZbozYQ9NClt2_lk' />
                <Mes_item name="Андрей Щербин" img='https://i.picsum.photos/id/692/200/200.jpg?hmac=PBAPILlS_qaKe0OMYjT0eXnftJjTGdwOgqCQMUVDGbg' />
            </div>
            <div className="w-2/3 bg-gray-200 h-40 mt-4 border-l-[1px] border-white">
                <Dia_item message="Всем здарова, это мой сообщение" />
                <Dia_item message="Всем здарова, это мой сообщение" />
                <Dia_item message="Всем здарова, это мой сообщение" />
            </div>
        </div>
    )
}
