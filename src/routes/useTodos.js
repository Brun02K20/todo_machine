import React from "react";
import { useLocalStorage } from "./useLocalStorage";


// React.createContext nos devuelve un objeto de dos componentes, Provider, y Consumer. El provider se usa para envolver toda la aplicacion (en el App.js). el consumer se usa en todas partes siempre que necesitemos info de ese estado compartido en cualquiera de nuestros componentes

function useTodos(){
    
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error, 
        synchronizeItem: synchronizedTodos
    } = useLocalStorage("TODOS_V2", []); // en un localStorage hay que enviar 2 cosas por defecto: el nombre de lo que vamos a guardar, y el segundo es el valor por defecto a enviar

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
    const toggleCompleteTodo = (id) => {
        // cambio un todo a completado.
        const todoIndex = todos.findIndex(todo => todo.id === id);

        // lo que tenemos que hacer es enviarle una nueva lista con los nuevos valores, eliminando la lista anterior, para asi enviar los cambios a los TODOs
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    // metodo para borrar un todo
    const deleteTodo = (id) => {
        // cambio un todo a completado.
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    const addTodo = (textoDelTodo) => {
        if (!textoDelTodo.trim()) {
            alert("El nombre está vacío, escribe algo");
            return;
        }
        const id = newTodoId(); 

        const newTodos = [...todos];
        newTodos.push({
            text: textoDelTodo,
            completed: false,
            id,
        })
        saveTodos(newTodos);
    }

    const editTodo = (id, newTodoText) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].text = newTodoText; 
        saveTodos(newTodos);
    }

    const getTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        return todos[todoIndex];
    }
    return {
        loading,
        error,
        totalTodos, 
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        addTodo,
        synchronizedTodos,
        editTodo,
        getTodo
    };
};

// generando ids: 
function newTodoId() {
    return Date.now()
}

// otra solucion posible para generar ids usando funciones generadoras de javascript
// function* generateId() {
//     let id = toDos.length
//     while (true) {
//         yield id++
//     }
// }

// const newTodoId = generateId()


export {useTodos};