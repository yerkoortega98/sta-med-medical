import { validacionExamen } from "./validacionExamen";

export  const validarParametrosComp = (parametro) => {
    if(parametro) {
        const {valor} = parametro;

        return valor;
    }else{
        const valor = 0;

        return valor;
    }
}

export const validarInfoExamen =(examen,compensacion) =>{
    if(examen){
        const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen,compensacion);

        return {resultado,infoLaboratorio};
    }else{
        const resultado = "malo";


        const infoLaboratorio = {
            nombre_param: 'Examen inexistente',
            valor: 0
        }
        
        return {resultado,infoLaboratorio};
    }
}

export const validarInfoPreguntas = (resPreguntas,pregunta) =>{
    if(!!pregunta){
    
        const validacionResPreguntas = ()=>{
            if(!!resPreguntas){
                
                const respuestaValidacionSintoma = validacionSintoma(resPreguntas,pregunta);
               
                return respuestaValidacionSintoma;
            }else{
                const respuestaValidacionSintoma = 0;
    
                return respuestaValidacionSintoma;    
            }
        } 

        const respuesta = validacionResPreguntas();
        return respuesta;
    }else{
        const respuestaValidacionSintoma = 0;

        return respuestaValidacionSintoma;
    }
}

const validacionSintoma = (resPreguntas,pregunta)=>{
                
    const [respData] = resPreguntas.filter(res => res.nombre_pregunta === pregunta.nombre)

    const validacionRespuesta = ()=>{
        if(respData){
           const respuesta_sintoma = respData.respuesta_sintoma;

           return respuesta_sintoma;
        }else{
            const respuesta_sintoma = 0;

            return respuesta_sintoma;
        }
    }

    const valorSintoma = validacionRespuesta();


    const validacionPuntaje = ()=>{
        if(valorSintoma === 0){
            const respuesta = pregunta.puntaje_nada;
            return respuesta;
        }else if(valorSintoma === 1){
            const respuesta = pregunta.puntaje_leve;
            return respuesta;
        }else if(valorSintoma === 2){
            const respuesta = pregunta.puntaje_mod;
            return respuesta;
        }else if(valorSintoma >= 3){
            const respuesta = pregunta.puntaje_grave;
            return respuesta;
        }
    }

    const respuesta = validacionPuntaje();

    return respuesta;
   
}
