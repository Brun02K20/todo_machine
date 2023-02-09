import React from 'react';
// import './App.css';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

// nota, SI SON lo mismo className de REACT que class de HTML, pero estas son distintas a las clases de JS vanilla, ya sabemos, las que funcionan como plantilla para objetos

// Para mayor comprension, nosotros en el index.js estamos mandando a renderizar un componente llamado App, pero si vemos el HTML con el inspector en la app creada por react, no aparece una etiqueta tipo HTML llamada App, esto es porque los componentes son invisibles para HTML, pero si son visibles para REACT. Entonces, si los componentes son invisibles que es lo que renderiza react en html? la respuesta son los elementos. Entonces... cual es la diferencia entre un elemento REACT y un elemento HTML? Que los de react estan escritos en sintaxis JSX, es decir, son los elementos que se pueden crear con React.createElement, aparte, esos elementos de React no es que se traducen a HTML, se traducen a codigo JS. En otras palabras, no es que escribimos HTML dentro de JS, sino que usamos una sintaxis llamada JSX para que con una sintaxis similar a HTML en realidad lo que escribimos es el React.createElement("h1", id:{"title"}, "SEXO ANAL"); y despues Babel (si, el transpilador de codigo), convierta esos componentes react a codigo JS

// La magia de usar componentes son las propiedades (aclaremos una cosita, cuando trabajamos con componentes se llaman propiedades, cuando trabajamos en HTML se llaman atributos, no son lo mismo), en el index.js en el componente app le añadimos una propiedad saludo que es = a Oli, y aca en el compoennte de la App en un parrafo despues del ancla vean que llamo al objeto propiedades y llamo a la propiedad saludo para que por pantalla me muestre el Oli



// la gran duda es, como añado varios TODOITEM dependiendo de la cantidad de todos creados por los usuarios? ASI:
const listaFalsaTodos = [
  {
    text: "Cortar Cebolla",
    completed: false
  },
  {
    text: "Ir a la facu",
    completed: true
  },
  {
    text: "Llorar y sufrir",
    completed: false
  },
  {
    text: "Hacer ejercicio",
    completed: false
  }
];


function App(propiedades) {
  return (
    // para que funcione la aplicacion primero debo crear esos componentes que declare antes de ver los resultados en mi navegador
    // nota: a la lista de TO-DOs le puse apertura y cierre porque va a haber componentes dentro de ese componente, es decir, la lista es un componente compuesto por componentes

    // dentro del todoList creamos el componente reutilizable en el que figurara un todo individual, ahora bien, que hace ese .map()? Por cada uno de los TODO que haya dentro de la lista renderice ese todoitem

    // nota: a la hora de juntar los componentes debo encerrarlos todos en un div, pero hay un problema, es que por cada componente no quiero crear un div para envolver el resto de elementos a renderizar porque seria dificil establecer los estilos en css, para solucionar esto lo que hacemos es en vez de poner un div, le pediremos a react que renderice una "etiqueta invisible" llamada React.Fragment.

    // Lo que pasa es que react necesita que enviemos solo una etiqueta por componente, y dentro de dicha etiqueta enviemos lo que se nos cante el ogt

    // ahora bien, a la hora de crear componentes, se crea un archivo por cada componente a crear, asi que procedemos con eso
    <React.Fragment>
      < TodoCounter /> 
      
      < TodoSearch /> 
      
      <TodoList>
        {listaFalsaTodos.map(todo => (< TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
      </TodoList>
      
      < CreateTodoButton />
    </React.Fragment>
  );
}

export default App;


// nota, en react cuando hago render de una lista, como es este caso que hago render de la lista de listaFalsaTodos, tenemos que agregar un apropiedad especial llamada "key" a nuestro componentes, para que react pueda identificar cual componente es cual dentro de un alista, evitando asi renders innecesarios, se soluciona facil: 