import Decrementador from "../components/Decrementador";
import {connect} from "react-redux";
import {actDecrementar} from "../action-creators/action-creators"

function mapDispatchToProps(dispatch){
    return {
        decrementar: () => {dispatch(actDecrementar(1))}
        // es como hacer 
        // incrementar: () => {dispatch({
        //     type: tipo.ACT_DECREMENTAR,
        //     value: cantidad
        // })}
    }
}

export default connect(null, mapDispatchToProps)(Decrementador);