import { ERROR_ETUDIANT, LOAD_ETUDIANT } from "../ActionTypes/EtudiantActionType"
import { ADD_SOLUTION } from "../ActionTypes/SolutionsType"


const initialState={
    load:false,
    solution:null,
    error:null
}


const SolutionsReducers=(state=initialState,{type,payload})=>{

    switch (type) {
        case LOAD_ETUDIANT:
            return{...state,load:true}
        case ADD_SOLUTION:
            return{...state,load:false,solution:payload.sol}
        case ERROR_ETUDIANT:
            return{...state,error:payload,load:false}
        default:
            return state
    }
}

export default SolutionsReducers
