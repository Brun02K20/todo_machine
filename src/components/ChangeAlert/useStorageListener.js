import React from "react";

// en un HOC tbn puedo usar react hooks


function useStorageListener(synchronize){
    // estado en el que guardamos si hubo cambios en el storage de alguna de las pestañas o no lo hubo
    const [storageChange, setStorageChange] = React.useState(false);

    React.useEffect(()=>{
        // añadir escuchador a este HOC
        window.addEventListener("storage", (cambio)=>{
        // Funcion que actualizara el estado
            if (cambio.key === "TODOS_V1") {
                console.log("Hubo cambios en TODOS_V1");
                setStorageChange(true);
            };
        });
    },[]);

    const toggleShow = () => {
        synchronize();
        setStorageChange(false);
    };

    return {
        show: storageChange,
        toggleShow
    };
};

export {useStorageListener}
