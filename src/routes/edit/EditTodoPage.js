import React from "react";
import { useParams } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm/todoForm.js";
import { useTodos } from "../useTodos.js";

function EditTodoPage () {
    const params = useParams();
    const id = Number(params.id)

    const {editTodo} = useTodos();
    return (
        <TodoForm 
            label="Edit your Todo"
            submitText="Edit"
            submitEvent={(newTodoText) => editTodo(id, newTodoText)}
        >

        </TodoForm>
    );
};

export {EditTodoPage}