import { evaluacionDireccionBaja, evaluacionDireccionSube } from "./laboratorio";


export const validacionExamen =( examen,compensacion )=>{


    if(examen.nivel_prioridad === 1){
        
        const [respData] = compensacion.filter(com => com.nombre_param === examen.nombre_examen);   

        // Se valida si encuentra el examen correspondiente.
        const validacionPasoUno =()=>{
            if(respData){
                const paso1 = "bueno";
                const infoLaboratorio = {
                    nombre_param: respData.nombre_param,
                    valor: respData.valor
                }
                return {paso1, infoLaboratorio};
            }else{
                const paso1 = "malo";
                const infoLaboratorio = {
                    nombre_param: "Examen inexistente",
                    valor: 0
                }
                return {paso1, infoLaboratorio};
            }
        }
        const {paso1:respuestaValidacionUno, infoLaboratorio} = validacionPasoUno();

        const validacionDireccion = ()=>{
            // Si se encuentra el examen, se pasa a validar la direccion.
            if(respuestaValidacionUno === 'bueno'){


                // Se valida cual es la direccion de el examen
                const respDir = () =>{
                    if(examen.direccion === "sube"){
                        const resultado = evaluacionDireccionSube(respData.valor,examen.corte_sub,examen.corte_normal,examen.corte_E1,examen.corte_E2);
                        return resultado;
                    }else{
                        const resultado = evaluacionDireccionBaja(respData.valor,examen.corte_sub,examen.corte_normal,examen.corte_E1,examen.corte_E2);
                        return resultado;
                    }
                }

                const resultado = respDir();

                return resultado;

            }else if(respuestaValidacionUno === 'malo'){
                const resultado = "malo";                            
                return resultado;
            }
        }

        const resultadoValidacionDireccion = validacionDireccion();

     
        return {resultadoValidacionDireccion,infoLaboratorio};
    }else if(examen.nivel_prioridad === 2){
                    
        const [respData] = compensacion.filter(com => com.nombre_param === examen.nombre_examen);
      
        // Se valida si encuentra el examen correspondiente.
        const validacionPasoUno =()=>{
            if(respData){
                const paso1 = true;
                const infoLaboratorio = {
                    nombre_param: respData.nombre_param,
                    valor: respData.valor
                }
                return {paso1,infoLaboratorio};
            }else{
                const paso1 = "bueno";
                const infoLaboratorio = {
                    nombre_param: "Examen inexistente",
                    valor: 0
                }
                return {paso1,infoLaboratorio};
            }
        }

        const {paso1:respuestaValidacionUno, infoLaboratorio} = validacionPasoUno();

        const validacionDireccion = ()=>{
            // Si se encuentra el examen, se pasa a validar la direccion.
            if(respuestaValidacionUno === true){


                // Se valida cual es la direccion de el examen
                const respDir = () =>{
                    if(examen.direccion === "sube"){
                        const resultado = evaluacionDireccionSube(respData.valor,examen.corte_sub,examen.corte_normal,examen.corte_E1,examen.corte_E2);
                        return resultado;
                    }else{
                        const resultado = evaluacionDireccionBaja(respData.valor,examen.corte_sub,examen.corte_normal,examen.corte_E1,examen.corte_E2);
                        return resultado;
                    }
                }

                const resultado = respDir();

                return resultado;
            }else if(respuestaValidacionUno === 'bueno'){
                const resultado = "bueno";                            
                return resultado;
            }
        }

        const resultadoValidacionDireccion = validacionDireccion();
      
    
        return {resultadoValidacionDireccion,infoLaboratorio};

    }else if(examen.nivel_prioridad === 3){
    
        const resultadoValidacionDireccion = "malo";
        
        const infoLaboratorio = {
            nombre_param: 'Examen inexistente',
            valor: 0
        }
        return {resultadoValidacionDireccion,infoLaboratorio};

    }else if(examen.nivel_prioridad === 4){

        const resultadoValidacionDireccion = "malo";
       
        const infoLaboratorio = {
            nombre_param: 'Examen inexistente',
            valor: 0
        }
        return {resultadoValidacionDireccion,infoLaboratorio};

    }
    
}