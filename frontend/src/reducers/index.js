import girisReducer from "./giris";
import hesaplaReducer from "./hesapla";

import { combineReducers } from "redux";

const butunReducerlar=combineReducers({
    hesapla:hesaplaReducer,
    giris:girisReducer
})
export default butunReducerlar