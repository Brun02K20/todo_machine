import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css"

function ChangeAlert({synchronize}){
    const {show, toggleShow} = useStorageListener(synchronize);

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

export {ChangeAlert}