import React from "react";
import "./TodoItem.css";

// TAREA: ver el tema de los && y los || para manejo dinamico de clases.

function TodoItem(propiedades){
    
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${propiedades.completed && 'Icon-check--active'}`} onClick={propiedades.onComplete}>√</span>
            <p className={`TodoItem-p ${propiedades.completed && 'TodoItem-p--complete'}`}>{propiedades.text}</p>
            <span className="Icon Icon-delete" onClick={propiedades.onDelete}>X</span>
        </li>
    );
};

export {TodoItem};