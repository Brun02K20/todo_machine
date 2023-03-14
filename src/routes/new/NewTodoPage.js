import React from "react";
import { TodoForm } from "../../ui/TodoForm/todoForm.js";
import { useTodos } from "../useTodos.js";

function NewTodoPage () {
    const {addTodo} = useTodos();
    const {loading} = useTodos();

    return (
        <TodoForm 
            label="Write your new Todo"
            submitText="Add"
            submitEvent={(text) => addTodo(text)}
            
        >

        </TodoForm>
    );
};

export {NewTodoPage}