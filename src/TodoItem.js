import React from "react";
import "./styles/TodoItem.css";

// TAREA: ver el tema de los && y los || para manejo dinamico de clases.

function TodoItem(propiedades){
    const onComplete = () => {
        alert("YA COMPLETASTE TU TODO: " + propiedades.text);
    };

    const onDelete = () => {
        alert("BORRASTE TU TODO: " + propiedades.text);
    };
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${propiedades.completed && 'Icon-check--active'}`} onClick={onComplete}>√</span>
            <p className={`TodoItem-p ${propiedades.completed && 'TodoItem-p--complete'}`}>{propiedades.text}</p>
            <span className="Icon Icon-delete" onClick={onDelete}>X</span>
        </li>
    );
};

export {TodoItem};