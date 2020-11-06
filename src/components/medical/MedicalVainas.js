import React, {Fragment} from 'react';
import {  useSelector } from 'react-redux';
// import { uiOpenModal } from '../../actions/ui';
import { 
    calcCompensacionDiabetes, 
    calcCompensacionEpilepsia, 
    calcCompensacionHipotiroihismo, 
    calcCompensacionInsuficienciaRenal, 
    calcCompesacionHTA,
    calcCompensacionParkinson,
    calcCompensacionAsma,calcCompensacionEpoc,calcCompensacionArtrosis, calcCompensacionDilipdemia
 } from '../../helpers/compensacion';
import { evaluacionDireccionSube, evaluacionDireccionBaja } from '../../helpers/laboratorio';
// import { VainasModal } from './VainasModal';


export const MedicalVainas = ({...props}) => {
    
    const { infoPaciente } = useSelector(state => state.pacienteActivo);

    const { compensacion,laboratorio } = useSelector(state => state.pacienteActivo);

    const { peso,edad }= infoPaciente[0];

   
    const iconizacion=()=>{
       
        if(props.enfermedad === 'DM'){
            const respuesta = compensacion.filter(com => com.nombre_param === 'Hemoglobina glicosilada')
            const respuesta2 = compensacion.filter(com => com => com.nombre_param === 'Glicemia')

            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'DM');

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Calculo de laboratorio

            const examen1 = respLab[0];
            const examen2 = respLab[1];
            // const examen3 = respLab[2]; es nivel prioridad 4
            const examen4 = respLab[3];
            const examen5 = respLab[4];
            // const examen6 = respLab[5];
            // const examen7 = respLab[6];

            // Validamos la prioridad del examen
            const validacionExamen1 =()=>{
                if(examen1.nivel_prioridad === 1){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen1.nombre_examen);

                  

                    // Se valida si encuentra el examen correspondiente.
                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = "bueno";

                            return paso1;
                        }else{
                            const paso1 = "malo";

                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    // corte_sub: A
                    // corte_normal: B
                    // corte_E1: C
                    // corte_E2: D

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === 'bueno'){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen1.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen1.corte_sub,examen1.corte_normal,examen1.corte_E1,examen1.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen1.corte_sub,examen1.corte_normal,examen1.corte_E1,examen1.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen1 = validacionExamen1();

            console.log(examen1.nombre_examen,": ",dataExamen1);

            // Validacion Examen 2
            const validacionExamen2 =()=>{
                if(examen1.nivel_prioridad === 1){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen2.nombre_examen);
                    
                  

                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = "bueno";

                            return paso1;
                        }else{
                            const paso1 = "malo";

                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    // corte_sub: A
                    // corte_normal: B
                    // corte_E1: C
                    // corte_E2: D

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === 'bueno'){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen2.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen2.corte_sub,examen2.corte_normal,examen2.corte_E1,examen2.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen2.corte_sub,examen2.corte_normal,examen2.corte_E1,examen2.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen2 = validacionExamen2();

            console.log(examen2.nombre_examen,": ",dataExamen2);

            // Examen 4
            
            const validacionExamen4 =()=>{
                if(examen1.nivel_prioridad === 1){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen4.nombre_examen);

                  

                    // Se valida si encuentra el examen correspondiente.
                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = "bueno";

                            return paso1;
                        }else{
                            const paso1 = "malo";

                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    // corte_sub: A
                    // corte_normal: B
                    // corte_E1: C
                    // corte_E2: D

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === 'bueno'){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen4.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen4.corte_sub,examen4.corte_normal,examen4.corte_E1,examen4.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen4.corte_sub,examen4.corte_normal,examen4.corte_E1,examen4.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen4 = validacionExamen4();

            console.log(examen4.nombre_examen,": ",dataExamen4);

            // Examen numero 5
            const validacionExamen5 =()=>{
                if(examen5.nivel_prioridad === 1){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen5.nombre_examen);

                    

                    // Se valida si encuentra el examen correspondiente.
                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = "bueno";

                            return paso1;
                        }else{
                            const paso1 = "malo";

                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    // corte_sub: A
                    // corte_normal: B
                    // corte_E1: C
                    // corte_E2: D

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === 'bueno'){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen5.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen5.corte_sub,examen5.corte_normal,examen5.corte_E1,examen5.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen5.corte_sub,examen5.corte_normal,examen5.corte_E1,examen5.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen5 = validacionExamen5();

            console.log(examen5.nombre_examen,": ",dataExamen5);



            
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Calculo para la compensacion
            
            const parametroHemoglobina = respuesta[0];
            
            const validacionHBGLIC = ()=>{
                if (parametroHemoglobina) {
                    
                    const { valor:hbglic } = parametroHemoglobina
                    return hbglic
                }else{
                    
                    const hbglic=0;
                    return hbglic;
                }
            }

            const hbglic = validacionHBGLIC();
            

            const parametroGlicemia = respuesta2[0];

            const validacionGlicemia = ()=>{
                
                if (parametroGlicemia) {
                    
                    const { valor:glicemia} = parametroGlicemia;        

                    return glicemia;
                } else {
                    const glicemia = 0;
                    return glicemia;
                }
            }

            const glicemia = validacionGlicemia();
            
            

            const resultado = calcCompensacionDiabetes(hbglic, glicemia);
            
           
            return {resultado};
            
        }else if(props.enfermedad === 'Hipotir'){


            const respuestaTSH = compensacion.filter(com => com.nombre_param === 'TSH');
            const respuestaT4L = compensacion.filter(com => com => com.nombre_param === 'T4 libre');

            
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Hipotir');

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Calculo de laboratorio

            const examen1 = respLab[2];
            const examen2 = respLab[3];

            // Validamos la prioridad del examen
            const validacionExamen1 =()=>{
                if(examen1.nivel_prioridad === 1){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen1.nombre_examen);

                  

                    // Se valida si encuentra el examen correspondiente.
                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = "bueno";
                            return paso1;
                        }else{
                            const paso1 = "malo";
                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    // corte_sub: A
                    // corte_normal: B
                    // corte_E1: C
                    // corte_E2: D

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === 'bueno'){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen1.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen1.corte_sub,examen1.corte_normal,examen1.corte_E1,examen1.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen1.corte_sub,examen1.corte_normal,examen1.corte_E1,examen1.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen1 = validacionExamen1();

            console.log(examen1.nombre_examen,": ",dataExamen1);

            // Validacion Examen 2
            const validacionExamen2 =()=>{
                if(examen2.nivel_prioridad === 2){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen2.nombre_examen);
                  
                    // Se valida si encuentra el examen correspondiente.
                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = true;
                            return paso1;
                        }else{
                            const paso1 = "bueno";
                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === true){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen2.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen2.corte_sub,examen2.corte_normal,examen2.corte_E1,examen2.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen2.corte_sub,examen2.corte_normal,examen2.corte_E1,examen2.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen2 = validacionExamen2();

            console.log(examen2.nombre_examen,": ",dataExamen2);
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // calculoCompensacion.



            const parametroTSH = respuestaTSH[0];

            const validacionTSH = ()=>{
                if (parametroTSH) {
                    const { valor:TSH } = parametroTSH;

                    return TSH; 
                } else {
                    const TSH = 0;
                    return TSH;
                    
                }
            }
            const TSH = validacionTSH();

            const parametroT4L = respuestaT4L[0];
            const validacionT4L = ()=>{
                if (parametroT4L) {
                    const { valor:T4L} = parametroT4L;
                    return T4L;
                } else {
                    
                    const T4L = 0;

                    return T4L;
                }
            }

            const T4L = validacionT4L();

            const resultado = calcCompensacionHipotiroihismo( TSH, T4L );
           
            return{resultado};

        }else if(props.enfermedad === 'IRC'){

            const respuestaMicroalb = compensacion.filter(com => com.nombre_param === 'Microalbuminuria')
            const respuestaUremia = compensacion.filter(com => com.nombre_param === 'Uremia')
            const respuestaHombre = compensacion.filter(com => com.nombre_param === 'Creatinina hombre')
            const respuestaMujer = compensacion.filter(com => com.nombre_param === 'Creatinina mujer')
            const respuestaNureico = compensacion.filter(com => com.nombre_param === 'Nitrogeno ureico')

            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'IRC');

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Calculo de laboratorio

            const examen1 = respLab[1];
            const examen2 = respLab[2];
            const examen3 = respLab[3];
            const examen4 = respLab[4];
            const examen5 = respLab[5];
            const examen6 = respLab[6];

             // Validamos la prioridad del examen
             const validacionExamen1 =()=>{
                if(examen1.nivel_prioridad === 1){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen1.nombre_examen);

                  

                    // Se valida si encuentra el examen correspondiente.
                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = "bueno";
                            return paso1;
                        }else{
                            const paso1 = "malo";
                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    // corte_sub: A
                    // corte_normal: B
                    // corte_E1: C
                    // corte_E2: D

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === 'bueno'){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen1.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen1.corte_sub,examen1.corte_normal,examen1.corte_E1,examen1.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen1.corte_sub,examen1.corte_normal,examen1.corte_E1,examen1.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen1 = validacionExamen1();

            console.log(examen1.nombre_examen,": ",dataExamen1);


             // Validamos la prioridad del examen
             const validacionExamen2 =()=>{
                if(examen2.nivel_prioridad === 1){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen2.nombre_examen);

                  

                    // Se valida si encuentra el examen correspondiente.
                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = "bueno";
                            return paso1;
                        }else{
                            const paso1 = "malo";
                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    // corte_sub: A
                    // corte_normal: B
                    // corte_E1: C
                    // corte_E2: D

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === 'bueno'){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen2.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen2.corte_sub,examen2.corte_normal,examen2.corte_E1,examen2.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen2.corte_sub,examen2.corte_normal,examen2.corte_E1,examen2.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen2 = validacionExamen2();

            console.log(examen2.nombre_examen,": ",dataExamen2);

             // Validamos la prioridad del examen
             const validacionExamen3 =()=>{
                if(examen1.nivel_prioridad === 1){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen3.nombre_examen);

                  

                    // Se valida si encuentra el examen correspondiente.
                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = "bueno";
                            return paso1;
                        }else{
                            const paso1 = "malo";
                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    // corte_sub: A
                    // corte_normal: B
                    // corte_E1: C
                    // corte_E2: D

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === 'bueno'){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen3.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen3.corte_sub,examen3.corte_normal,examen3.corte_E1,examen3.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen3.corte_sub,examen3.corte_normal,examen3.corte_E1,examen3.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen3 = validacionExamen3();

            console.log(examen3.nombre_examen,": ",dataExamen3);

             // Validamos la prioridad del examen
             const validacionExamen4 =()=>{
                if(examen1.nivel_prioridad === 1){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen4.nombre_examen);

                  

                    // Se valida si encuentra el examen correspondiente.
                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = "bueno";
                            return paso1;
                        }else{
                            const paso1 = "malo";
                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    // corte_sub: A
                    // corte_normal: B
                    // corte_E1: C
                    // corte_E2: D

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === 'bueno'){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen4.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen4.corte_sub,examen4.corte_normal,examen4.corte_E1,examen4.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen4.corte_sub,examen4.corte_normal,examen4.corte_E1,examen4.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen4 = validacionExamen4();

            console.log(examen4.nombre_examen,": ",dataExamen4);

             // Validamos la prioridad del examen
             const validacionExamen5 =()=>{
                if(examen5.nivel_prioridad === 1){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen5.nombre_examen);

                  

                    // Se valida si encuentra el examen correspondiente.
                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = "bueno";
                            return paso1;
                        }else{
                            const paso1 = "malo";
                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    // corte_sub: A
                    // corte_normal: B
                    // corte_E1: C
                    // corte_E2: D

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === 'bueno'){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen5.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen5.corte_sub,examen5.corte_normal,examen5.corte_E1,examen5.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen5.corte_sub,examen5.corte_normal,examen5.corte_E1,examen5.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen5 = validacionExamen5();

            console.log(examen5.nombre_examen,": ",dataExamen5);

             // Validamos la prioridad del examen
             const validacionExamen6 =()=>{
                if(examen6.nivel_prioridad === 1){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen6.nombre_examen);

                  

                    // Se valida si encuentra el examen correspondiente.
                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = "bueno";
                            return paso1;
                        }else{
                            const paso1 = "malo";
                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === 'bueno'){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen6.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen6.corte_sub,examen6.corte_normal,examen6.corte_E1,examen6.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen6.corte_sub,examen6.corte_normal,examen6.corte_E1,examen6.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen6 = validacionExamen6();

            console.log(examen6.nombre_examen,": ",dataExamen6);

            

             // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // calculoCompensacion.



            const validacionSexoHombre = respuestaHombre[0];
            const validacionSexoMujer = respuestaMujer[0];
            const sexo = ()=>{
                if(validacionSexoHombre){
                    
                    const {valor:creatinina} = validacionSexoHombre;

                    const VFG= ((140-edad)*peso)/(72*creatinina);
                    return VFG;

                }else if(validacionSexoMujer){

                    const {valor:creatinina} = validacionSexoMujer;

                    const VFG = ((140-edad)*peso*(0.85))/(72*creatinina);
                    return VFG;
                }
            }
            const VFG = sexo();

            // Validacion de parametro microAlbuminuria
            const parametroMicroalb = respuestaMicroalb[0]

            const validacionMicroalb = ()=>{
                if(parametroMicroalb){
                    const {valor:microalbuminuria} = parametroMicroalb;
                    return microalbuminuria;
                }
            }
            const microalbuminuria = validacionMicroalb();

            // Validacion de parametros Uremia
            const parametroUremia = respuestaUremia[0]
           
            const validacionUremia = ()=>{
                if (parametroUremia) {
                    const {valor:uremia} = parametroUremia;
                    return uremia;
                }
            }

            const uremia = validacionUremia();

            // Validacion de parametros Nureico.

            const parametroNureico = respuestaNureico[0];
            const validacionNureico = ()=>{
                if(parametroNureico){
                    const {valor:nureico} = parametroNureico;
                    return nureico
                }
            }

            const nureico = validacionNureico();

            const resultado = calcCompensacionInsuficienciaRenal( uremia, VFG, microalbuminuria, nureico );
       
          
            return{resultado};   
        }else if(props.enfermedad === 'Dis/ATE'){
            const respuestaHombre = compensacion.filter(com => com.nombre_param === 'HDL hombres')
            const respuestaMujer = compensacion.filter(com => com.nombre_param === 'HDL mujeres')
            const respuestaLDL = compensacion.filter(com => com.nombre_param === 'LDL');
            const respuestaTG = compensacion.filter(com => com.nombre_param === 'Trigliceridos')
            const respuestaCT = compensacion.filter(com => com.nombre_param === 'Colesterol')

            
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Dis/ATE');
            console.log(respLab)


            const examen1 = respLab[1];
            const examen2 = respLab[2];
            const examen3 = respLab[3];
            const examen4 = respLab[4];
            const examen5 = respLab[6];
             // Validamos la prioridad del examen
             const validacionExamen1 =()=>{
                if(examen1.nivel_prioridad === 1){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen1.nombre_examen);

                  

                    // Se valida si encuentra el examen correspondiente.
                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = "bueno";

                            return paso1;
                        }else{
                            const paso1 = "malo";

                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    // corte_sub: A
                    // corte_normal: B
                    // corte_E1: C
                    // corte_E2: D

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === 'bueno'){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen1.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen1.corte_sub,examen1.corte_normal,examen1.corte_E1,examen1.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen1.corte_sub,examen1.corte_normal,examen1.corte_E1,examen1.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen1 = validacionExamen1();

            console.log(examen1.nombre_examen,": ",dataExamen1);

            // Validamos la prioridad del examen
            const validacionExamen2 =()=>{
                if(examen2.nivel_prioridad === 1){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen2.nombre_examen);

                  

                    // Se valida si encuentra el examen correspondiente.
                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = "bueno";

                            return paso1;
                        }else{
                            const paso1 = "malo";

                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    // corte_sub: A
                    // corte_normal: B
                    // corte_E1: C
                    // corte_E2: D

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === 'bueno'){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen2.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen2.corte_sub,examen2.corte_normal,examen2.corte_E1,examen2.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen2.corte_sub,examen2.corte_normal,examen2.corte_E1,examen2.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen2 = validacionExamen2();

            console.log(examen2.nombre_examen,": ",dataExamen2);

            // Validamos la prioridad del examen
            const validacionExamen3 =()=>{
                if(examen3.nivel_prioridad === 1){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen3.nombre_examen);

                  

                    // Se valida si encuentra el examen correspondiente.
                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = "bueno";

                            return paso1;
                        }else{
                            const paso1 = "malo";

                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    // corte_sub: A
                    // corte_normal: B
                    // corte_E1: C
                    // corte_E2: D

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === 'bueno'){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen3.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen3.corte_sub,examen3.corte_normal,examen3.corte_E1,examen3.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen3.corte_sub,examen3.corte_normal,examen3.corte_E1,examen3.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen3 = validacionExamen3();

            console.log(examen3.nombre_examen,": ",dataExamen3);

            // Validamos la prioridad del examen
            const validacionExamen4 =()=>{
                if(examen4.nivel_prioridad === 1){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen4.nombre_examen);

                  

                    // Se valida si encuentra el examen correspondiente.
                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = "bueno";

                            return paso1;
                        }else{
                            const paso1 = "malo";

                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    // corte_sub: A
                    // corte_normal: B
                    // corte_E1: C
                    // corte_E2: D

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === 'bueno'){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen1.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen4.corte_sub,examen4.corte_normal,examen4.corte_E1,examen4.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen4.corte_sub,examen4.corte_normal,examen4.corte_E1,examen4.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen4 = validacionExamen4();

            console.log(examen4.nombre_examen,": ",dataExamen4);

            // Validamos la prioridad del examen
            const validacionExamen5 =()=>{
                if(examen5.nivel_prioridad === 1){
                    
                    const [respData] = compensacion.filter(com => com.nombre_param === examen5.nombre_examen);

                  

                    // Se valida si encuentra el examen correspondiente.
                    const validacionPasoUno =()=>{
                        if(respData){
                            const paso1 = "bueno";

                            return paso1;
                        }else{
                            const paso1 = "malo";

                            return paso1;
                        }
                    }

                    const respuestaValidacionUno = validacionPasoUno();

                    // corte_sub: A
                    // corte_normal: B
                    // corte_E1: C
                    // corte_E2: D

                    const validacionDireccion = ()=>{
                        // Si se encuentra el examen, se pasa a validar la direccion.
                        if(respuestaValidacionUno === 'bueno'){


                            // Se valida cual es la direccion de el examen
                            const respDir = () =>{
                                if(examen1.direccion === "sube"){
                                    const resultado = evaluacionDireccionSube(respData.valor,examen5.corte_sub,examen5.corte_normal,examen5.corte_E1,examen5.corte_E2);
                                    return resultado;
                                }else{
                                    const resultado = evaluacionDireccionBaja(respData.valor,examen5.corte_sub,examen5.corte_normal,examen5.corte_E1,examen5.corte_E2);
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

                    return resultadoValidacionDireccion;
                }
            }

            const dataExamen5 = validacionExamen5();

            console.log(examen5.nombre_examen,": ",dataExamen5);


            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Calculo de laboratorio




            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // calculoCompensacion.
            

            const validacionSexoHombre = respuestaHombre[0];
            const validacionSexoMujer = respuestaMujer[0];
            const validacionSexo = ()=>{
                if(validacionSexoHombre){
                    const {valor:HDL} = validacionSexoHombre;
                    const sexo = 'Masculino'
                  
                    return {HDL,sexo};
                }else if(validacionSexoMujer){
                    const {valor:HDL} = validacionSexoMujer;
                    const sexo = 'Femenino'
                    
                    return {HDL,sexo};
                }else{
                    const HDL=0;
                    const sexo='Masculino'

                    return {HDL,sexo}
                }
            }

            const {HDL,sexo} = validacionSexo();


            const parametroLDL = respuestaLDL[0];

            const validacionLDL = ()=>{
                if (parametroLDL) {
                    const {valor:LDL} = parametroLDL;

                    return LDL;

                } else {
                    const LDL = 0;
                    return LDL;   
                }
            }
            const LDL = validacionLDL();


            const parametroTG = respuestaTG[0];
            const validacionTG = ()=>{
                if (parametroTG) {
                    const {valor:TG} = parametroTG;

                    return TG;
                } else {
                    const TG = 0;
                    return TG; 
                }
            }

            const TG = validacionTG();
           
           

            const parametroCT = respuestaCT[0]

            const validacionCT = ()=>{
                if (parametroCT) {
                    const {valor:CT} = parametroCT;
                    return CT;
                } else {
                    const CT = 0;
                    return CT; 
                }
            }

            const CT = validacionCT();

            const resultado = calcCompensacionDilipdemia(CT,TG,LDL,HDL,sexo);
            return {resultado};

        }else if(props.enfermedad === 'HTA'){
            
            const respuestaPAS = compensacion.filter(com=> com.nombre_param === 'pa_sist');
            const respuestaPAD = compensacion.filter(com=> com.nombre_param === 'pa_dist');
            
            const parametroPAS = respuestaPAS[0];
            const parametroPAD = respuestaPAD[0];

            const validacionPAS = ()=>{
                if(parametroPAS){
                    const { valor:PAS } = parametroPAS;
                    return PAS;
                }else{
                    const PAS = 0;
                    return PAS;
                }
            };

            const PAS = validacionPAS();

            const validacionPAD = ()=>{
                if(parametroPAD){
                    const {valor:PAD} = parametroPAD;
                    return PAD;
                }else{
                    const PAD = 0;
                    return PAD;
                }
            };

            const PAD = validacionPAD();
            const resultado = calcCompesacionHTA(PAS,PAD);
         
            return { resultado }; 

        }else if(props.enfermedad === 'Epi'){

            const respuestPTJEEpilepsia = compensacion.filter(com=> com.nombre_param === 'PTJEEpilepsia');

            const parametroPTJEEpilepsia = respuestPTJEEpilepsia[0];

            const validarPTJEEpilepsia = () => {
                if(parametroPTJEEpilepsia) {
                    const {valor:PTJEEpilepsia} = parametroPTJEEpilepsia;
                    return PTJEEpilepsia;
                }else{
                    const PTJEEpilepsia = 0;
                    return PTJEEpilepsia;
                }
            }

            const PTJEEpilepsia = validarPTJEEpilepsia();
            const resultado = calcCompensacionEpilepsia(PTJEEpilepsia);
          
            return {resultado};

        }else if(props.enfermedad === 'Park'){

            const respuestaTemblor = compensacion.filter(com => com.nombre_param === 'Temblor');
            const respuestaEquilibrio = compensacion.filter(com => com.nombre_param === 'Problema de equilibrio');
            const respuestaRigidez = compensacion.filter(com => com.nombre_param === 'Rigidez muscular');
            const respuestaLento = compensacion.filter(com => com.nombre_param === 'Movimiento lento');
            const respuestaArrastre = compensacion.filter(com => com.nombre_param === 'Arrastre de los pies');

            const parametroTemblor = respuestaTemblor[0];
            const parametroEquilibrio = respuestaEquilibrio[0];
            const parametroRigidez = respuestaRigidez[0];
            const parametroLento = respuestaLento[0];
            const parametroArrastre = respuestaArrastre[0];

            const validarTemblor = () => {
                if(parametroTemblor) {
                    const {valor:temblor} = parametroTemblor;

                    return temblor;
                }else{
                    const temblor = 0;
                    
                    return temblor;
                }
            }

            const validarEquilibrio = () => {
                if(parametroEquilibrio) {
                    const {valor:equilibrio} = parametroEquilibrio;

                    return equilibrio;
                }else{
                    const equilibrio = 0;
                    
                    return equilibrio;
                }
            }

            const validarRigidez = () => {
                if(parametroRigidez) {
                    const {valor:rigidez} = parametroRigidez;

                    return rigidez;
                }else{
                    const rigidez = 0;
                    
                    return rigidez;
                }
            }

            const validarLento = () => {
                if(parametroLento) {
                    const {valor:lento} = parametroLento;

                    return lento;
                }else{
                    const lento = 0;
                    
                    return lento;
                }
            }

            const validarArrastre = () => {
                if(parametroArrastre) {
                    const {valor:arrastre} = parametroArrastre;

                    return arrastre;
                }else{
                    const arrastre = 0;
                    
                    return arrastre;
                }
            }

            const temblor = validarTemblor();
            const equilibrio = validarEquilibrio(); 
            const rigidez = validarRigidez();
            const lento = validarLento();
            const arrastre = validarArrastre();

            const suma = temblor + equilibrio + rigidez + lento + arrastre;

            const resultado = calcCompensacionParkinson( temblor,equilibrio,rigidez,lento,arrastre,suma);
            
            return {resultado};

        }else if(props.enfermedad === 'Asma'){

            const respuestaPTJEAsma = compensacion.filter(com=> com.nombre_param === 'PTJEAsma');

            const parametroPTJEAsma = respuestaPTJEAsma[0];

            const validarPTJEAsma = () => {
                if(parametroPTJEAsma) {
                    const {valor:PTJEAsma} = parametroPTJEAsma;

                    return PTJEAsma;

                }else{
                    const PTJEAsma = 0;

                    return PTJEAsma;
                }
            }

            const PTJEAsma = validarPTJEAsma();

            const resultado = calcCompensacionAsma(PTJEAsma);
          
            return {resultado};

        }else if(props.enfermedad === 'Artrosis'){

            const respuestaRx = compensacion.filter(com => com.nombre_param === 'Rx');
            const respuestaDolor = compensacion.filter(com => com.nombre_param === 'Dolor articular');
            const respuestaCrujido = compensacion.filter(com => com.nombre_param === 'Crujido articular');
            const respuestaBloqueo = compensacion.filter(com => com.nombre_param === 'Bloqueo articular');
            const respuestaInflamacion = compensacion.filter(com => com.nombre_param === 'Inflamación articular');

            const parametroRx = respuestaRx[0];
            const parametroDolor = respuestaDolor[0];
            const parametroCrujido = respuestaCrujido[0];
            const parametroBloqueo = respuestaBloqueo[0];
            const parametroInflamacion = respuestaInflamacion[0];

            const validarRX = () => {
                if (parametroRx) {
                    const Rx = true;

                    return Rx;
                } else {
                    const Rx = false;

                    return Rx;
                }
            }

            const validarDolor = () => {
                if (parametroDolor) {
                    const Dolor = parametroDolor;

                    return Dolor;
                } else {
                    const Dolor = 0;

                    return Dolor;
                }
            }

            const validarCrujido = () => {
                if (parametroCrujido) {
                    const Crujido = parametroCrujido;

                    return Crujido;
                } else {
                    const Crujido = 0;

                    return Crujido;
                }
            }

            const validarBloqueo = () => {
                if (parametroBloqueo) {
                    const Bloqueo = parametroBloqueo;

                    return Bloqueo;
                } else {
                    const Bloqueo = 0;

                    return Bloqueo;
                }
            }

            const validarInflamacion = () => {
                if (parametroInflamacion) {
                    const Inflamacion = parametroInflamacion;

                    return Inflamacion;
                } else {
                    const Inflamacion = 0;

                    return Inflamacion;
                }
            }


            const Rx = validarRX();
            const D = validarDolor();
            const C = validarCrujido();
            const B = validarBloqueo();
            const I = validarInflamacion();

            const PTJEArtrosis = D + C + B + I;

            const resultado = calcCompensacionArtrosis(PTJEArtrosis,Rx,D,C,B,I);
           
            return {resultado};

        }else if(props.enfermedad === 'EPOC'){

            const respuestaPTJEEpoc = compensacion.filter(com=> com.nombre_param === 'PTJEEpoc');

            const parametroPTJEpoc = respuestaPTJEEpoc[0];

            const validarPTJEEpoc = () => {
                if(parametroPTJEpoc) {
                    const {valor:PTJEEpoc} = parametroPTJEpoc;

                    return PTJEEpoc;
                }else{
                    const PTJEEpoc = 0;

                    return PTJEEpoc;
                }
            }

            const PTJEEpoc = validarPTJEEpoc();

            const resultado = calcCompensacionEpoc(PTJEEpoc);
            return { resultado };
        }
    }   

    const resultIconizacion = iconizacion();

    const { resultado:result } = resultIconizacion;

    // // Activar modal
    // const handleClick = ()=>{
    //     dispatch( uiOpenModal() );
    // }


    return (
        <Fragment>
            <div className="conjunto_vainas">
                <div className="Vaina">
                    <div>
                        <div>
                            <p className="nombre_enfermedad">{props.enfermedad}</p>
                            <br/>
                            <br/>
                        </div>
                        <div className="ContenidoCompleto">
                            <div className="CheckParametros">
                                <p>Compensación <i  className={`fas ${ result }`}></i></p>
                                <p>Laboratorio <i className="far fa-question-circle text-primary"></i></p>
                                <p>Sintomas <i className="fas fa-times text-danger"></i></p>
                                <p>Avisos:   <span className="text-success">Ninguno</span></p>
                                <br/>
                            </div>
                            <div className="tituloTratamiento">
                                <p>Tratamiento:</p>
                            </div>
                            <div className="ContenidoTratamiento">
                                <p>Losartan: <span className="text-success">1 c/12</span></p>
                                <p>HCT:<span className="text-warning">1 c/dia</span></p>
                                <p>Amlodipina: <span className="text-success">0.5 c/12</span></p>
                                <p>Aspirina:<span className="text-success">1 c/dia</span></p>
                                <p>Atenolol: <span className="text-danger">1 c/dia</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Botones">
                    <button className="btn2 btn_vainas">
                        Mantener
                    </button>
                    <br/>
                    <section>
                        <div className="BotonCambio">Cambio</div>
                        <p>Sacar Atenolol
                            No hay IAM.
                            Reducir HCT a la mitad
                        </p>
                    </section>
                </div>
                {/* <VainasModal key={props.enfermedad} parametros={parametros} /> */}
            </div>
        </Fragment>

        
    );
}

