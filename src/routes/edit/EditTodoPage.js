import React from "react";
import { TodoForm } from "../../ui/TodoForm/todoForm.js";

function EditTodoPage () {
    return (
        <TodoForm 
            label="Edit your Todo"
            submitText="Edit"
            submitEvent={() => {console.log("LLamar a Edit Todo")}}
        >

        </TodoForm>
    );
};

export {EditTodoPage}