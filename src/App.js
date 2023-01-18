import './App.css';
import Header from './components/Header';
import MyPosts from './components/MyPosts';
import Nav from './components/Nav';
import Post from './components/Post';
import Profile from './components/Profile';

function App() {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <Header />
      <h1></h1>
      <div className='flex pt-3'>
        <div className="w-1/5">
          <Nav />
        </div>
        <div className="w-4/5 pl-3">
          <Profile />
          <MyPosts />
          <Post name="Жора Зубенко" message='Всем здравствуйте, это мой первый пост' img='https://i.picsum.photos/id/52/200/200.jpg?hmac=CQCpnfTd-I1A6rOsdB9t4Dt3W3nllS8VW1azyfj8phY' />
          <Post name="Алексей Ишудченко" message='Продолжаем.' img='https://i.picsum.photos/id/666/200/200.jpg?hmac=keuaJ7nJC5hkHIEyee1b6jdEMbHBZbozYQ9NClt2_lk' />
          <Post name="Андрей Щербин" message='Не плохо получается, только не останавливайся' img='https://i.picsum.photos/id/692/200/200.jpg?hmac=PBAPILlS_qaKe0OMYjT0eXnftJjTGdwOgqCQMUVDGbg' />
        </div>
      </div>
    </div>
  );
}


export default App;
