let data = {
    dialogsData: [
        {
            id: 1,
            name: 'Жора Зубенко',
            img: 'https://i.picsum.photos/id/52/200/200.jpg?hmac=CQCpnfTd-I1A6rOsdB9t4Dt3W3nllS8VW1azyfj8phY',
            message: 'Всем здарова, это мой сообщение'
        },
        {
            id: 2,
            name: 'Алексей Ишудченко',
            img: 'https://i.picsum.photos/id/666/200/200.jpg?hmac=keuaJ7nJC5hkHIEyee1b6jdEMbHBZbozYQ9NClt2_lk',
            message: 'Всем здарова, это мой сообщение'
        },
        {
            id: 3,
            name: 'Андрей Щербин',
            img: 'https://i.picsum.photos/id/692/200/200.jpg?hmac=PBAPILlS_qaKe0OMYjT0eXnftJjTGdwOgqCQMUVDGbg',
            message: 'Всем здарова, это мой сообщение'
        },
    ],
    postsData: [
        {
            name: "Жора Зубенко",
            message: 'Всем здравствуйте, это мой первый пост',
            img: 'https://i.picsum.photos/id/52/200/200.jpg?hmac=CQCpnfTd-I1A6rOsdB9t4Dt3W3nllS8VW1azyfj8phY'
        },
        {
            name: "Алексей Ишудченко",
            message: 'Продолжаем.',
            img: 'https://i.picsum.photos/id/666/200/200.jpg?hmac=keuaJ7nJC5hkHIEyee1b6jdEMbHBZbozYQ9NClt2_lk'
        },
        {
            name: "Андрей Щербин",
            message: 'Всем здравствуйте, это мой первый пост',
            img: 'https://i.picsum.photos/id/692/200/200.jpg?hmac=PBAPILlS_qaKe0OMYjT0eXnftJjTGdwOgqCQMUVDGbg'
        }
    ]
}

export let addPost = (postMessage) => {
    let newPost = {
        name: 'Антон Горохов',
        message:`${postMessage}`,
        img: 'https://picsum.photos/200'
    }
    data.postsData.push(newPost)
}

export default data