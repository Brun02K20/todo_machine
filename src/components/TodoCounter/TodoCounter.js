// por cada componente debo hacer el import del paquete de react y una funcion con el nombre del componente en cuestion 

import React from "react";

// importo los estilos
import "./TodoCounter.css";

// dentro de la funcion retorno el codigo que yo necesito renderizar
function TodoCounter ({totalTodos, completedTodos}){
    return (
        <h2 className="todoCounter">You have completed  {completedTodos} of {totalTodos} TO-DOs</h2>
    );
};

// ahora bien, toca exportar el componente, existen 2 formas de hacerlo, la 1ra es exportar por defecto mediante export default TodoCounter; y en el App.js tendriamos que poner import TodoCounter from "TodoCounter.js", pero que pasa, en la 2da palabra de esta instruccion puedo poner lo que se me cante, ejemplo: import sexoAnalDuro from "TodoCounter.js", y puede llegar a dar confusiones, asi que es un amejor practica en este caso usar exports e imports nombrados, que se escriben asi: 

// export {nombreexactodeloquequieroexportar1, nombreexactodeloquequieroexportar2, nombreexactodeloquequieroexportar3}

// import {nombreexactodeloquequieroimportar1,nombreexactodeloquequieroimportar2,nombreexactodeloquequieroimportar3} from "./TodoCounter.js"

export { TodoCounter };