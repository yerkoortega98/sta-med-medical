import React, {Fragment, useState} from 'react';
import {  useSelector } from 'react-redux';
import { 
    calcCompensacionDiabetes, 
    calcCompensacionEpilepsia, 
    calcCompensacionHipotiroihismo, 
    calcCompensacionInsuficienciaRenal, 
    calcCompesacionHTA,
    calcCompensacionParkinson,
    calcCompensacionAsma,calcCompensacionEpoc,calcCompensacionArtrosis, calcCompensacionDilipdemia
 } from '../../helpers/compensacion';
import { 
    iconizacionDM, 
    iconizacionEpoc, 
    iconizacionHipotir, 
    iconizacionIRC, 
    iconizacionDisAte, 
    iconizacionHTA, 
    iconizacionEpi, 
    iconizacionPark, 
    iconizacionAsma, 
    iconizacionArtrosis
} from '../../helpers/laboratorio';
import {validarInfoExamen, validarParametrosComp} from '../../helpers/validarParametrosComp'



import { validacionExamen } from '../../helpers/validacionExamen';
import { VainasModal } from './VainasModal';
import { VainasModalLab } from './VainasModalLab';


export const MedicalVainas = ({...props}) => {

    // const dispatch = useDispatch();
    
    const { infoPaciente } = useSelector(state => state.pacienteActivo);

    const { compensacion,laboratorio, tratamiento } = useSelector(state => state.pacienteActivo);

    const { peso,edad }= infoPaciente[0];

   
    const iconizacion=()=>{
       
        if(props.enfermedad === 'DM'){
            const respuesta = compensacion.filter(com => com.nombre_param === 'Hemoglobina glicosilada')
            const respuesta2 = compensacion.filter(com => com.nombre_param === 'Glicemia')

            // arreglo de examenes correspondientes a la condicion cronica DM
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'DM');

            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'DM');

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Calculo de laboratorio

            // Validacion examen 1
            const examen1 = respLab[0];
            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
            console.log("DataExamen1:",dataExamen1)
           
            // Validacion examen 2
            const examen2 = respLab[1];
            const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen(examen2,compensacion);
            console.log("DataExamen2:",dataExamen2)
            // Validacion examen 3
            const examen3 = respLab[2];            
            const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen(examen3,compensacion);
            console.log("DataExamen3:",dataExamen3)
            // Validacion examen 4
            const examen4 = respLab[3];
            const {resultado:dataExamen4,infoLaboratorio:laboratorio4} = validarInfoExamen(examen4,compensacion);
            // Validacion examen 5
            const examen5 = respLab[4];
            const {resultado:dataExamen5,infoLaboratorio:laboratorio5} = validarInfoExamen(examen5,compensacion);
          
            // Validacion examen 6
            const examen6 = respLab[5];
            const {resultado:dataExamen6,infoLaboratorio:laboratorio6} = validarInfoExamen(examen6,compensacion);
            
            // Validacion examen 7
            const examen7 = respLab[6];
            const {resultado:dataExamen7,infoLaboratorio:laboratorio7} = validarInfoExamen(examen7,compensacion);
           
            const resultadoLaboratorio = iconizacionDM(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5,dataExamen6,dataExamen7)
            
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Calculo para la compensacion
            // Validacion de parametro Hemoglobina
            const parametroHemoglobina = respuesta[0];
            const hbglic = validarParametrosComp(parametroHemoglobina);

            const parametroGlicemia = respuesta2[0];
            const glicemia = validarParametrosComp(parametroGlicemia);

            const parametrosCompensacion = [
                {
                    nombre_param:'Glicemia',
                    valor:glicemia
                },{
                    nombre_param:'Hemoglobica Glicosilada',
                    valor:hbglic
                }
            ]
    
            const parametrosLaboratorio=[laboratorio1,laboratorio2,laboratorio3,laboratorio4,laboratorio5,laboratorio6,laboratorio7]

            const resultado = calcCompensacionDiabetes(hbglic, glicemia);
        
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio};
            
        }else if(props.enfermedad === 'Hipotir'){


            const respuestaTSH = compensacion.filter(com => com.nombre_param === 'TSH');
            const respuestaT4L = compensacion.filter(com => com.nombre_param === 'T4 libre');
            
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Hipotir');

            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Hipotir');

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Calculo de laboratorio

             // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 1


            const examen1 = respLab[0];

            const validarInfoExamen1 =() =>{
                    if(examen1){
                        const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen1,compensacion);
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

            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen1();
           

             // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 2



            const examen2 = respLab[1];

            const validarInfoExamen2 =() =>{
                if(examen2){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen2,compensacion);
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

            const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen2();
          
             // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 3


            const examen3 = respLab[2];

            const validarInfoExamen3 =() =>{
                if(examen3){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen3,compensacion);
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

            const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen3();
           
             // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 4

            const examen4 = respLab[3];

            const validarInfoExamen4 =() =>{
                if(examen4){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen4,compensacion);
                    return {resultado,infoLaboratorio};
                }else{
                    const resultado = "malo";
                    const infoLaboratorio = {
                        nombre_param: 'Examen inexistente',
                        valor: 0
                    }
                    
                    return {resultado,infoLaboratorio};                }
            }

            const {resultado:dataExamen4,infoLaboratorio:laboratorio4} = validarInfoExamen4();
           

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 4

            const examen5 = respLab[4];

            const validarInfoExamen5 =() =>{
                if(examen5){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen5,compensacion);
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

            const {resultado:dataExamen5,infoLaboratorio:laboratorio5} = validarInfoExamen5();

            const resultadoLaboratorio = iconizacionHipotir(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5);

            
           
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // calculoCompensacion.



            const parametroTSH = respuestaTSH[0];
            const TSH = validarParametrosComp(parametroTSH);
          
            const parametroT4L = respuestaT4L[0];   
            const T4L = validarParametrosComp(parametroT4L);

            const parametrosCompensacion=[
                {
                    nombre_param:'T4L',
                    valor:T4L
                },{
                    nombre_param:'TSH',
                    valor:TSH
                }
            ]

            const parametrosLaboratorio=[laboratorio1,laboratorio2,laboratorio3,laboratorio4,laboratorio5];

            const resultado = calcCompensacionHipotiroihismo( TSH, T4L );
           
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio};

        }else if(props.enfermedad === 'IRC'){

            const respuestaMicroalb = compensacion.filter(com => com.nombre_param === 'Microalbuminuria')
            const respuestaUremia = compensacion.filter(com => com.nombre_param === 'Uremia')
            const respuestaHombre = compensacion.filter(com => com.nombre_param === 'Creatinina hombre')
            const respuestaMujer = compensacion.filter(com => com.nombre_param === 'Creatinina mujer')
            const respuestaNureico = compensacion.filter(com => com.nombre_param === 'Nitrogeno ureico')

            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'IRC');

            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'IRC');

            

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Calculo de laboratorio

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 1
            const examen1 = respLab[0];

            const validarInfoExamen1 =() =>{
                if(examen1){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen1,compensacion);

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

            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen1();
           

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 2
            const examen2 = respLab[1];

            const validarInfoExamen2 = () =>{
                if(examen2){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen2,compensacion);

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

            const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen2();
           
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 3
            const examen3 = respLab[2];

            const validarInfoExamen3 = () =>{
                if(examen3){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen3,compensacion);

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

            const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen3();
         
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 4

            const examen4 = respLab[3];

            const validarInfoExamen4 = () =>{
                if(examen4){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen4,compensacion);

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

            const {resultado:dataExamen4,infoLaboratorio:laboratorio4} = validarInfoExamen4();
           

             // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 5

            const examen5 = respLab[4];

            const validarInfoExamen5 = () =>{
                if(examen5){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen5,compensacion);

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

            const {resultado:dataExamen5,infoLaboratorio:laboratorio5} = validarInfoExamen5();
           

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 6
            const examen6 = respLab[5];

            const validarInfoExamen6 = () =>{
                if(examen6){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen6,compensacion);

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

            const {resultado:dataExamen6,infoLaboratorio:laboratorio6} = validarInfoExamen6();

            const resultadoLaboratorio = iconizacionIRC(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5,dataExamen6);

            
                       

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
            const microalbuminuria =  validarParametrosComp(parametroMicroalb);

            // Validacion de parametros Uremia
            const parametroUremia = respuestaUremia[0]
            const uremia =  validarParametrosComp(parametroUremia);

            // Validacion de parametros Nureico.

            const parametroNureico = respuestaNureico[0];

            const nureico =  validarParametrosComp(parametroNureico);

            const parametrosCompensacion = [
                {
                    nombre_param:'Microalbuminuria',
                    valor:microalbuminuria
                },{
                    nombre_param:'Nitrogeno Ureico',
                    valor:nureico
                },{
                    nombre_param:'Uremia',
                    valor:uremia
                },{
                    nombre_param:'VFG',
                    valor:VFG
                }
            ]

            const parametrosLaboratorio=[laboratorio1,laboratorio2,laboratorio3,laboratorio4,laboratorio5,laboratorio6]

            const resultado = calcCompensacionInsuficienciaRenal( uremia, VFG, microalbuminuria, nureico );
       
          
            return {resultado, resultadoLaboratorio, resTratamiento, parametrosCompensacion, parametrosLaboratorio};

        }else if(props.enfermedad === 'Dis/ATE'){
            const respuestaHombre = compensacion.filter(com => com.nombre_param === 'HDL hombres')
            const respuestaMujer = compensacion.filter(com => com.nombre_param === 'HDL mujeres')
            const respuestaLDL = compensacion.filter(com => com.nombre_param === 'LDL');
            const respuestaTG = compensacion.filter(com => com.nombre_param === 'Trigliceridos')
            const respuestaCT = compensacion.filter(com => com.nombre_param === 'Colesterol')

              // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Calculo de laboratorio


            
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Dis/ATE');

            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Dis/ATE');
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 1
            const examen1 = respLab[0];

            const validarInfoExamen1 =() =>{
                if(examen1){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen1,compensacion);

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

            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen1();

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 2
            const examen2 = respLab[1];

            const validarInfoExamen2 = () =>{
                if(examen2){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen2,compensacion);

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

            const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen2();
           
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 3
            const examen3 = respLab[2];

            const validarInfoExamen3 = () =>{
                if(examen3){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen3,compensacion);

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

            const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen3();
          
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 4

            const examen4 = respLab[3];

            const validarInfoExamen4 = () =>{
                if(examen4){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen4,compensacion);

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

            const {resultado:dataExamen4,infoLaboratorio:laboratorio4} = validarInfoExamen4();
          

             // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 5

            const examen5 = respLab[4];

            const validarInfoExamen5 = () =>{
                if(examen5){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen5,compensacion);

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

            const {resultado:dataExamen5,infoLaboratorio:laboratorio5} = validarInfoExamen5();
          

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 6
            const examen6 = respLab[5];

            const validarInfoExamen6 = () =>{
                if(examen6){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen6,compensacion);

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

            const {resultado:dataExamen6,infoLaboratorio:laboratorio6} = validarInfoExamen6();
           

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 7

            const examen7 = respLab[6];
            const validarInfoExamen7 = () =>{
                if(examen7){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen7,compensacion);

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

            const {resultado:dataExamen7,infoLaboratorio:laboratorio7} = validarInfoExamen7();

            const resultadoLaboratorio = iconizacionDisAte(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5,dataExamen6, dataExamen7);

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
            const LDL =  validarParametrosComp(parametroLDL);

            const parametroTG = respuestaTG[0];
            const TG =  validarParametrosComp(parametroTG);
        
            const parametroCT = respuestaCT[0]
            const CT =  validarParametrosComp(parametroCT);

            const parametrosCompensacion = [
               {
                   nombre_param:'Colesterol',
                   valor:CT
               },{
                   nombre_param:'Trigliceridos',
                   valor:TG
               },{
                   nombre_param:'LDL',
                   valor:LDL
               },{
                   nombre_param: 'HDL',
                    valor:HDL
               }  
            ]

            const parametrosLaboratorio=[laboratorio1,laboratorio2,laboratorio3,laboratorio4,laboratorio5, laboratorio6,laboratorio7]

            const resultado = calcCompensacionDilipdemia(CT,TG,LDL,HDL,sexo);

            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio};

        }else if(props.enfermedad === 'HTA'){
            
            const respuestaPAS = compensacion.filter(com=> com.nombre_param === 'pa_sist');
            const respuestaPAD = compensacion.filter(com=> com.nombre_param === 'pa_dist');

            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'HTA');

            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'HTA');

            //-----------------------------------------------------------------------------------//

            //Validacion de laboratorio
            
            // Validacion examen 1
            const examen1 = respLab[0];

            const validarInfoExamen1 =() =>{
                if(examen1){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen1,compensacion);

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

            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen1();
         

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 2
            const examen2 = respLab[1];

            const validarInfoExamen2 = () =>{
                if(examen2){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen2,compensacion);

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

            const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen2();
            
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 3
            const examen3 = respLab[2];

            const validarInfoExamen3 = () =>{
                if(examen3){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen3,compensacion);

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

            const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen3();
         
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 4

            const examen4 = respLab[3];

            const validarInfoExamen4 = () =>{
                if(examen4){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen4,compensacion);

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

            const {resultado:dataExamen4,infoLaboratorio:laboratorio4} = validarInfoExamen4();
           

             // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 5

            const examen5 = respLab[4];

            const validarInfoExamen5 = () =>{
                if(examen5){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen5,compensacion);

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

            const {resultado:dataExamen5,infoLaboratorio:laboratorio5} = validarInfoExamen5();
            

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 6
            const examen6 = respLab[5];

            const validarInfoExamen6 = () =>{
                if(examen6){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen6,compensacion);

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

            const {resultado:dataExamen6,infoLaboratorio:laboratorio6} = validarInfoExamen6();
           
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 7

            const examen7 = respLab[6];
            const validarInfoExamen7 = () =>{
                if(examen7){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen7,compensacion);

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

            const {resultado:dataExamen7,infoLaboratorio:laboratorio7} = validarInfoExamen7();      
            
            const resultadoLaboratorio = iconizacionHTA(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5,dataExamen6,dataExamen7);
            
            //------------------------------------------------------------------------------------//

            //Calculo de compensacion.

            const parametroPAS = respuestaPAS[0];
            const PAS =  validarParametrosComp(parametroPAS);
            
            const parametroPAD = respuestaPAD[0];
            const PAD =  validarParametrosComp(parametroPAD);
            
            const parametrosCompensacion =[
                {
                    nombre_param:'Presion Sistolica',
                    valor:PAS
                },
                {
                    nombre_param:'Presión Distolica',
                    valor:PAD
                }
            ]

            const parametrosLaboratorio=[laboratorio1,laboratorio2,laboratorio3,laboratorio4,laboratorio5, laboratorio6,laboratorio7]

            const resultado = calcCompesacionHTA(PAS,PAD);
         
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio};

        }else if(props.enfermedad === 'Epi'){

            const respuestPTJEEpilepsia = compensacion.filter(com=> com.nombre_param === 'PTJEEpilepsia');
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Epi');
            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Epi');

            //Validacion de laboratorio
            
            // Validacion examen 1
            const examen1 = respLab[0];

            const validarInfoExamen1 =() =>{
                if(examen1){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen1,compensacion);

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

            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen1();
            

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 2
            const examen2 = respLab[1];

            const validarInfoExamen2 = () =>{
                if(examen2){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen2,compensacion);

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

            const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen2();
          
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 3
            const examen3 = respLab[2];

            const validarInfoExamen3 = () =>{
                if(examen3){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen3,compensacion);

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

            const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen3();
         
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 4

            const examen4 = respLab[3];

            const validarInfoExamen4 = () =>{
                if(examen4){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen4,compensacion);

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

            const {resultado:dataExamen4,infoLaboratorio:laboratorio4} = validarInfoExamen4();

            const resultadoLaboratorio = iconizacionEpi(dataExamen1,dataExamen2,dataExamen3,dataExamen4);

            //Calcular comendacion
           
            const parametroPTJEEpilepsia = respuestPTJEEpilepsia[0];
            const PTJEEpilepsia =  validarParametrosComp(parametroPTJEEpilepsia);
            
            const parametrosCompensacion = [
                {
                    nombre_param:'Puntaje Epilepsia',
                    valor:PTJEEpilepsia
                }
            ]
            const parametrosLaboratorio=[laboratorio1,laboratorio2,laboratorio3,laboratorio4]

            const resultado = calcCompensacionEpilepsia(PTJEEpilepsia);
          
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio};

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

            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Park');

            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Park');

            //Validacion de laboratorio
            
            // Validacion examen 1
            const examen1 = respLab[0];

            const validarInfoExamen1 =() =>{
                if(examen1){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen1,compensacion);

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

            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen1();

            const resultadoLaboratorio = iconizacionPark(dataExamen1);

            // --------------------------------------------------------------------------------------------------------------------------------------\\
            // --------------------------------------------------------------------------------------------------------------------------------------\\
            //calculo de compensación
            // --------------------------------------------------------------------------------------------------------------------------------------\\
            // --------------------------------------------------------------------------------------------------------------------------------------\\
            
            
            const temblor = validarParametrosComp(parametroTemblor);
            const equilibrio = validarParametrosComp(parametroEquilibrio);
            const rigidez = validarParametrosComp(parametroRigidez);     
            const lento = validarParametrosComp(parametroLento); 
            const arrastre = validarParametrosComp(parametroArrastre); 

            const suma = temblor + equilibrio + rigidez + lento + arrastre;

            const parametrosCompensacion = [
                {
                    nombre_param:'Arrastre',
                    valor:arrastre
                },{
                    nombre_param:'Temblor',
                    valor:temblor
                },{
                    nombre_param:'Equilibrio',
                    valor:equilibrio
                },{
                    nombre_param:'Lento',
                    valor:lento
                },{
                    nombre_param:'Rigidez',
                    valor:rigidez
                }
            ]

            const parametrosLaboratorio=[laboratorio1]

            const resultado = calcCompensacionParkinson( temblor,equilibrio,rigidez,lento,arrastre,suma);
            
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio};

        }else if(props.enfermedad === 'Asma'){

            const respuestaPTJEAsma = compensacion.filter(com=> com.nombre_param === 'PTJEAsma');

            const parametroPTJEAsma = respuestaPTJEAsma[0];

            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Asma');

            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Asma');

            //validacion laboratorio 

            // Validacion examen 1
            const examen1 = respLab[0];

            const validarInfoExamen1 =() =>{
                if(examen1){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen1,compensacion);

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

            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen1();
            //Calcular compensacion

            const resultadoLaboratorio = iconizacionAsma(dataExamen1);

            const PTJEAsma = validarParametrosComp(parametroPTJEAsma);

            const parametrosCompensacion =[
                {
                    nombre_param:'PTJEAsma',
                    valor:PTJEAsma
                }
            ]

            const parametrosLaboratorio=[laboratorio1]

            const resultado = calcCompensacionAsma(PTJEAsma);
          
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio};

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

            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Artrosis');

            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Artrosis');

            //validacion laboratorio 

            // Validacion examen 1
            const examen1 = respLab[0];

            const validarInfoExamen1 =() =>{
                if(examen1){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen1,compensacion);

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

            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen1();

            const resultadoLaboratorio = iconizacionArtrosis(dataExamen1);


            //Calcular compensacion
            
            const validarRX = () => {
                if (parametroRx) {
                    const Rx = true;
                    
                    return Rx;
                } else {
                    const Rx = false;
                    
                    return Rx;
                }
            }
            
            const Rx = validarRX();
            const D = validarParametrosComp(parametroDolor);
            const C = validarParametrosComp(parametroCrujido);
            const B = validarParametrosComp(parametroBloqueo);
            const I = validarParametrosComp(parametroInflamacion);
            
            const PTJEArtrosis = D + C + B + I;
            
            const parametrosCompensacion = [
                {
                    nombre_param:'Bloqueo',
                    valor: B
                },
                {
                    nombre_param:'Crujido',
                    valor:C
                },{
                    nombre_param:'Dolor',
                    valor:D
                },{
                    nombre_param:'Inflamación',
                    valor:I
                }
            ]

            const parametrosLaboratorio=[laboratorio1]

            const resultado = calcCompensacionArtrosis(PTJEArtrosis,Rx,D,C,B,I);

            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio};

        }else if(props.enfermedad === 'EPOC'){

            const respuestaPTJEEpoc = compensacion.filter(com=> com.nombre_param === 'PTJEEpoc');

            const parametroPTJEpoc = respuestaPTJEEpoc[0];

            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'EPOC');
            
            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'EPOC');

            //validacion laboratorio 

            // Validacion examen 1
            const examen1 = respLab[0];

            const validarInfoExamen1 =() =>{
                if(examen1){
                    const {resultadoValidacionDireccion:resultado,infoLaboratorio} = validacionExamen(examen1,compensacion);

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

            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen1();

            const resultadoLaboratorio = iconizacionEpoc(dataExamen1);

            //calcular compensación 
            const PTJEEpoc = validarParametrosComp(parametroPTJEpoc);

            const parametrosCompensacion = [
                {
                    nombre_param:'Puntaje Epoc',
                    valor:PTJEEpoc
                }
            ];

            const parametrosLaboratorio=[laboratorio1]

            const resultado = calcCompensacionEpoc(PTJEEpoc);
            return { resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio };
        }
    }   

    const resultIconizacion = iconizacion();

    const { resultado:result, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio } = resultIconizacion;

    // Activar modal
    const [infoCompensacion, setInfoCompensacion] = useState();
    const [infoLaboratorio, setInfoLaboratorio] = useState();
    
    const handleClick = ()=>{        
        setInfoCompensacion(parametrosCompensacion);
    }

    const handleClickLaboratorio = ()=>{        
        setInfoLaboratorio(parametrosLaboratorio);
    }

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
                                <p className="parrafo-compensacion">Compensación: <i  onClick={ handleClick } className={`${ result } fa-lg`}></i></p>
                                <p className="parrafo-laboratorio">Laboratorio: <i onClick={ handleClickLaboratorio }className={`${resultadoLaboratorio} fa-lg`}></i></p>
                                <p className="parrafo-nutricion">Nutrición: <i className="fas fa-times text-danger fa-lg"></i></p>
                                <p className="parrafo-sintomas">Sintomas: <i className="fas fa-times text-danger fa-lg"></i></p>
                                <p className="parrafo-avisos">Avisos:   <span className="text-success">Ninguno</span></p>
                            </div>
                            <div className="tituloTratamiento">
                                <p>Tratamiento:</p>
                            </div>
                            <div className="ContenidoTratamiento">
                                {
                                    (resTratamiento)
                                    &&
                                    resTratamiento.map(tra => (
                                        <li className="list-tratamiento" key={tra.nombre_breve}>{tra.nombre_breve} : {tra.dosis_diaria}</li> 
                                    ))
                                }
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

                <VainasModal key={props.enfermedad} parametros={infoCompensacion}/>
                <VainasModalLab key={props.enfermedad+91212} parametros={infoLaboratorio}/>
            </div>
        </Fragment>
    );
}

