import React from "react";
import ReactDOM  from "react-dom";
import "./modal.css";


// crear mi componente como cualquier otro
function Modal( {children} ){
    return(
        // crear mi portal
        ReactDOM.createPortal( // aca yo puedo poner lo que se me cante, un <p></p>, un div, importar un componente, etc
            <div className="modalBackground">
                {children}
            </div>,
            document.getElementById("modal")
        )
    );
};

export { Modal }