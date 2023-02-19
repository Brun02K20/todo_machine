import React from "react";
import "./TodoList.css";

// el propiedades.children para seleccionar lo que este dentro del componente TodoList?? Si, lo que hace es indicar que elige cada elemento de la iteracion {listaFalsaTodos.map(todo => (< TodoItem />))}
function TodoList(props) {
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}
            <ul>
                {props.searchedTodos.map(props.render)}
            </ul>
        </section>
    );
};
export { TodoList };