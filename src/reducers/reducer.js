import * as tipo from "../actions/actions";

function  elReducer(state, action){
    console.log("Recibi la accion " + action.type);
    
    let newState = state;

    switch(action.type){
        case tipo.ACT_INCREMENTAR: 
            newState = {contador: state.contador + action.value}
        break;
        case tipo.ACT_DECREMENTAR: 
            newState = {contador: state.contador - action.value}
        break;
    }

    return newState;
}

export default elReducer;