import React from 'react';
import './index.css';
import { App } from './routes/App';
// Es el mismo import para las versiones mayores o iguales a ReactV18
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);



