import React from "react";
import "./CreateTodoButton.css";


// formas de crear un evento dentro de un componente: 
// 1) <button className="createTodoButton" onClick={() =>{console.log("Hubo un click")}}>+</button>
// 2) Crear una funcion, almacenarla en una constante y llamarla
    // const onClickButton = () => {alert("Hubo un clickardo")};
    // en el return quedaria asi:
    // <button className="createTodoButton" onClick= () => onClickButton()}>+</button>

function CreateTodoButton(){
    const onClickButton = (msg) =>{
        alert(msg);
    };
    return (
        <button className="createTodoButton" onClick={() =>onClickButton("Aqui se abre el modal")}>+</button>
    );
};

export {CreateTodoButton};