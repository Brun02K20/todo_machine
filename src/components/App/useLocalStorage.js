import React from "react";

// Creando un custom Hook
function useLocalStorage(itemName, initialValue){
    // vamos a simular el llamado a una API, para ello requeriremos estados de cargando y de error
    const [loading, setLoading] = React.useState(true); 
    const [error, setError] = React.useState(false);
    // aca creamos los estads que van a ser compartidos entre todos los componentes hijos de este componente App que es el componente padre:
    const [item, setItem] = React.useState(initialValue);
    // llamar a react.useeffect:
    React.useEffect( () => {
        setTimeout( () => {
            try {
                // aca va a ir todo lo relacionado al local storage
                // llamar a local storage:
                const localStorageItem = localStorage.getItem(itemName);
                // aca hay 2 casos: que el usuario no tenga o si tenga todos guardados
                let parsedItem;
                // verificamos si no hay nada en localStorage:
                if(!localStorageItem){
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                }else{parsedItem = JSON.parse(localStorageItem)};
                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 1000)
    }, []);
    // ahora bien, vemos que si yo hago cambios en la app y recargo la pagina, esos cambios se deshacen, para evitar esto, debo de comunicar mi aplicacion con el local storage, para eso:
    const saveItem = (newItem) => {
        try {
            const stringyfiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringyfiedItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };
    
    return {item, saveItem, loading, error};
};

export { useLocalStorage }