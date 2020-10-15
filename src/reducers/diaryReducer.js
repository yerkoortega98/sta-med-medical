import {types} from '../types/types';


const initialState={
    diary:[],
    activePatient:null
}

export const diaryReducer = ( state=initialState, action )=>{
    
    switch (action.type) {
        
        case types.diarySetActive:
            return{
                ...state,
                activePatient:action.payload
            }
        case types.diaryLoad:
            return {
                ...state,
                diary:[ ...action.payload ]
            }

        case types.diaryLogoutCleaning:
            return {
                ...state,
                diary:[]
            }
      
        default:
            return state;
    }
}