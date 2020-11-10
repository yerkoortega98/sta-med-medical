import React, {Fragment} from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
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



import { validacionExamen } from '../../helpers/validacionExamen';
import { VainasModal } from './VainasModal';


export const MedicalVainas = ({...props}) => {

    const dispatch = useDispatch();
    
    const { infoPaciente } = useSelector(state => state.pacienteActivo);

    const { compensacion,laboratorio, tratamiento } = useSelector(state => state.pacienteActivo);

    const { peso,edad }= infoPaciente[0];

   
    const iconizacion=()=>{
       
        if(props.enfermedad === 'DM'){
            const respuesta = compensacion.filter(com => com.nombre_param === 'Hemoglobina glicosilada')
            const respuesta2 = compensacion.filter(com => com => com.nombre_param === 'Glicemia')

            // arreglo de examenes correspondientes a la condicion cronica DM
            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'DM');

            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'DM');

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Calculo de laboratorio

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 1
            const examen1 = respLab[0];

            const validarInfoExamen1 =() =>{
                if(examen1){
                    const resultado = validacionExamen(examen1,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    console.log("entro aqui");
                    return resultado;
                }
            }

            const dataExamen1 = validarInfoExamen1();
         

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 2
            const examen2 = respLab[1];

            const validarInfoExamen2 = () =>{
                if(examen2){
                    const resultado = validacionExamen(examen2,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen2 = validarInfoExamen2();
        
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 3
            const examen3 = respLab[2];

            const validarInfoExamen3 = () =>{
                if(examen3){
                    const resultado = validacionExamen(examen3,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen3 = validarInfoExamen3();
        
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 4

            const examen4 = respLab[3];

            const validarInfoExamen4 = () =>{
                if(examen4){
                    const resultado = validacionExamen(examen4,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen4 = validarInfoExamen4();
           

             // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 5

            const examen5 = respLab[4];

            const validarInfoExamen5 = () =>{
                if(examen5){
                    const resultado = validacionExamen(examen5,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen5 = validarInfoExamen5();
          

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 6
            const examen6 = respLab[5];

            const validarInfoExamen6 = () =>{
                if(examen6){
                    const resultado = validacionExamen(examen6,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen6 = validarInfoExamen6();
            

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 7

            const examen7 = respLab[6];
            const validarInfoExamen7 = () =>{
                if(examen7){
                    const resultado = validacionExamen(examen7,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen7 = validarInfoExamen7();
           

            const resultadoLaboratorio = iconizacionDM(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5,dataExamen6,dataExamen7)

            

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Calculo para la compensacion
            
            const parametroHemoglobina = respuesta[0];
            const parametroGlicemia = respuesta2[0];
            
            const validacionHBGLIC = ()=>{
                if (parametroHemoglobina) {
                    
                    const { valor:hbglic } = parametroHemoglobina
                    return hbglic
                }else{
                    
                    const hbglic=0;
                    return hbglic;
                }
            }

            const validacionGlicemia = ()=>{                
                if (parametroGlicemia) {
                    const { valor:glicemia} = parametroGlicemia;        
                    return glicemia;
                } else {
                    const glicemia = 0;
                    return glicemia;
                }
            }
            const hbglic = validacionHBGLIC();
            const glicemia = validacionGlicemia();

            const examenHGBLIC ={
                nombre: 'Hemoglobina Glicosilada',
                valor: hbglic
            }

            const examenGlicemia = {
                nombre:'Glicemia',
                valor:glicemia
            }

            const parametrosCompensacion = [
                examenHGBLIC,
                examenGlicemia
            ]

            
            
            const resultado = calcCompensacionDiabetes(hbglic, glicemia);
        
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion};
            
        }else if(props.enfermedad === 'Hipotir'){


            const respuestaTSH = compensacion.filter(com => com.nombre_param === 'TSH');
            const respuestaT4L = compensacion.filter(com => com => com.nombre_param === 'T4 libre');

            
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
                        const resultado = validacionExamen(examen1,compensacion);
                        return resultado;
                    }else{
                        const resultado = "malo";
                        console.log("entro aqui");
                        return resultado;
                    }
            }

            const dataExamen1= validarInfoExamen1();
           

             // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 2



            const examen2 = respLab[1];

            const validarInfoExamen2 =() =>{
                if(examen2){
                    const resultado = validacionExamen(examen2,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    console.log("entro aqui");
                    return resultado;
                }
            }

            const dataExamen2= validarInfoExamen2();
          
             // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 3


            const examen3 = respLab[2];

            const validarInfoExamen3 =() =>{
                if(examen3){
                    const resultado = validacionExamen(examen3,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    console.log("entro aqui");
                    return resultado;
                }
            }

            const dataExamen3= validarInfoExamen3();
           
             // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 4

            const examen4 = respLab[3];

            const validarInfoExamen4 =() =>{
                if(examen4){
                    const resultado = validacionExamen(examen4,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    console.log("entro aqui");
                    return resultado;
                }
            }

            const dataExamen4= validarInfoExamen4();
           

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 4

            const examen5 = respLab[4];

            const validarInfoExamen5 =() =>{
                if(examen5){
                    const resultado = validacionExamen(examen5,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    console.log("entro aqui");
                    return resultado;
                }
            }

            const dataExamen5= validarInfoExamen5();

            const resultadoLaboratorio = iconizacionHipotir(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5);

            console.log(resultadoLaboratorio);
           
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

            

            const parametrosCompensacion=[
                parametroT4L,
                parametroTSH
            ]

            const resultado = calcCompensacionHipotiroihismo( TSH, T4L );
           
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion};

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
                    const resultado = validacionExamen(examen1,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    console.log("entro aqui");
                    return resultado;
                }
            }

            const dataExamen1 = validarInfoExamen1();
           

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 2
            const examen2 = respLab[1];

            const validarInfoExamen2 = () =>{
                if(examen2){
                    const resultado = validacionExamen(examen2,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen2 = validarInfoExamen2();
           
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 3
            const examen3 = respLab[2];

            const validarInfoExamen3 = () =>{
                if(examen3){
                    const resultado = validacionExamen(examen3,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen3 = validarInfoExamen3();
         
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 4

            const examen4 = respLab[3];

            const validarInfoExamen4 = () =>{
                if(examen4){
                    const resultado = validacionExamen(examen4,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen4 = validarInfoExamen4();
           

             // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 5

            const examen5 = respLab[4];

            const validarInfoExamen5 = () =>{
                if(examen5){
                    const resultado = validacionExamen(examen5,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen5 = validarInfoExamen5();
           

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 6
            const examen6 = respLab[5];

            const validarInfoExamen6 = () =>{
                if(examen6){
                    const resultado = validacionExamen(examen6,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen6 = validarInfoExamen6();

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

            const examenVFG ={
                nombre_param:'VFG',
                valor:VFG
            }

            const parametrosCompensacion = [
                parametroMicroalb,
                parametroNureico,
                parametroUremia,
                examenVFG
            ]

            const resultado = calcCompensacionInsuficienciaRenal( uremia, VFG, microalbuminuria, nureico );
       
          
            return {resultado, resultadoLaboratorio, resTratamiento, parametrosCompensacion};

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
                    const resultado = validacionExamen(examen1,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    console.log("entro aqui");
                    return resultado;
                }
            }

            const dataExamen1 = validarInfoExamen1();

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 2
            const examen2 = respLab[1];

            const validarInfoExamen2 = () =>{
                if(examen2){
                    const resultado = validacionExamen(examen2,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen2 = validarInfoExamen2();
           
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 3
            const examen3 = respLab[2];

            const validarInfoExamen3 = () =>{
                if(examen3){
                    const resultado = validacionExamen(examen3,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen3 = validarInfoExamen3();
          
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 4

            const examen4 = respLab[3];

            const validarInfoExamen4 = () =>{
                if(examen4){
                    const resultado = validacionExamen(examen4,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen4 = validarInfoExamen4();
          

             // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 5

            const examen5 = respLab[4];

            const validarInfoExamen5 = () =>{
                if(examen5){
                    const resultado = validacionExamen(examen5,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen5 = validarInfoExamen5();
          

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 6
            const examen6 = respLab[5];

            const validarInfoExamen6 = () =>{
                if(examen6){
                    const resultado = validacionExamen(examen6,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen6 = validarInfoExamen6();
           

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 7

            const examen7 = respLab[6];
            const validarInfoExamen7 = () =>{
                if(examen7){
                    const resultado = validacionExamen(examen7,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen7 = validarInfoExamen7();

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

            const parametrosCompensacion = [
                parametroCT,
                parametroLDL,
                parametroTG,
                parametroTG
            ]



            const resultado = calcCompensacionDilipdemia(CT,TG,LDL,HDL,sexo);

            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion};

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
                    const resultado = validacionExamen(examen1,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    console.log("entro aqui");
                    return resultado;
                }
            }

            const dataExamen1 = validarInfoExamen1();
         

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 2
            const examen2 = respLab[1];

            const validarInfoExamen2 = () =>{
                if(examen2){
                    const resultado = validacionExamen(examen2,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen2 = validarInfoExamen2();
            
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 3
            const examen3 = respLab[2];

            const validarInfoExamen3 = () =>{
                if(examen3){
                    const resultado = validacionExamen(examen3,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen3 = validarInfoExamen3();
         
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 4

            const examen4 = respLab[3];

            const validarInfoExamen4 = () =>{
                if(examen4){
                    const resultado = validacionExamen(examen4,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen4 = validarInfoExamen4();
           

             // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 5

            const examen5 = respLab[4];

            const validarInfoExamen5 = () =>{
                if(examen5){
                    const resultado = validacionExamen(examen5,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen5 = validarInfoExamen5();
            

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 6
            const examen6 = respLab[5];

            const validarInfoExamen6 = () =>{
                if(examen6){
                    const resultado = validacionExamen(examen6,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen6 = validarInfoExamen6();
           
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 7

            const examen7 = respLab[6];
            const validarInfoExamen7 = () =>{
                if(examen7){
                    const resultado = validacionExamen(examen7,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen7 = validarInfoExamen7();      
            
            const resultadoLaboratorio = iconizacionHTA(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5,dataExamen6,dataExamen7);

            console.log(resultadoLaboratorio);
            
            //------------------------------------------------------------------------------------//

            //Calculo de compensacion.

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
            const parametrosCompensacion =[
                parametroPAD,
                parametroPAS
            ]
            const resultado = calcCompesacionHTA(PAS,PAD);
         
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion};

        }else if(props.enfermedad === 'Epi'){

            const respuestPTJEEpilepsia = compensacion.filter(com=> com.nombre_param === 'PTJEEpilepsia');

            const parametroPTJEEpilepsia = respuestPTJEEpilepsia[0];

            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Epi');

            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Epi');

            //Validacion de laboratorio
            
            // Validacion examen 1
            const examen1 = respLab[0];

            const validarInfoExamen1 =() =>{
                if(examen1){
                    const resultado = validacionExamen(examen1,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    console.log("entro aqui");
                    return resultado;
                }
            }

            const dataExamen1 = validarInfoExamen1();
            

            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 2
            const examen2 = respLab[1];

            const validarInfoExamen2 = () =>{
                if(examen2){
                    const resultado = validacionExamen(examen2,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen2 = validarInfoExamen2();
          
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 3
            const examen3 = respLab[2];

            const validarInfoExamen3 = () =>{
                if(examen3){
                    const resultado = validacionExamen(examen3,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen3 = validarInfoExamen3();
         
            // ------------------------------------------------------------------------------------------------------------------------------------------\\
            // Validacion examen 4

            const examen4 = respLab[3];

            const validarInfoExamen4 = () =>{
                if(examen4){
                    const resultado = validacionExamen(examen4,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }
            const dataExamen4 = validarInfoExamen4();

            const resultadoLaboratorio = iconizacionEpi(dataExamen1,dataExamen2,dataExamen3,dataExamen4);

            console.log(resultadoLaboratorio);

            //Calcular comendacion
           
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

            const parametrosCompensacion = [
                PTJEEpilepsia
            ]
            const resultado = calcCompensacionEpilepsia(PTJEEpilepsia);
          
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion};

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


            //console.log(resTratamiento);

            //Validacion de laboratorio
            
            // Validacion examen 1
            const examen1 = respLab[0];

            const validarInfoExamen1 =() =>{
                if(examen1){
                    const resultado = validacionExamen(examen1,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    console.log("entro aqui");
                    return resultado;
                }
            }

            const dataExamen1 = validarInfoExamen1();

            const resultadoLaboratorio = iconizacionPark(dataExamen1);

            console.log(resultadoLaboratorio);
         

            //calculo de compensación

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

            const parametrosCompensacion = [
                parametroArrastre,
                parametroEquilibrio,
                parametroLento,
                parametroRigidez,
                parametroTemblor
            ]

            const resultado = calcCompensacionParkinson( temblor,equilibrio,rigidez,lento,arrastre,suma);
            
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion};

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
                    const resultado = validacionExamen(examen1,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }

            const dataExamen1 = validarInfoExamen1();
            //Calcular compensacion

            const resultadoLaboratorio = iconizacionAsma(dataExamen1);

            const validarPTJEAsma = () => {
                if(parametroPTJEAsma) {
                    const {valor:PTJEAsma} = parametroPTJEAsma;

                    return PTJEAsma;

                }else{
                    const PTJEAsma = 0;

                    return PTJEAsma;
                }
            }

            const parametrosCompensacion =[
                parametroPTJEAsma
            ]

            const PTJEAsma = validarPTJEAsma();

            const resultado = calcCompensacionAsma(PTJEAsma);
          
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion};

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
            console.log(parametroRx);

            const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Artrosis');

            const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Artrosis');

            //validacion laboratorio 

            // Validacion examen 1
            const examen1 = respLab[0];

            const validarInfoExamen1 =() =>{
                if(examen1){
                    const resultado = validacionExamen(examen1,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    return resultado;
                }
            }

            const dataExamen1 = validarInfoExamen1();

            const resultadoLaboratorio = iconizacionArtrosis(dataExamen1);

            console.log(resultadoLaboratorio);

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

            const validarDolor = () => {
                if (parametroDolor) {
                    const {valor:Dolor} = parametroDolor;

                    return Dolor;
                } else {
                    const Dolor = 0;

                    return Dolor;
                }
            }

            const validarCrujido = () => {
                if (parametroCrujido) {
                    const {valor:Crujido} = parametroCrujido;

                    return Crujido;
                } else {
                    const Crujido = 0;

                    return Crujido;
                }
            }

            const validarBloqueo = () => {
                if (parametroBloqueo) {
                    const {valor:Bloqueo} = parametroBloqueo;

                    return Bloqueo;
                } else {
                    const Bloqueo = 0;

                    return Bloqueo;
                }
            }

            const validarInflamacion = () => {
                if (parametroInflamacion) {
                    const {valor:Inflamacion} = parametroInflamacion;

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
            
            const parametrosCompensacion =[
                parametroBloqueo,
                parametroCrujido,parametroDolor,parametroInflamacion
            ]
            const resultado = calcCompensacionArtrosis(PTJEArtrosis,Rx,D,C,B,I);

           
           
            return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion};

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
                    const resultado = validacionExamen(examen1,compensacion);
                    return resultado;
                }else{
                    const resultado = "malo";
                    console.log("entro aqui");
                    return resultado;
                }
            }

            const dataExamen1 = validarInfoExamen1();

            const resultadoLaboratorio = iconizacionEpoc(dataExamen1);

            console.log(resultadoLaboratorio);
           
            //calcular compensación 

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
            return {resultado, resultadoLaboratorio, resTratamiento};
        }
    }   

    const resultIconizacion = iconizacion();

    const { resultado:result, resultadoLaboratorio, resTratamiento,parametrosCompensacion } = resultIconizacion;

    // Activar modal
    const handleClick = ()=>{
        dispatch( uiOpenModal() );
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
                                <p className="parrafo-compensacion">Compensación: <i  onClick={handleClick} className={`fas ${ result } fa-lg`}></i></p>
                                <p className="parrafo-laboratorio">Laboratorio: <i className={`fas ${resultadoLaboratorio} fa-lg`}></i></p>
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
                                    ?
                                    resTratamiento.map(tra => (
                                    <li className="list-tratamiento" key={tra.nombre_breve}>{tra.nombre_breve}: {tra.dosis_diaria}</li> 
                                    ))
                                    :
                                    <p>No hay tratamiento para esta enfermedad</p>
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
                <VainasModal key={props.enfermedad} parametros={parametrosCompensacion}/>
            </div>
        </Fragment>

        
    );
}

