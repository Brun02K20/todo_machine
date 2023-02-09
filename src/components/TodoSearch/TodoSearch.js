import React from "react";
import "./TodoSearch.css"

// AHORA A LABURAR CON LA BARRA DE BUSQUEDAS, evidentemente el objetivo de esto es que la app como que filtre los TODOs en funcion de lo que ponga el usuairo en la barra de busquedas

// onchange nos devuelve, en un objeto, mas especificamente en la propiedad: .target.value el valor de la modificacion hecha a cabo por el usuario, ese valor lo tenemos que comparar con todos los propiedades.text y los que coincidan debemos mostrar solamente esos. Por si fuese poco, vemos como devuelve lo que escribio el usuario cada vez que modifico algo (es decir, te da el valor de turno cada vez que escribe o borra cualquier caracter)

// Los eventos en react van muy de la mano con el estado y el manejo del mismo

function TodoSearch({searchValue, setSearchValue}){  // ese objeto pasado como parametro son las propiedades
    // creando un estado en React --> const estado = React.useState("Juan");
    // pero aca hay un detalle, esa constante estado no tiene directamente nuestro estado, si no que tiene un array, es decir, React.useState nos devuelve un array de 2 posiciones, la posicion 0 tiene nuestro estado, y la 2da posicion tiene una funcion que se llama convencionalmente setState que nos permite editar nuestro estado, ejemplo: ["Juan", setState("Enrique")] (nota, tanto el estado como la funcion de cambio de estado pueden tener el nombre que se nos cante el ogt)

    // podemos trabajr asi el estado para obtener su valor y tambien lo podemos trabajar asi para actualizarlo, y cuando lo actualizemos es que se vuelve a re renderizar nuestro  componente

    // llevando todo esto a nuestro componente:
    // aca tamos diciendo que el estado se llama searchValue y va a tener un valor de cadena vacia, esto porque lo que quiero hacer es conectar este estado al input de busqueda, y que el valor del input sea igual al estado que creamos, es decir, a searchValue, y cada vez que se actualice cuando se ejecute el onChange llamaremos a la funcion setSearchValue para actualizar el estado y esa actualizacion sera el valor que hayan escrito los usuarios 

    // BIEN, LAS LINEAS 20, 25, 26, 32,35 CORRESPONDEN CON LA EXPLICACION DE LAS LINEAS 11 A 17
    // const [ searchValue, setSearchValue ] = React.useState("");
    

    const onSearchValueChange = (evento) =>{
        console.log(evento.target.value);
        // aca es donde se actualiza el estado cada vez que el usuario escribe algo
        setSearchValue(evento.target.value);
    };

    return (
        <form>
            <input 
                onChange={onSearchValueChange} 
                className="todoSearch" 
                placeholder='Buscar TODOs...' 
                value={searchValue}
            />
        </form>
    );
};

export { TodoSearch };