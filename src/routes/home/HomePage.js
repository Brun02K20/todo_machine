import React from 'react';
// import './App.css';
import { useTodos } from '../useTodos.js';
import { TodoCounter } from '../../ui/TodoCounter/TodoCounter.js';
import { TodoSearch } from '../../ui/TodoSearch/TodoSearch.js';
import { TodoList } from '../../ui/TodoList/TodoList.js';
import { TodoItem } from '../../ui/TodoItem/TodoItem.js';
import { CreateTodoButton } from '../../ui/CreateTodoButton/CreateTodoButton.js';
import { Modal } from "../../ui/Modal/modal.js";
import { TodoForm } from "../../ui/TodoForm/todoForm.js";
import { TodoHeader } from "../../ui/TodoHeader/TodoHeader.js";
import { SearchResult } from '../../ui/SearchResult/SearchResult.js';
import { ChangeAlert } from '../../ui/ChangeAlert/ChangeAlert.js';

// imports del loading skeleton
import { TodosError } from "../../ui/TodosError/todosError.js";
import { TodosLoading } from "../../ui/TodosLoading/todosLoading.js";
import { EmptyTodos } from "../../ui/EmptyTodos/emptyTodos.js";



function HomePage() {
    const {
        error, 
        loading, 
        searchedTodos, 
        toggleCompleteTodo, 
        deleteTodo, 
        openModal, 
        setOpenModal,
        totalTodos, 
        completedTodos,
        searchValue, 
        setSearchValue,
        addTodo,
        synchronizedTodos,
        editTodo
    } = useTodos();
    return(
        
        <React.Fragment>
            <TodoHeader loading={loading}>
                < TodoCounter 
                    totalTodos={totalTodos} 
                    completedTodos={completedTodos} 
                    //loading={loading}
                /> 
                < TodoSearch 
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue} 
                    //loading={loading}
                />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                searchedTodos={searchedTodos}
                totalTodos={totalTodos}
                searchText={searchValue}
                onError={() => <TodosError />}
                onLoading={() => <TodosLoading />}
                onEmptyTodos={() => <EmptyTodos />}
                onEmptySearchResults={()=> <SearchResult searchText={searchValue}/>}
                // render={todo => (
                //   <TodoItem
                //     key={todo.text}
                //     text={todo.text}
                //     completed={todo.completed}
                //     onComplete={() => toggleCompleteTodo(todo.text)}
                //     onDelete={() => deleteTodo(todo.text)}
                //   />
                // )}
            >
                {todo => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => toggleCompleteTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                        onEdit={editTodo}
                    />
                )}
            </TodoList>
        
            {/* <TodoList>
                {error && < TodosError error={error}/>}
                {loading && < TodosLoading />}
                {(!loading && !searchedTodos.length) && < EmptyTodos />}
                
                {searchedTodos.map(todo => (
                < TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete = {() => toggleCompleteTodo(todo.text)} // pongo el todo.text porque es lo que asignamos como id unico
                    onDelete = {() => deleteTodo(todo.text)}
                />))
                }
            </TodoList> */}

            {!!openModal && (
                <Modal>
                <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
                </Modal>
            )}    

            < CreateTodoButton 
                setOpenModal={setOpenModal}
            />

            <ChangeAlert synchronize={synchronizedTodos} />
        </React.Fragment>
    );
}

export {HomePage};
