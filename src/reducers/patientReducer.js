// import {types} from '../types/types';

import { types } from "../types/types";


const initialState={
    infoPaciente:null,
    enfermedades:[],
    compensacion:null,
    laboratorio:null
}

export const patientReducer = ( state=initialState, action )=>{
    
    switch (action.type) {
        
        case types.setEnfermedad:
            return{
                ...state,
                enfermedades:[...action.payload]
            }

        case types.clearActiveEnfermedad:
            return{
                ...state,
                enfermedades:[]
            }
        
        default:
            return state;
    }
}