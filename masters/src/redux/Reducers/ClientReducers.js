import { CURRENT_ETUDIANT, DELETE_ETUDIANT, ERROR_ETUDIANT, LOAD_ETUDIANT, RESET_PASSWORD, RESET_USERNAME, SIGNIN_ETUDIANT, SIGNOUT_ETUDIANT, SIGNUP_ETUDIANT } from "../ActionTypes/EtudiantActionType";


const initialState={
    load:false,
    etudiant:null,
    error:null
}


const EtudiantReducers=(state=initialState,{type,payload})=>{

    switch (type) {
        case LOAD_ETUDIANT:
            return{...state,load:true}
        case SIGNIN_ETUDIANT:
            localStorage.setItem("token",payload.token)
            return{...state,etudiant:payload.foundetudiant,load:false}
        case SIGNOUT_ETUDIANT:
            localStorage.removeItem("token")
            return{...state,etudiant:null,load:false}
        case SIGNUP_ETUDIANT:
            localStorage.setItem("token",payload.token)
            return{...state,load:false,etudiant:payload.newetudiant}
        case DELETE_ETUDIANT:
            localStorage.removeItem("token")
            return{...state,etudiant:null,load:false}
        case RESET_PASSWORD:
            return{...state,load:false}
        case RESET_USERNAME:
                return{...state,load:false}
        case ERROR_ETUDIANT:
            return{...state,error:payload,load:false}
        case CURRENT_ETUDIANT:
            return{...state,load:false,etudiant:payload}
        default:
            return state
    }
}

export default EtudiantReducers
