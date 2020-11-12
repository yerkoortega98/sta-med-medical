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
import { validacionAvisos } from '../../helpers/validacionAviso';
import { validarInfoExamen, validarInfoPreguntas, validarParametrosComp} from '../../helpers/validarParametrosComp'

// Modal
import { VainasModal } from './VainasModal';
import { VainasModalLab } from './VainasModalLab';
import { VainasModalSintomas } from './VainasModalSintomas';


export const MedicalVainas = ({...props}) => {

    // Activar modal
    const [infoCompensacion, setInfoCompensacion] = useState();
    const [infoLaboratorio, setInfoLaboratorio] = useState();
    const [infoSintomas, setInfoSintomas] = useState();

    const { compensacion,laboratorio, tratamiento, preguntas, avisos,sintomas } = useSelector(state => state.pacienteActivo);
    const { infoPaciente } = useSelector(state => state.pacienteActivo);
    
    const { peso,edad }= infoPaciente[0];

    const iconizacion=()=>{
       
        if(props.enfermedad === 'DM'){
             // Obtener tratamientos de la enfermedad de artrosis.
            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'DM');

            //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
            const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'DM');
            const infoAviso = resAvisos[0];
            const aviso = validacionAvisos(infoAviso);

            //filtro para buscar preguntas correspondientes a la condición cronica
            const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'DM');
            const respuestaPreg = sintomas.filter(sin => sin.abreviatura === 'DM');

            // Validacion pregunta 1
            const pregunta1 = respuestaPreg[0];
            const puntajeRespuesta1 = validarInfoPreguntas(resPreguntas,pregunta1);

            // Validacion pregunta 2
            const pregunta2 = respuestaPreg[1];
            const puntajeRespuesta2 = validarInfoPreguntas(resPreguntas,pregunta2);

            // Validacion pregunta 3
            const pregunta3 = respuestaPreg[2];
            const puntajeRespuesta3 = validarInfoPreguntas(resPreguntas,pregunta3);

            // Validacion pregunta 4
            const pregunta4 = respuestaPreg[3];
            const puntajeRespuesta4 = validarInfoPreguntas(resPreguntas,pregunta4);

            // Validacion pregunta 5
            const pregunta5 = respuestaPreg[4];
            const puntajeRespuesta5 = validarInfoPreguntas(resPreguntas,pregunta5);

            // Validacion pregunta 6
            const pregunta6 = respuestaPreg[5];
            const puntajeRespuesta6 = validarInfoPreguntas(resPreguntas,pregunta6);

            // Validacion pregunta 7
            const pregunta7= respuestaPreg[6];
            const puntajeRespuesta7 = validarInfoPreguntas(resPreguntas,pregunta7);

            // Validacion pregunta 8
            const pregunta8 = respuestaPreg[7];
            const puntajeRespuesta8 = validarInfoPreguntas(resPreguntas,pregunta8);

            const puntajeSintomas = puntajeRespuesta1+puntajeRespuesta2+puntajeRespuesta3+puntajeRespuesta4+puntajeRespuesta5+puntajeRespuesta6+puntajeRespuesta7+puntajeRespuesta8;

            
            console.log("Puntaje_sintomas:",puntajeSintomas);
            
            // Debes retornar iconoSintomas
            // const iconoSintomas = iconizacionSintomas(puntajeSintomas);
          
            // Calculo de laboratorio    
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'DM');
            
            // Validacion examen 1
            const examen1 = respLab[0];
            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
            
            // Validacion examen 2
            const examen2 = respLab[1];
            const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen(examen2,compensacion);
            
            // Validacion examen 3
            const examen3 = respLab[2];            
            const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen(examen3,compensacion);
            
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
            // Calculo para la compensacion

            // Validacion de parametro Hemoglobina
            const respuesta = compensacion.filter(com => com.nombre_param === 'Hemoglobina glicosilada')
            const parametroHemoglobina = respuesta[0];
            const hbglic = validarParametrosComp(parametroHemoglobina);

            // Validacion de parametro Glicemia
            const respuesta2 = compensacion.filter(com => com.nombre_param === 'Glicemia')
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
        
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso};
            
        }else if(props.enfermedad === 'Hipotir'){
             // Obtener tratamientos de la enfermedad de artrosis.
            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Hipotir');

            // Calculo de laboratorio           
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Hipotir');

            //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
            const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'Hipotir');
            const infoAviso = resAvisos[0];
            const aviso = validacionAvisos(infoAviso);

            //filtro para buscar preguntas correspondientes a la condición cronica
            const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'Hipotir');
            
            // Validacion examen 1
            const examen1 = respLab[0];
            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
            
            // Validacion examen 2
            const examen2 = respLab[1];
            const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen(examen2,compensacion);
            
            // Validacion examen 3
            const examen3 = respLab[2];
            const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen(examen3,compensacion);
           
            // Validacion examen 4
            const examen4 = respLab[3];
            const {resultado:dataExamen4,infoLaboratorio:laboratorio4} = validarInfoExamen(examen4,compensacion);
            
            // Validacion examen 4
            const examen5 = respLab[4];
            const {resultado:dataExamen5,infoLaboratorio:laboratorio5} = validarInfoExamen(examen5,compensacion);
            
            const resultadoLaboratorio = iconizacionHipotir(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5);   
            
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // calculoCompensacion.
            const respuestaTSH = compensacion.filter(com => com.nombre_param === 'TSH');
            const parametroTSH = respuestaTSH[0];
            const TSH = validarParametrosComp(parametroTSH);
            
            const respuestaT4L = compensacion.filter(com => com.nombre_param === 'T4 libre');
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
           
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso};

        }else if(props.enfermedad === 'IRC'){
             // Obtener tratamientos de la enfermedad de artrosis.
            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'IRC');
            
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Calculo de laboratorio
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'IRC');

            //filtro para buscar preguntas correspondientes a la condición cronica
            const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'IRC');

            //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
            const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'IRC');

            const infoAviso = resAvisos[0];
            const aviso = validacionAvisos(infoAviso);
            
            // Validacion examen 1
            const examen1 = respLab[0];
            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
            
            // Validacion examen 2
            const examen2 = respLab[1];
            const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen(examen2,compensacion);
            
            // Validacion examen 3
            const examen3 = respLab[2];
            const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen(examen3,compensacion);
                     
            // Validacion examen 4
            const examen4 = respLab[3];
            const {resultado:dataExamen4,infoLaboratorio:laboratorio4} = validarInfoExamen(examen4,compensacion);
            // Validacion examen 5
            const examen5 = respLab[4];
            const {resultado:dataExamen5,infoLaboratorio:laboratorio5} = validarInfoExamen(examen5,compensacion);
           
            // Validacion examen 6
            const examen6 = respLab[5];
            const {resultado:dataExamen6,infoLaboratorio:laboratorio6} = validarInfoExamen(examen6,compensacion);
            
            const resultadoLaboratorio = iconizacionIRC(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5,dataExamen6);
            
            // calculoCompensacion.
            const respuestaHombre = compensacion.filter(com => com.nombre_param === 'Creatinina hombre')
            const validacionSexoHombre = respuestaHombre[0];

            const respuestaMujer = compensacion.filter(com => com.nombre_param === 'Creatinina mujer')
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
            const respuestaMicroalb = compensacion.filter(com => com.nombre_param === 'Microalbuminuria')
            const parametroMicroalb = respuestaMicroalb[0]           
            const microalbuminuria =  validarParametrosComp(parametroMicroalb);
            
            // Validacion de parametros Uremia
            const respuestaUremia = compensacion.filter(com => com.nombre_param === 'Uremia')
            const parametroUremia = respuestaUremia[0]
            const uremia =  validarParametrosComp(parametroUremia);
            
            // Validacion de parametros Nureico.
            const respuestaNureico = compensacion.filter(com => com.nombre_param === 'Nitrogeno ureico')
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
       
          
            return {resultado, resultadoLaboratorio, resTratamiento, parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso};

        }else if(props.enfermedad === 'Dis/ATE'){
             // Obtener tratamientos de la enfermedad de artrosis.
            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Dis/ATE');
            
            // Calculo de laboratorio
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Dis/ATE');

            //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
            const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'Dis/ATE');
            const infoAviso = resAvisos[0];
            const aviso = validacionAvisos(infoAviso);

            //filtro para buscar preguntas correspondientes a la condición cronica
            const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'Dis/ATE');
            
            // Validacion examen 1
            const examen1 = respLab[0];
            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
            
            // Validacion examen 2
            const examen2 = respLab[1];
            const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen(examen2,compensacion);
            // Validacion examen 3
            const examen3 = respLab[2];
            const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen(examen3,compensacion);
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

            const resultadoLaboratorio = iconizacionDisAte(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5,dataExamen6, dataExamen7);
            
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // calculoCompensacion.
            
            const respuestaHombre = compensacion.filter(com => com.nombre_param === 'HDL hombres')
            const validacionSexoHombre = respuestaHombre[0];
            
            const respuestaMujer = compensacion.filter(com => com.nombre_param === 'HDL mujeres')
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
            
            const respuestaLDL = compensacion.filter(com => com.nombre_param === 'LDL');
            const parametroLDL = respuestaLDL[0];
            const LDL =  validarParametrosComp(parametroLDL);
            
            const respuestaTG = compensacion.filter(com => com.nombre_param === 'Trigliceridos')
            const parametroTG = respuestaTG[0];
            const TG =  validarParametrosComp(parametroTG);
            
            const respuestaCT = compensacion.filter(com => com.nombre_param === 'Colesterol')
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

            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso};

        }else if(props.enfermedad === 'HTA'){
             // Obtener tratamientos de la enfermedad de artrosis.
            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'HTA');

            //Validacion de laboratorio
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'HTA');

            //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
            const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'HTA');
            const infoAviso = resAvisos[0];
            const aviso = validacionAvisos(infoAviso);

            //filtro para buscar preguntas correspondientes a la condición cronica
            const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'HTA');
            
            // Validacion examen 1
            const examen1 = respLab[0];
            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
            // Validacion examen 2
            const examen2 = respLab[1];
            const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen(examen2,compensacion);
            // Validacion examen 3
            const examen3 = respLab[2];
            const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen(examen3,compensacion);
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
            
            const resultadoLaboratorio = iconizacionHTA(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5,dataExamen6,dataExamen7);
            
            //Calculo de compensacion.
            const respuestaPAS = compensacion.filter(com=> com.nombre_param === 'pa_sist');
            const parametroPAS = respuestaPAS[0];
            const PAS =  validarParametrosComp(parametroPAS);
            
            const respuestaPAD = compensacion.filter(com=> com.nombre_param === 'pa_dist');
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
         
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso};

        }else if(props.enfermedad === 'Epi'){

             // Obtener tratamientos de la enfermedad de artrosis.
            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Epi');
            
            //Validacion de laboratorio
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Epi');

            //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
            const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'Epi');
            const infoAviso = resAvisos[0];
            const aviso = validacionAvisos(infoAviso);

            //filtro para buscar preguntas correspondientes a la condición cronica
            const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'Epi');
            
            // Validacion examen 1
            const examen1 = respLab[0];
            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
            // Validacion examen 2
            const examen2 = respLab[1];
            const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen(examen2,compensacion);
            // Validacion examen 3
            const examen3 = respLab[2];
            const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen(examen3,compensacion);
            // Validacion examen 4
            const examen4 = respLab[3];
            const {resultado:dataExamen4,infoLaboratorio:laboratorio4} = validarInfoExamen(examen4,compensacion);
            
            const resultadoLaboratorio = iconizacionEpi(dataExamen1,dataExamen2,dataExamen3,dataExamen4);
            
            //Calcular comendacion
            const respuestPTJEEpilepsia = compensacion.filter(com=> com.nombre_param === 'PTJEEpilepsia');
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
          
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso};

        }else if(props.enfermedad === 'Park'){
             // Obtener tratamientos de la enfermedad de artrosis.
            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Park');
            
            //Validacion de laboratorio
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Park');

            //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
            const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'Park');
            const infoAviso = resAvisos[0];
            const aviso = validacionAvisos(infoAviso);

            //filtro para buscar preguntas correspondientes a la condición cronica
            const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'Park');
            
            // Validacion examen 1
            const examen1 = respLab[0];
            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
            
            const resultadoLaboratorio = iconizacionPark(dataExamen1);
            
            //calculo de compensación        
            const respuestaTemblor = compensacion.filter(com => com.nombre_param === 'Temblor');
            const parametroTemblor = respuestaTemblor[0];
            const temblor = validarParametrosComp(parametroTemblor);
            
            const respuestaEquilibrio = compensacion.filter(com => com.nombre_param === 'Problema de equilibrio');
            const parametroEquilibrio = respuestaEquilibrio[0];
            const equilibrio = validarParametrosComp(parametroEquilibrio);
            
            const respuestaRigidez = compensacion.filter(com => com.nombre_param === 'Rigidez muscular');
            const parametroRigidez = respuestaRigidez[0];
            const rigidez = validarParametrosComp(parametroRigidez); 
            
            const respuestaLento = compensacion.filter(com => com.nombre_param === 'Movimiento lento');
            const parametroLento = respuestaLento[0];
            const lento = validarParametrosComp(parametroLento); 
            
            const respuestaArrastre = compensacion.filter(com => com.nombre_param === 'Arrastre de los pies');
            const parametroArrastre = respuestaArrastre[0];
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
            
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso};

        }else if(props.enfermedad === 'Asma'){
            // Obtener tratamientos de la enfermedad de artrosis.
            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Asma');

            //validacion laboratorio 
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Asma');

            //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
            const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'Asma');
            const infoAviso = resAvisos[0];
            const aviso = validacionAvisos(infoAviso);

            //filtro para buscar preguntas correspondientes a la condición cronica
            const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'Asma');
            
            // Validacion examen 1
            const examen1 = respLab[0];
            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
            const resultadoLaboratorio = iconizacionAsma(dataExamen1);
            
            //Calcular compensacion
            // Validacion compensacion Parametro Puntaje asma
            const respuestaPTJEAsma = compensacion.filter(com=> com.nombre_param === 'PTJEAsma');
            const parametroPTJEAsma = respuestaPTJEAsma[0];
            const PTJEAsma = validarParametrosComp(parametroPTJEAsma);
            
            //Creacion de arreglo que contiene objetos necesarios para mostrar en el modal de compensacion. 
            const parametrosCompensacion =[
                {
                    nombre_param:'PTJEAsma',
                    valor:PTJEAsma
                }
            ]

            //Creacion de arreglo que contiene objetos necesarios para mostrar en el modal de laboratorio.
            const parametrosLaboratorio=[laboratorio1]
            
            //Constante que obtiene el resultado del calculo de compensacion de puntaje Asma 
            const resultado = calcCompensacionAsma(PTJEAsma);
          
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso};

        }else if(props.enfermedad === 'Artrosis'){
            // Obtener tratamientos de la enfermedad de artrosis.
            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Artrosis');
            
            //validacion laboratorio 
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Artrosis');

            //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
            const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'Artrosis');
            const infoAviso = resAvisos[0];
            const aviso = validacionAvisos(infoAviso);
            
            //filtro para buscar preguntas correspondientes a la condición cronica
            const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'Artrosis');
            
            // Validacion examen 1
            const examen1 = respLab[0];
            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
            const resultadoLaboratorio = iconizacionArtrosis(dataExamen1);
            
            //Calcular compensacion
            const respuestaRx = compensacion.filter(com => com.nombre_param === 'Rx');
            const parametroRx = respuestaRx[0];
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
            
            // Validacion compensacion Parametro Dolor
            const respuestaDolor = compensacion.filter(com => com.nombre_param === 'Dolor articular');
            const parametroDolor = respuestaDolor[0];
            const D = validarParametrosComp(parametroDolor);
            
            // Validacion compensacion Parametro Crujido
            const respuestaCrujido = compensacion.filter(com => com.nombre_param === 'Crujido articular');
            const parametroCrujido = respuestaCrujido[0];
            const C = validarParametrosComp(parametroCrujido);
            
            // Validacion compensacion Parametro Bloqueo
            const respuestaBloqueo = compensacion.filter(com => com.nombre_param === 'Bloqueo articular');
            const parametroBloqueo = respuestaBloqueo[0];
            const B = validarParametrosComp(parametroBloqueo);
            
            // Validacion compensacion Parametro Inflamación
            const respuestaInflamacion = compensacion.filter(com => com.nombre_param === 'Inflamación articular');
            const parametroInflamacion = respuestaInflamacion[0];
            const I = validarParametrosComp(parametroInflamacion);
            
            // Calcular Puntaje artrosis
            const PTJEArtrosis = D + C + B + I;
            // Creando arreglo de objetos con los parametros necesarios para mostrar en el Modal de Compensación
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
            // Creando arreglo de objetos con los parametros necesarios para mostrar en el modal de Laboratorio.
            const parametrosLaboratorio=[laboratorio1]
            // Variable que guarda el resultado del calculo de compensacion.
            const resultado = calcCompensacionArtrosis(PTJEArtrosis,Rx,D,C,B,I);
            // Se retorna cada variable necesaria para ser mostrada y procesada en el HTML.
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso};

        }else if(props.enfermedad === 'EPOC'){
             // Obtener tratamientos de la enfermedad de EPOC.
            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'EPOC');

            //filtro para buscar preguntas correspondientes a la condición cronica
            const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'EPOC');

            //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
            const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'EPOC');
            const infoAviso = resAvisos[0];
            const aviso = validacionAvisos(infoAviso);
            
            //validacion laboratorio 
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'EPOC');
            // Validacion examen 1
            const examen1 = respLab[0];
            const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
            
            const resultadoLaboratorio = iconizacionEpoc(dataExamen1);
            
            //calcular compensación 
            const respuestaPTJEEpoc = compensacion.filter(com=> com.nombre_param === 'PTJEEpoc');
            const parametroPTJEpoc = respuestaPTJEEpoc[0];
            const PTJEEpoc = validarParametrosComp(parametroPTJEpoc);

            const parametrosCompensacion = [
                {
                    nombre_param:'Puntaje Epoc',
                    valor:PTJEEpoc
                }
            ];

            const parametrosLaboratorio=[laboratorio1]

            const resultado = calcCompensacionEpoc(PTJEEpoc);
            return { resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso};
        }
    }   

    const resultIconizacion = iconizacion();

    const { resultado:result, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso } = resultIconizacion;
    
    const handleClick = ()=>{        
        setInfoCompensacion(parametrosCompensacion);
    }

    const handleClickLaboratorio = ()=>{        
        setInfoLaboratorio(parametrosLaboratorio);
    }

    const handleClickPreguntas = ()=>{        
        setInfoSintomas(resPreguntas);
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
                                <p className="parrafo-nutricion">Nutrición: <i className="fas fa-check text-success fa-lg"></i></p>
                                <p className="parrafo-sintomas">Sintomas: <i onClick={ handleClickPreguntas }className="fas fa-times text-danger fa-lg"></i></p>
                                <p className="parrafo-avisos">Avisos:</p>
                                <p className="parrafo-avisos-resultado">{aviso}</p>
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
                <VainasModalSintomas key={props.enfermedad+9832} parametros={infoSintomas}/>
            </div>
        </Fragment>
    );
}

