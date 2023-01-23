import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost } from './components/Data'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = (props) =>{
    root.render(
        <BrowserRouter>
        <React.StrictMode>
            <App data={props} addPost={addPost}/>
        </React.StrictMode>
    </BrowserRouter>
);
}