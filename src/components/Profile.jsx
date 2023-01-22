import React from 'react'
import '../App.css';
import Post from './Post';
import MyPosts from './MyPosts';

export default function Profile(props) {
    
    return (
        <div>
            <img className='w-full h-56' src="https://thumbs.dreamstime.com/b/panorama-snow-mountain-range-mountain-range-titl-titlis-uri-alps-engelberg-switzerland-94221341.jpg" alt="" />
            <img className='w-32 h-32 rounded-full mt-3' src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <MyPosts />
            {console.log(props.data.state.postsData)}
            {props.data.state.postsData.map( item =><Post name={item.name} message={item.message} img={item.img}/>)}
        </div>
    )
}
