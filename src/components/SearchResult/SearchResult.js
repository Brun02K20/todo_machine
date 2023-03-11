import React from "react";
import "./SearchResult.css";
function SearchResult ({searchText}) {
    return (<p className="resultPar">There are no TO-DOs that contain the entered word: {searchText}</p>);
}
export {SearchResult}