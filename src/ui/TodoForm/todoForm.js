import React from "react";
import { useNavigate } from "react-router-dom";
import "./todoForm.css"

function TodoForm(props){
    const navigate = useNavigate();
    // crear un estado LOCAL (o sea, solamente propio de este componente), este estado escuchara los cambios que hagan los usuarios en el textarea y almacenara esa modificacion en una variable de estado
    const [newTodoText, setNewTodoText] = React.useState("");

    const onChange = (evento) => {
        setNewTodoText(evento.target.value);
    };

    const onCancel = () => {
        navigate("/");
    };

    const onSubmit = (eventoDeEnvioDeFormulario) => {
        eventoDeEnvioDeFormulario.preventDefault();
        props.submitEvent(newTodoText);
        navigate("/");
    };

    return(
        <div className="form-container">
            <form onSubmit={onSubmit} className="submitForm">
                <label className="submitFormLabel">{props.label}</label>
                <textarea 
                    value={newTodoText}
                    onChange={onChange}
                    placeholder="Write your TO-DO..."
                    className="submitFormTextarea"
                    required            
                />
                <div className="buttonContainer">
                    <button type="button" onClick={onCancel} className="formButton cancelButton">Cancel</button>
                    <button type="submit" className="formButton addButton">{props.submitText}</button>
                </div>
            </form>
        </div>
    );
};

export {TodoForm}