import axios from "axios"
import { ADD_SOLUTION } from "../ActionTypes/SolutionsType"
import { ERROR_ETUDIANT, LOAD_ETUDIANT } from "../ActionTypes/EtudiantActionType"



export const addSolutionq=(sol)=>async(dispatch)=>{
    dispatch({type:LOAD_ETUDIANT})
    try {
        const response=await axios.post('http://localhost:8000/api/solutions/addSolution',sol)
        dispatch({
            type:ADD_SOLUTION,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_ETUDIANT,
            payload:error
        })
    }
}