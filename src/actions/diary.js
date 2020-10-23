// import { loadDiary } from '../helpers/loadDiary'
import { loadDiary } from '../helpers/loadDiary';
import {types} from '../types/types'
// import axios from 'axios';

// initialState=[];

// Creamos un nuevo action ascyncronico para retornar una lista de pacientes solo del medico correspondiente.
export const startLoadingDiary = ( uid ) =>{
   
    return async(dispatch)=>{

        // const [datos, setDatos] = useState(initialState);

        const diary = await loadDiary(uid);
        
        // const diary = () => axios.get('http://localhost:4000/medical/diary')
        // .then(res =>{
        //     const respuesta = res.diary;
        //     setDatos(respuesta);
        // })
        // diary();

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

export const diarySetActive = ( diary )=>({
    type:types.diarySetActive,
    payload:diary
})

export const diaryClearActiveDiary=()=>({
    type: types.diaryClearActiveDiary
})
