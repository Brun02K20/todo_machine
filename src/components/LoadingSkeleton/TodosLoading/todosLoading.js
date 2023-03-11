import React from "react";
import "./todosLoading.css"
function TodosLoading(){
    return (
        <div className="loadingTodo_Container">
            <span className="loadingTodo_CompleteIcon"></span>
            <p className="loadingTodo_Text">LOADING, PLEASE WAIT...</p>
            <span className="loadingTodo_DeleteIcon"></span>
        </div> 
    );
};
export {TodosLoading};