import React from "react";
import { TodoForm } from "../../ui/TodoForm/todoForm.js";

function NewTodoPage () {
    
    return (
        <TodoForm 
            label="Write your new Todo"
            submitText="Add"
            submitEvent={() => {console.log("LLamar a Add Todo")}}
        >

        </TodoForm>
    );
};

export {NewTodoPage}