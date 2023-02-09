import React from "react";
import "./styles/TodoSearch.css"

// AHORA A LABURAR CON LA BARRA DE BUSQUEDAS, evidentemente el objetivo de esto es que la app como que filtre los TODOs en funcion de lo que ponga el usuairo en la barra de busquedas

// onchange nos devuelve, en un objeto, mas especificamente en la propiedad: .target.value el valor de la modificacion hecha a cabo por el usuario, ese valor lo tenemos que comparar con todos los propiedades.text y los que coincidan debemos mostrar solamente esos. Por si fuese poco, vemos como devuelve lo que escribio el usuario cada vez que modifico algo (es decir, te da el valor de turno cada vez que escribe o borra cualquier caracter)

// Los eventos en react van muy de la mano con el estado y el manejo del mismo

function TodoSearch(){

    const onSearchValueChange = (evento) =>{console.log(evento.target.value)};
    return (
        <form>
            <input onChange={onSearchValueChange} className="todoSearch" placeholder='Buscar TODOs...'></input>
        </form>
    );
};

export { TodoSearch };