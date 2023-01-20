import React from 'react'
import '../App.css';
import Post from './Post';
import MyPosts from './MyPosts';

export default function Profile() {
    return (
        <div>
            <img className='w-full h-56' src="https://thumbs.dreamstime.com/b/panorama-snow-mountain-range-mountain-range-titl-titlis-uri-alps-engelberg-switzerland-94221341.jpg" alt="" />
            <img className='w-32 h-32 rounded-full mt-3' src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <MyPosts />
            <Post name="Жора Зубенко" message='Всем здравствуйте, это мой первый пост' img='https://i.picsum.photos/id/52/200/200.jpg?hmac=CQCpnfTd-I1A6rOsdB9t4Dt3W3nllS8VW1azyfj8phY' />
            <Post name="Алексей Ишудченко" message='Продолжаем.' img='https://i.picsum.photos/id/666/200/200.jpg?hmac=keuaJ7nJC5hkHIEyee1b6jdEMbHBZbozYQ9NClt2_lk' />
            <Post name="Андрей Щербин" message='Не плохо получается, только не останавливайся' img='https://i.picsum.photos/id/692/200/200.jpg?hmac=PBAPILlS_qaKe0OMYjT0eXnftJjTGdwOgqCQMUVDGbg' />
        </div>
    )
}
