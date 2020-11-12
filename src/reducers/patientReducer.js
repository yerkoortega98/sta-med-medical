import { types } from "../types/types";


const initialState={
    isChecking:false,
    infoPaciente:null,
    enfermedades:[],
    compensacion:[],
    laboratorio:[],
    molestias: [],
    tratamiento: [],
    preguntas: [], 
    avisos: [], 
    sintomas: []
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
        
        case types.setPreguntas:
            return{
                ...state,
                preguntas:[...action.payload]
            }

        case types.clearPreguntas:
            return{
                ...state,
                preguntas:[]
            }

        case types.setAvisos:
            return{
                ...state,
                avisos:[...action.payload]
            }

        case types.clearAvisos:
            return{
                ...state,
                avisos:[]
            }

        case types.setSintomas:
            return{
                ...state,
                sintomas:[...action.payload]
            }

        case types.clearSintomas:
            return{
                ...state,
                sintomas:[]
            }
    
        
        default:
            return state;
    }
}