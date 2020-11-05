import {types} from '../types/types';
import axios from 'axios';
import moment from 'moment'
// Creamos un nuevo action ascyncronico para retornar una lista de pacientes solo del medico correspondiente.
export const startLoadingDiary = ( uid ) =>{
    return async( dispatch )=>{
        await axios({
            method:'GET',
            url:'http://localhost:4000/getAgenda'
        }).then(res =>{
            
            const respuesta  = res.data;
            
            const agendaSnap = respuesta.filter( agenda => agenda.medicoRut === uid);
            const agenda=[];
    
            agendaSnap.forEach(snapHijo =>{
                
                const startConsulta = moment(snapHijo.start);
                const endConsulta = startConsulta.clone().add(20,'minutes');

                agenda.push({
                    uid:snapHijo.medicoRut,
                    rutPaciente:snapHijo.rut,
                    nombrePaciente:snapHijo.nombre,
                    start: startConsulta.toDate(),
                    end:endConsulta.toDate()
                })
            })
           
            dispatch(setDiary( agenda ));         
        })   
   }    
}

export const setDiary = ( diary ) =>({
    type: types.diaryLoad,
    payload: diary
})

export const diaryLogoutCleaning =()=> ({
    type: types.diaryLogoutCleaning
})

