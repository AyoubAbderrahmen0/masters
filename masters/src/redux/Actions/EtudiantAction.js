import axios from "axios"
import { CURRENT_ETUDIANT, DELETE_ETUDIANT, ERROR_ETUDIANT, LOAD_ETUDIANT, RESET_PASSWORD, RESET_USERNAME, SIGNIN_ETUDIANT, SIGNOUT_ETUDIANT, SIGNUP_ETUDIANT } from "../ActionTypes/EtudiantActionType"


export const signUp=(newEtudiant)=>async(dispatch)=>{
    dispatch({type:LOAD_ETUDIANT})
    try {
        const response=await axios.post('http://localhost:8000/api/etudiant/signUp',newEtudiant)
        dispatch({
            type:SIGNUP_ETUDIANT,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_ETUDIANT,
            payload:error
        })
    }
}

export const signIn=(email,password)=>async(dispatch)=>{
    dispatch({type:LOAD_ETUDIANT})
    try {
        const response= await axios.post('http://localhost:8000/api/etudiant/signIn',{email,password})
        dispatch({
            type:SIGNIN_ETUDIANT,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_ETUDIANT,
            payload:error
        })
    }
}

export const signOut=()=>async(dispatch)=>{
    dispatch({type:LOAD_ETUDIANT})
    try {
        dispatch({
            type:SIGNOUT_ETUDIANT,
        })
    } catch (error) {
        dispatch({
            type:ERROR_ETUDIANT,
            payload:error
        })
    }
}

export const deleteetudiant=(_id)=>async(dispatch)=>{
    dispatch({type:LOAD_ETUDIANT})
    try {
        const response= await axios.delete(`http://localhost:8000/api/etudiant/delete/${_id}`)
        dispatch({
            type:DELETE_ETUDIANT,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_ETUDIANT,
            payload:error
        })
    }
}

export const resetPassword=(_id,newPassword)=>async(dispatch)=>{
    dispatch({type:LOAD_ETUDIANT})
    try {
        const response=await axios.put(`http://localhost:8000/api/etudiant/reset-password/${_id}`,{newPassword})
        dispatch({
            type:RESET_PASSWORD,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_ETUDIANT,
            payload:error
        })
    }
}

export const resetUserName=(_id,userName)=>async(dispatch)=>{
    dispatch({type:LOAD_ETUDIANT})
    try {
        const response=await axios.put(`http://localhost:8000/api/etudiant/reset-userName/${_id}`,{userName})
        dispatch({
            type:RESET_USERNAME,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_ETUDIANT,
            payload:error
        })
    }
}

export const current=()=>async(dispatch)=>{
    dispatch({type:LOAD_ETUDIANT})
    try {
        const config = {
            headers: {authorization: localStorage.getItem('token')}
        }
        const response=await axios.post("http://localhost:8000/api/etudiant/current",config)
        dispatch({
            type:CURRENT_ETUDIANT,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_ETUDIANT,
            payload:error
        })
    }
}