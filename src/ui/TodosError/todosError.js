import React from "react";
import "./todosError.css";
function TodosError({error}){
    return (<p className="e">{error}</p>);
};
export {TodosError}