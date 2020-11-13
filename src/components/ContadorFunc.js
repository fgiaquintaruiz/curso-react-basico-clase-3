import React from "react";
import { useSelector } from 'react-redux';

function ContadorFunc (){
    const count = useSelector(store => store.contador);
        
        return (  
            <h1>Contador: {count}</h1>
        );
}

export default ContadorFunc;