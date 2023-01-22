import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Dialogs from './components/Dialogs';
import Profile from './components/Profile';
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App(props) {
  return (
    <BrowserRouter>
      <div className='max-w-[1200px] mx-auto'>
        <Header />
        <h1></h1>
        <div className='flex pt-3'>
          <div className="w-1/5">
            <Nav />
          </div>
          <div className="w-4/5 pl-3">
            <Routes>
              <Route path='/profile' element={<Profile data={props}/>} />
              <Route path='/dialogs' element={<Dialogs data={props}/>} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
