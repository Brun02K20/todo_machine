import React from "react";

// este es el archivo de un HOC
// en un HOC tbn puedo usar react hooks
function withStorageListener(WrappedComponent){
    return function WrappedComponentWithStorageListener(props){ // estas son las propiedades del Wrapped Component
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
            props.synchronize();
            setStorageChange(false);
        };
        return(
            <WrappedComponent 
                show={storageChange} 
                toggleShow={toggleShow}
            />
        ); 
    };
};

export {withStorageListener}
