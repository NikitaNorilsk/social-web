import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './components/Data'

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = () =>{
    root.render(
        <BrowserRouter>
        <React.StrictMode>
            <App
            data={store.data1}
            addPost={store.addPost}
            updateNewPostText={store.updateNewPostText}/>
        </React.StrictMode>
    </BrowserRouter>
);
}
renderEntireTree(store)
store.subscribe(renderEntireTree )