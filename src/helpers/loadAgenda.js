import axios from 'axios';

export const loadAgenda = ( rutMedico ) => {

    axios({
        method:'GET',
        url:'http://localhost:4000/getAgenda'
    }).then(res =>{
        
        const respuesta  = res.data;
        
        const agendaSnap = respuesta.filter( agenda => agenda.medicoRut === rutMedico);
        
        const agenda=[];

        agendaSnap.forEach(snapHijo =>{
            
            const start = snapHijo.start;
            const endConsulta = start.clone().add(20,'minutes');
            agenda.push({
                ...snapHijo,
                end:endConsulta
            })
        })

        return agenda;
    })
    
   
}