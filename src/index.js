import React from 'react';
import './index.css';
import App from './components/App/App.js';
import reportWebVitals from './reportWebVitals';  // en otro curso vamos a entender para que sirve esto

// Es el mismo import para las versiones mayores o iguales a ReactV18
import ReactDOM from "react-dom/client";

// EN REACT EXISTEN MUCHAS FORMAS DE CREAR COMPONENTES, UNA DE ELLAS ES MEDIANTE LAS CLASES QUE EXTIENDEN DE LA CLASE React.Component --> class Componente extends React.Component , pero lo cierto es que ya nadie usa esta forma. Loque se hace son funciones componentes, las cuales, su nombre empieza por mayuscula y en el return se devuelve el React.createElement

// function App () {
//   return (
//     React.createElement("h1", {id: "title"}, "SEXO ANAL")
//   );
// }

// esa funcion de la linea 9 seria trabajar con react vanilla, pero este entorno de desarrollo lo que hace es que no tengamos que llamar directamente a React.createElement y bla bla bla bla, si no, retornar eso mismo con una sintaxis similar al html:

// function App () {
//   return (
//     <h1 id="title">
//       SEXO ANAL
//     </h1>
//   );
// }

// con esto lo que hacemos ahora es renderizar un componente creado por nosotros guardado en el archivo App.js (linea 30)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// en otro curso vamos a entender para que sirve esto (lineas 38 a 44), lo mismo con los <React.StrictMode>
