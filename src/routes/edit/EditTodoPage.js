import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm/todoForm.js";
import { useTodos } from "../useTodos.js";

function EditTodoPage () {
    const location = useLocation()
    const params = useParams();
    const id = Number(params.id)

    const {loading, getTodo, editTodo} = useTodos();
    let todoText;

    if (location.state?.todo) {
        todoText = location.state.todo.text
    } else if (loading){
        return <p>Loading...</p>
    } else {
        const todo = getTodo(id);
        todoText = todo.text
    };

    return (
        <TodoForm 
            label="Edit your Todo"
            defaultTodoText={todoText}
            submitText="Edit"
            submitEvent={(newTodoText) => editTodo(id, newTodoText)}
            loading={loading}
        >

        </TodoForm>
    );
};

export {EditTodoPage}