

// import { loadDiary } from '../helpers/loadDiary'
import { loadDiary } from '../helpers/loadDiary';
import {types} from '../types/types'


// Creamos un nuevo action ascyncronico para retornar una lista de pacientes solo del medico correspondiente.
export const startLoadingDiary = ( uid ) =>{
   
    return async(dispatch)=>{

        const diary = await loadDiary(uid);
           
        dispatch(setDiary( diary ));
    
   }    
}

export const setDiary = ( diary ) =>({
    type: types.diaryLoad,
    payload: diary
})

export const diaryLogoutCleaning =()=> ({
    type: types.diaryLogoutCleaning
})
