import React from "react";
import "./styles/TodoList.css";

// el propiedades.children para seleccionar lo que este dentro del componente TodoList?? Si, lo que hace es indicar que elige cada elemento de la iteracion {listaFalsaTodos.map(todo => (< TodoItem />))}
function TodoList(propiedades){
    return(
        <section>
            <ul>
                {propiedades.children}
            </ul>
        </section>
    );
};
export { TodoList };