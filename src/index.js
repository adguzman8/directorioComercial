import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './header';

const header =ReactDOM.createRoot(document.getElementById('nav'));

header.render(<Header/>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
