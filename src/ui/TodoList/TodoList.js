import React from "react";
import "./TodoList.css";

// el propiedades.children para seleccionar lo que este dentro del componente TodoList?? Si, lo que hace es indicar que elige cada elemento de la iteracion {listaFalsaTodos.map(todo => (< TodoItem />))}
function TodoList(props) {
    const renderFunc = props.children || props.render; 
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
            <ul>
                { (!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}
            </ul>
        </section>
    );
};
export { TodoList };