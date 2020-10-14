import { types } from "../types/types";


const initialState={
    rutPatient:null,
    namePatient:'',
    agePatient:'',
    disease:[],
    active:null
    }

export const patientReducer = (state = initialState,action)=>{
    switch (action.type){

        case types.patientActive:
            return{
                ...state,
                active:{
                    ...action.payload
                }
            }

        case types.patientLoad:
            return{
                ...state
            }
        case types.patientLoadDisease:
            return{
                ...state,
                disease:[...action.payload]
            }
        default:
            return state;
    }
}







