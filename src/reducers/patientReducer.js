import { types } from "../types/types";


const initialState={
    isChecking:false,
    infoPaciente:null,
    enfermedades:[],
    compensacion:[],
    laboratorio:[],
    molestias: [],
    tratamiento: []
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

        case types.setInfoPaciente:
            return{
                ...state,
                infoPaciente:[...action.payload]
            }
        
        case types.clearInfoPaciente:
            return{
                ...state,
                infoPaciente:null
            }
        
        case types.patientIsCheckingTrue:
            return{
                ...state,
                isChecking:true
            }
        
        case types.patientIsCheckingFalse:
            return{
                ...state,
                isChecking:false
            }
        
        case types.setCompensacion:
            return{
                ...state,
                compensacion:[...action.payload]
            }
        
        case types.clearCompensacion:
            return{
                ...state,
                compensacion:[]
            }

        case types.setLaboratorio:
            return{
                ...state,
                laboratorio:[...action.payload]
            }

        case types.clearLaboratorio:
            return{
                ...state,
                laboratorio:[]
            }

        case types.setMolestias:
            return{
                ...state,
                molestias:[...action.payload]
            }

        case types.clearMolestias:
            return{
                ...state,
                molestias:[]
            }

        case types.setTratamiento:
            return{
                ...state,
                tratamiento:[...action.payload]
            }

        case types.clearTratamiento:
            return{
                ...state,
                tratamiento:[]
            }
        
        
        default:
            return state;
    }
}