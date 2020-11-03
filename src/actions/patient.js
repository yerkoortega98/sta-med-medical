import axios from 'axios';
import Swal from 'sweetalert2';

import {types} from '../types/types';
import { Agenda } from '../data/AgendaPacientes'


// Primero realizamos una peticion al BackEnd para buscar el rut en la lista de pacientes existentes
// Si existe, el resultado lo guardamos en una variable llamada infoPaciente, que luego es llamada como parametro en el action setInfoPaciente
// Que este carga la informacion guardada en infoPaciente, en el store.
export const startLoadInfoPaciente = (rutPaciente) => { 
    return async(dispatch)=> {   

       
             // Alerta
            Swal.fire({
            title:'Cargando información...',
            text:'Por Favor espere...',
            allowOutsideClick:false,
            willOpen: ()=>{
                Swal.showLoading();
            }
        });
        
        await axios({
            method:'GET',
            url:'http://localhost:4000/getInfoPaciente'
        }).then(res =>{

            const respuesta = res.data;

            const infoPaciente = respuesta.filter(info => info.rut === rutPaciente)

            // Disparamos el action para cargar la informacion en el store.
            dispatch(setInfoPaciente(infoPaciente));
            // Disparamos el action para comenzar a cargar las enfermedades del paciente.
            dispatch(startLoadEnfermedad(rutPaciente));

            // Disparamos el action para comenzar a cargar la compensacion del paciente
            dispatch(startLoadCompensacion(rutPaciente));

            // Disparamos el action para comenzar a cargar la compensacion del paciente con datos no en duro
            dispatch(startLoadCompensacionn());

        }).catch(e => {
            Swal.fire('Error',e.message,'error');
        })
        setTimeout(() => {
            dispatch(patientIsCheckingTrue());
            Swal.close();
        }, 1000);
        
    }
}

// Action para cargar informacion de el paciente en el store
export const setInfoPaciente = (infoPaciente)=>({
    type:types.setInfoPaciente,
    payload:infoPaciente
})

// Action para comenzar a cargar enfermedades del paciente respectivo
export const startLoadEnfermedad = (rutPaciente) => {
    return async(dispatch)=>{
       
        await axios({
            method:'GET',
            url:'http://localhost:4000/getEnfermedadPaciente'
        }).then(res =>{
            const respuesta = res.data;
            

            const enfermedades = respuesta.filter( enf => enf.rut === rutPaciente)

            dispatch( setEnfermedad(enfermedades));  

            // dispatch(patientIsCheckingTrue());
        })
    }
}
// Action para cargar enfermedades en el store.
export const setEnfermedad = (enfermedades)=>({
    type: types.setEnfermedad,
    payload:enfermedades
})

// ------------------------------------------------------------------\\
// Action para cargar compensacion estatica

export const startLoadCompensacion = (rutPaciente)=> {
    return (dispatch)=>{
        
        const compensacionSnap =  Agenda.filter( agenda => agenda.rutPaciente === rutPaciente); 

        dispatch(setCompensacion(compensacionSnap));
    }  
}

export const setCompensacion = (compensacion)=>({
    type:types.setCompensacion,
    payload:compensacion
})

//action oara cargar datos relevantes para la compensación. Luego hay que borrar una "N".
export const startLoadCompensacionn = () => {
    return async(dispatch) => {
        await axios({
            method:'GET',
            url: 'http://localhost:4000/getCompensacion'
        }).then(res => {
            const respuesta = res.data;
            console.log(respuesta);
        })
    }
}

// Action para limpiar el estado de enfermedades del store.
export const clearActiveEnfermedad = ()=>({
    type:types.clearActiveEnfermedad
})

// Action para limpiar el estado de infoPaciente del store.
export const clearInfoPaciente = ()=>({
    type:types.clearInfoPaciente
})

export const clearCompensacion = ()=>({
    type:types.clearCompensacion
})

export const patientIsCheckingTrue = ()=>({
    type:types.patientIsCheckingTrue
})

export const patientIsCheckingFalse = ()=>({
    type:types.patientIsCheckingFalse
})




