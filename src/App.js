import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';

function App() {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <Header />
      <h1></h1>
      <div className='flex pt-3'>
        Flash
        <div className="w-1/5">
          <Nav />
        </div>
        <div className="w-4/5 pl-3">
          <Profile />
        </div>
      </div>
    </div>
  );
}


export default App;
