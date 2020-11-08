import axios from 'axios';
import Swal from 'sweetalert2';
import {types} from '../types/types';



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
        }).then (res =>{

            const respuesta = res.data;

            const infoPaciente = respuesta.filter(info => info.rut === rutPaciente)

            dispatch(setInfoPaciente(infoPaciente));   
           


        }).catch(e => {
            Swal.fire('Error',e.message,'error');
        })
        
          
        await dispatch(startLoadEnfermedad(rutPaciente));
        await dispatch(startLoadCompensacion(rutPaciente));
        await dispatch(startLoadLaboratorio());
        await dispatch(startLoadMolestia(rutPaciente));
        await dispatch(startLoadTratamiento(rutPaciente));
        
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

// Action para limpiar el estado de infoPaciente del store.
export const clearInfoPaciente = ()=>({
    type:types.clearInfoPaciente
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

            
        })
    }
}
// Action para cargar enfermedades en el store.
export const setEnfermedad = (enfermedades)=>({
    type: types.setEnfermedad,
    payload:enfermedades
})

// Action para limpiar el estado de enfermedades del store.
export const clearActiveEnfermedad = ()=>({
    type:types.clearActiveEnfermedad
})

//action oara cargar datos relevantes para la compensación. Luego hay que borrar una "N".
export const startLoadCompensacion = (rutPaciente) => {
    return async(dispatch) => {
        await axios({
            method:'GET',
            url: 'http://localhost:4000/getCompensacion'
        }).then(res => {
            const respuesta = res.data;
            
            const compensacion = respuesta.filter( compensacion => compensacion.rut === rutPaciente )

            dispatch(setCompensacion(compensacion));

        })
    }
}

export const setCompensacion = (compensacion)=>({
    type: types.setCompensacion,
    payload: compensacion
})

export const clearCompensacion = ()=>({
    type:types.clearCompensacion
}) 

export const startLoadLaboratorio = ()=>{
    return async(dispatch)=>{

        await axios({
            method:'GET',
            url:'http://localhost:4000/getLaboratorio'
        }).then(res =>{
            const laboratorio = res.data;

            dispatch(setLaboratorio(laboratorio));

        }).catch(e =>{
            console.log(e);
        })

    }
}

export const setLaboratorio = (laboratorio)=>({
    type:types.setLaboratorio,
    payload: laboratorio
})

export const clearLaboratorio = ()=>({
    type:types.clearLaboratorio
})

export const startLoadMolestia = (rutPaciente) => {
    return async(dispatch) => {
        await axios({
            method: 'GET', 
            url:'http://localhost:4000/getMolestias'
        }).then(res => {
            const respuesta = res.data;

            const molestias = respuesta.filter( mol => mol.rut === rutPaciente);

            dispatch(setMolestias(molestias));

        })
    }
}

export const setMolestias = (molestias)=>({
    type:types.setMolestias,
    payload: molestias
})

export const clearMolestias = ()=>({
    type:types.clearMolestias
})


export const startLoadTratamiento = (rutPaciente) => {
    return async(dispatch) => {
        await axios({
            method: 'GET', 
            url:'http://localhost:4000/getTratamiento'
        }).then(res => {
            const respuesta = res.data;

            const tratamientos = respuesta.filter( tra => tra.rut === rutPaciente);

            dispatch(setTratamientos(tratamientos));

        })
    }
}

export const setTratamientos = (tratamientos)=>({
    type:types.setTratamiento,
    payload: tratamientos
})

export const clearTratamientos = ()=>({
    type:types.clearTratamiento
})



export const patientIsCheckingTrue = ()=>({
    type:types.patientIsCheckingTrue
})

export const patientIsCheckingFalse = ()=>({
    type:types.patientIsCheckingFalse
})




