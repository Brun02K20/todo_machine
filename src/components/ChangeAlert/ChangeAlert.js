import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({show,toggleShow}){
    if(show){
        return (
            <div>
                <p>Hubo cambios</p>
                <button
                    onClick={()=>toggleShow(false)}
                >
                    Recargar Informacion
                </button>
            </div>
        );
    }else{
        return null;
    };
};

// aca usamos el HOC del archivo withStorageListener.js
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export {ChangeAlertWithStorageListener}