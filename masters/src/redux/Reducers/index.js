import { combineReducers } from "redux";
import EtudiantReducers from "./ClientReducers";
import SolutionsReducers from "./Solution";


const rootReducer = combineReducers({EtudiantReducers, SolutionsReducers});

export default rootReducer;
