import React from 'react';
// import './App.css';

import { AppUI } from "./AppUI.js"
import { useLocalStorage } from '../TodoContext/useLocalStorage.js';
import { TodoProvider } from '../TodoContext/index.js';

import { waitForElementToBeRemoved } from '@testing-library/react';

// nota, SI SON lo mismo className de REACT que class de HTML, pero estas son distintas a las clases de JS vanilla, ya sabemos, las que funcionan como plantilla para objetos

// Para mayor comprension, nosotros en el index.js estamos mandando a renderizar un componente llamado App, pero si vemos el HTML con el inspector en la app creada por react, no aparece una etiqueta tipo HTML llamada App, esto es porque los componentes son invisibles para HTML, pero si son visibles para REACT. Entonces, si los componentes son invisibles que es lo que renderiza react en html? la respuesta son los elementos. Entonces... cual es la diferencia entre un elemento REACT y un elemento HTML? Que los de react estan escritos en sintaxis JSX, es decir, son los elementos que se pueden crear con React.createElement, aparte, esos elementos de React no es que se traducen a HTML, se traducen a codigo JS. En otras palabras, no es que escribimos HTML dentro de JS, sino que usamos una sintaxis llamada JSX para que con una sintaxis similar a HTML en realidad lo que escribimos es el React.createElement("h1", id:{"title"}, "SEXO ANAL"); y despues Babel (si, el transpilador de codigo), convierta esos componentes react a codigo JS

// La magia de usar componentes son las propiedades (aclaremos una cosita, cuando trabajamos con componentes se llaman propiedades, cuando trabajamos en HTML se llaman atributos, no son lo mismo), en el index.js en el componente app le añadimos una propiedad saludo que es = a Oli, y aca en el compoennte de la App en un parrafo despues del ancla vean que llamo al objeto propiedades y llamo a la propiedad saludo para que por pantalla me muestre el Oli

// la gran duda es, como añado varios TODOITEM dependiendo de la cantidad de todos creados por los usuarios? ASI:
// const listaFalsaTodos = [
//   {
//     text: "Cortar Cebolla",
//     completed: true
//   },
//   {
//     text: "Ir a la facu",
//     completed: true
//   },
//   {
//     text: "Llorar y sufrir",
//     completed: false
//   },
//   {
//     text: "Hacer ejercicio",
//     completed: false
//   }
// ];
// SINTAXIS DE UN ESTADO:
// const [nombreEstado, nombreFuncionActualizadoraEstado] = React.useState(valorPorDefectoDelEstado);

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

// nota, en react cuando hago render de una lista, como es este caso que hago render de la lista de listaFalsaTodos, tenemos que agregar un apropiedad especial llamada "key" a nuestro componentes, para que react pueda identificar cual componente es cual dentro de un alista, evitando asi renders innecesarios, se soluciona facil: 
