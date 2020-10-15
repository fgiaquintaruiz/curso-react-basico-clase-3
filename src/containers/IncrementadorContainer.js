import Incrementador from "../components/Incrementador";
import {connect} from "react-redux";
import {actIncrementar} from "../action-creators/action-creators"

function mapDispatchToProps(dispatch){
    return {
        incrementar: () => {dispatch(actIncrementar(1))}
        // es como hacer 
        // incrementar: () => {dispatch({
        //     type: tipo.ACT_INCREMENTAR,
        //     value: cantidad
        // })}
    }
}

export default connect(null, mapDispatchToProps)(Incrementador);