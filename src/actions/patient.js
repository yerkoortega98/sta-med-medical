import {types} from '../types/types';
import axios from 'axios';

export const startLoadEnfermedad = () => {
    return async(dispatch,getState)=>{
        const {activePatient} = getState().diary;

        const {rutPaciente} = activePatient;

        console.log(rutPaciente)
        axios({
            method:'GET',
            url:'http://localhost:4000/getEnfermedadPaciente'
        }).then(res =>{
            const respuesta = res.data;
            

            const rutCorrecto = respuesta.filter( enf => enf.rut === rutPaciente)

            dispatch(setEnfermedad(rutCorrecto));
        })
    }
}

export const setEnfermedad = (enfermedades)=>({
    type: types.setEnfermedad,
    payload:enfermedades
})

export const clearActiveEnfermedad = ()=>({
    type:types.clearActiveEnfermedad
})