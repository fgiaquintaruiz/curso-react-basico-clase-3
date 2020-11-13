import {createStore} from "redux";
import elReducer from "../reducers/reducer";

const globalStore = createStore(elReducer, {contador: 0});

export default globalStore;