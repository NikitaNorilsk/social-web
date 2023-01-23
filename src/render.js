import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost } from './components/Data'
import { BrowserRouter } from 'react-router-dom';

export let renderEntireTree = (props) =>{
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
        <React.StrictMode>
            <App state={props} addPost={addPost} />
        </React.StrictMode>
    </BrowserRouter>
);
}