import React from 'react';
// import './App.css';

import { AppUI } from "./AppUI.js"

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


// Creando un custom Hook
function useLocalStorage(itemName, initialValue){
  // vamos a simular el llamado a una API, para ello requeriremos estados de cargando y de error
  const [loading, setLoading] = React.useState(true); 
  const [error, setError] = React.useState(false);

  // aca creamos los estads que van a ser compartidos entre todos los componentes hijos de este componente App que es el componente padre:
  const [item, setItem] = React.useState(initialValue);

  // llamar a react.useeffect:
  React.useEffect( () => {
    setTimeout( () => {
      try {
        // aca va a ir todo lo relacionado al local storage

        // llamar a local storage:
        const localStorageItem = localStorage.getItem(itemName);

        // aca hay 2 casos: que el usuario no tenga o si tenga todos guardados
        let parsedItem;

        // verificamos si no hay nada en localStorage:
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{parsedItem = JSON.parse(localStorageItem)};

        setItem(item, parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
      
      

    }, 1000)
  }, []);


  

  

  // ahora bien, vemos que si yo hago cambios en la app y recargo la pagina, esos cambios se deshacen, para evitar esto, debo de comunicar mi aplicacion con el local storage, para eso:

  const saveItem = (newItem) => {
    try {
      const stringyfiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringyfiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {item, saveItem, loading, error};
};

function App() {

  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", []);

  // el .filter te crea un nuevo array compuesto por los elementos del array anterior que cumplen con la condicion puesta en el filtro
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  // Bien, la idea ahora es que el buscador funcione como un filtrador de TODOs, como hariamos eso?
  const [searchValue, setSearchValue] = React.useState("");

  // DUDA... PORQUE SE USA LET Y NO CONST EN ESTE CASO SI SE TRATA DE UN ARRAY? ADEMAS DE QUE LA CONSTANTE ESTA EN UN ALCANCE DE BLOCKSCOPE COMO POR ASI DECIR SUPERIOR AL IF
  let searchedTodos = [];

  // Este if dice: Si los usuarios no escribieron nada en el input, y en caso contrario:
  if (!(searchValue.length >= 1)){
    searchedTodos = todos;
  }else{
    // aca filtramos la cantidad de TODOs
    searchedTodos = todos.filter(todo => {

      // creo los textos para compararlos
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      // ver en cada todo, si el todo tiene en algun lugar de su .text el texto que el usuario ingresa en el input, para eso podemos usar el .includes() que es un metodo propio de los strings:
      return todoText.includes(searchText);
      // nota: el return dentro de un filter es el indicador de que ese es el criterio de evaluacion a seguir
    });
  };

  



  // metodo para marcar TODOs como completados 
  const toggleCompleteTodo = (textoDelTodo) => {
    // cambio un todo a completado.
    const todoIndex = todos.findIndex(todo => todo.text === textoDelTodo);

    // lo que tenemos que hacer es enviarle una nueva lista con los nuevos valores, eliminando la lista anterior, para asi enviar los cambios a los TODOs
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  // metodo para borrar un todo
  const deleteTodo = (textoDelTodo) => {
    // cambio un todo a completado.
    const todoIndex = todos.findIndex(todo => todo.text === textoDelTodo);

    
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };


  return (
    <AppUI 

      loading={loading}
      error={error}
      totalTodos={totalTodos}  // asi es como envio propiedades a los componentes hijos
      completedTodos={completedTodos}
      
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      
      searchedTodos={searchedTodos}

      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
    
    
    />
  );
}

export default App;


// nota, en react cuando hago render de una lista, como es este caso que hago render de la lista de listaFalsaTodos, tenemos que agregar un apropiedad especial llamada "key" a nuestro componentes, para que react pueda identificar cual componente es cual dentro de un alista, evitando asi renders innecesarios, se soluciona facil: 