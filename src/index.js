import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './components/Data'

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = (props) =>{
    root.render(
        <BrowserRouter>
        <React.StrictMode>
            <App
            data={props.data1}
            dispatch={props.dispatch.bind(store)}/>
        </React.StrictMode>
    </BrowserRouter>
);
}
renderEntireTree(store)
store.subscribe(renderEntireTree)