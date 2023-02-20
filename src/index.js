import React from 'react';
import './index.css';
import App from './components/App/App.js';
import reportWebVitals from './reportWebVitals';  // en otro curso vamos a entender para que sirve esto

// Es el mismo import para las versiones mayores o iguales a ReactV18
import ReactDOM from "react-dom/client";

// EN REACT EXISTEN MUCHAS FORMAS DE CREAR COMPONENTES, UNA DE ELLAS ES MEDIANTE LAS CLASES QUE EXTIENDEN DE LA CLASE React.Component --> class Componente extends React.Component , pero lo cierto es que ya nadie usa esta forma. Loque se hace son funciones componentes, las cuales, su nombre empieza por mayuscula y en el return se devuelve el React.createElement

// function App () {
//   return (
//     React.createElement("h1", {id: "title"}, "Titulo")
//   );
// }

// esa funcion de la linea 9 seria trabajar con react vanilla, pero este entorno de desarrollo lo que hace es que no tengamos que llamar directamente a React.createElement y bla bla bla bla, si no, retornar eso mismo con una sintaxis similar al html:

// function App () {
//   return (
//     <h1 id="title">
//       Titulo
//     </h1>
//   );
// }


// // jugando a crear mi primer HOC; los HOCS por convencion empiezan con with.
// function Appp(props){
//     return (
//         <h1>!{props.saludo} {props.nombre}!</h1>
//     );
// }

// // la funcion que se retorna debe ser si o si un componente de react, el resto puede ser HOC o lo que quiera
// function withSaludo(WrappedComponent) {
//     return function WrappedComponentWithSaludo(saludo){
//         return function ComponenteDeVerdad(props){
//             return (
//                 <React.Fragment>
//                     < WrappedComponent {...props} saludo={saludo}/>
//                     <p>MONTIEL AL ARCO, LO MANDO AL LADO DEL WRAPPED COMPONENT</p>
//                 </React.Fragment>
//             );
//         }
//     }
// }

// // aca guardamos al componente luego de ser envuelto con el HOC
// const AppWithSaludo = withSaludo(Appp)("buenos dias");


// con esto lo que hacemos ahora es renderizar un componente creado por nosotros guardado en el archivo App.js (linea 55)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //< AppWithSaludo nombre="Bruno"/>
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// en otro curso vamos a entender para que sirve esto (lineas 61 a 64), lo mismo con los <React.StrictMode>


