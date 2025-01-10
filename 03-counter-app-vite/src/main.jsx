//Primero que nada, hay que importar react al archivo en el que estoy.

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css";
import { MyApp } from './MyFirstApp';
//import {Practica} from "./PracticaPropiedades";
//import {CounterApp} from "./CounterApp.jsx";
//import {LikeApp} from "./LikeApp";
//import { ImagenesApp } from './ImagenesApp';

ReactDOM.createRoot( document.getElementById('mensaje')).render(
    <React.StrictMode>
        <MyApp/>
    </React.StrictMode>
);

