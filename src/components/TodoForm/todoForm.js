import React from "react";
import "./todoForm.css"

function TodoForm({addTodo, setOpenModal}){
    // crear un estado LOCAL (o sea, solamente propio de este componente), este estado escuchara los cambios que hagan los usuarios en el textarea y almacenara esa modificacion en una variable de estado
    const [newTodoText, setNewTodoText] = React.useState("");

    const onChange = (evento) => {
        setNewTodoText(evento.target.value);
    };

    const onCancel = () => {
        // TODO
        setOpenModal(false);
        
    };

    const onSubmit = (eventoDeEnvioDeFormulario) => {
        // TODO

        // el preventDefalut lo que hace es que cuando el usuairo  haga click en el boton que tenga type="submit" no se recargue la pagina automaticamente
        eventoDeEnvioDeFormulario.preventDefault();
        addTodo(newTodoText);
        // lo pongo aca tbn al setOpenModal(false); para que cuando le den al boton añadir se cierre el formulario
        setOpenModal(false);
    };

    return(
        <form onSubmit={onSubmit} className="submitForm">
            <label className="submitFormLabel">HI!!!</label>
            <textarea 
                value={newTodoText}
                onChange={onChange}
                placeholder="Write your TO-DO..."
                className="submitFormTextarea"
                required            
            />
            <div className="buttonContainer">
                <button type="button" onClick={onCancel} className="formButton cancelButton">Cancel</button>
                <button type="submit" className="formButton addButton">Add</button>
            </div>
        </form>
    );
};

export {TodoForm}