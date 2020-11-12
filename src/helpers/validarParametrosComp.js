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
        if(!!resPreguntas){
            const respuestaValidacionSintoma = validacionSintoma(resPreguntas,pregunta);
        
            return respuestaValidacionSintoma;
        }else{
            const respuestaValidacionSintoma = 0;

            return respuestaValidacionSintoma;    
        }
    }else{
        const respuestaValidacionSintoma = 0;

        return respuestaValidacionSintoma;
    }
}

const validacionSintoma = (resPreguntas,pregunta)=>{
                
    const [respData] = resPreguntas.filter(res => res.nombre_pregunta === pregunta.nombre)

    if(respData.respuesta_sintoma === 0){
        const respuesta = pregunta.puntaje_nada;
        return respuesta;
    }else if(respData.respuesta_sintoma === 1){
        const respuesta = pregunta.puntaje_leve;
        return respuesta;
    }else if(respData.respuesta_sintoma === 2){
        const respuesta = pregunta.puntaje_mod;
        return respuesta;
    }else if(respData.respuesta_sintoma === 3){
        const respuesta = pregunta.puntaje_grave;
        return respuesta;
    }
}
