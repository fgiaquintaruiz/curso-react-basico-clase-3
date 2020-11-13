import React from "react";
import { useDispatch } from 'react-redux';
import * as actions from '../action-creators/action-creators.js';

function DecFunc (){
    const dispatch = useDispatch();
        
    return ( 
        <button onClick={
            ()=> {
                dispatch(actions.actDecrementar(1))
            }
        }>Decrementar</button>
     );
}

export default DecFunc;