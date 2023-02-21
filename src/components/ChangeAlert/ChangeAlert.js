import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css"

function ChangeAlert({show,toggleShow}){
    if(show){
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p className="update-info">Parece que cambiaste tus TO-DOs en otra pestaña de tu navegador</p>
                    <p className="update-info">Quieres sincronizar la informacion actualizada?</p>
                    
                    <button
                        onClick={()=>toggleShow(false)}
                    >
                        YES
                    </button>
                </div>
            </div>
        );
    }else{
        return null;
    };
};

// aca usamos el HOC del archivo withStorageListener.js
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export {ChangeAlertWithStorageListener}