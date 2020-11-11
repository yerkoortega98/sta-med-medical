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