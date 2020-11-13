export const evaluacionDireccionSube = ( X,A,B,C,D)=>{


    if( X < A){
        const resultado = "bajito";

        return resultado;
    }else if( A <= X && X < B ){
        const resultado = "bueno";

        return resultado;
    }else if( B <= X && X < C){
        const resultado = "mediocre";

        return resultado;
    }else if( C <= X && X < D ){
        const resultado = "malo";

        return resultado;
    }else if( D <= X){
        const resultado = "peligroso";
        
        return resultado;
    }
}

export const evaluacionDireccionBaja = (X,A,B,C,D)=>{


    if( X >= A){
        const resultado = "bajito";

        return resultado;
    }else if( A > X && X >= B ){
        const resultado = "bueno";

        return resultado;
    }else if( B > X && X >= C){
        const resultado = "mediocre";

        return resultado;
    }else if( C > X && X >= D ){
        const resultado = "malo";

        return resultado;
    }else if( D > X){
        const resultado = "peligroso";
        
        return resultado;
    }
}

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

// Validacion parametros compensacion
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

// Validacion de la info preguntas y respuestas
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


// Validacion Sintoma
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

// Validacion Avisos
export const validacionAvisos = (aviso) => {
    if(aviso){
        const resultado = aviso.molestia;
        return resultado;
    }else{
        const resultado = "Ninguno";
        return resultado;
    }
}
