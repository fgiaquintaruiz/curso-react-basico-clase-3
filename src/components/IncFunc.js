import React from "react";
import { useDispatch } from 'react-redux';
import * as actions from '../action-creators/action-creators.js';

function IncFunc (){
    const dispatch = useDispatch();
        
    return ( 
        <button onClick={
            ()=> {
                dispatch(actions.actIncrementar(1))
            }
        }>Incrementar</button>
     );
}

export default IncFunc;