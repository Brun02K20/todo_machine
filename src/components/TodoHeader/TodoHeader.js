import React from "react";

function TodoHeader({children, loading}){
    return (
        <header>
            {
                React.Children
                    .toArray(children)
                    .map( hijo => React.cloneElement(hijo, { loading }))
            };
        </header>
    );
};

export { TodoHeader }