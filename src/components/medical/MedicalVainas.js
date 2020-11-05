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
// import { VainasModal } from './VainasModal';


export const MedicalVainas = ({...props}) => {
    
    const { compensacion,infoPaciente } = useSelector(state => state.pacienteActivo);

    const { compensacionn } = useSelector(state => state.pacienteActivo);

    const { peso,edad }= infoPaciente[0];
   
    const iconizacion=()=>{
       
        if(props.enfermedad === 'DM'){
            const respuesta = compensacionn.filter(com => com.nombre_param === 'Hemoglobina glicosilada')
            const respuesta2 = compensacionn.filter(com => com => com.nombre_param === 'Glicemia')
            
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
            
            console.log('DM:  ',resultado);
            return {resultado};
            
        }else if(props.enfermedad === 'Hipotir'){


            const respuestaTSH = compensacionn.filter(com => com.nombre_param === 'TSH')
            const respuestaT4L = compensacionn.filter(com => com => com.nombre_param === 'T4 libre')


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
            console.log('Hipotir:  ',resultado)
            return{resultado};

        }else if(props.enfermedad === 'IRC'){

            const respuestaMicroalb = compensacionn.filter(com => com.nombre_param === 'Microalbuminuria')
            const respuestaUremia = compensacionn.filter(com => com.nombre_param === 'Uremia')
            const respuestaHombre = compensacionn.filter(com => com.nombre_param === 'Creatinina hombre')
            const respuestaMujer = compensacionn.filter(com => com.nombre_param === 'Creatinina mujer')
            const respuestaNureico = compensacionn.filter(com => com.nombre_param === 'Nitrogeno ureico')



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
       
            console.log('IRC:  ',resultado)
            return{resultado};   
        }else if(props.enfermedad === 'Dis/ATE'){

            const respuestaHombre = compensacionn.filter(com => com.nombre_param === 'HDL hombres')
            const respuestaMujer = compensacionn.filter(com => com.nombre_param === 'HDL mujeres')
            const respuestaLDL = compensacionn.filter(com => com.nombre_param === 'LDL');
            const respuestaTG = compensacionn.filter(com => com.nombre_param === 'Trigliceridos')
            const respuestaCT = compensacionn.filter(com => com.nombre_param === 'Colesterol')
            

            const validacionSexoHombre = respuestaHombre[0];
            const validacionSexoMujer = respuestaMujer[0];
            const validacionSexo = ()=>{
                if(validacionSexoHombre){
                    const {valor:HDL} = validacionSexoHombre;
                    const sexo = 'Masculino'
                    console.log('hombre respuesta:',HDL)
                    return {HDL,sexo};
                }else if(validacionSexoMujer){
                    const {valor:HDL} = validacionSexoMujer;
                    const sexo = 'Femenino'
                    console.log('mujer respuesta:',HDL)
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

            console.log('Dis/ATE:  ',resultado)
            return {resultado};
        }else if(props.enfermedad === 'HTA'){
            

            const respuestaPAS = compensacionn.filter(com=> com.nombre_param === 'pa_sist');
            const respuestaPAD = compensacionn.filter(com=> com.nombre_param === 'pa_dist');
            
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
            console.log('HTA:',resultado)
            return { resultado }; 
        }
    }   

    const resultIconizacion = iconizacion();



   if(resultIconizacion){
        const {resultado:result} = resultIconizacion;
        console.log("Resultado vaina: ",result);
   }

    //Algoritmo con informacion estatica, que luego será reemplazado por el codigo de arriba.    
    // Algortimo para colocar parametros en codigos dependiendo de la enfermedadad
        
    const { ParametrosCompensacion } = compensacion[0];

  

    const { PAS, PAD,hbglic, glicemia,TSH, T4L, uremia, VFG, microalbuminuria, nureico,PTJEEpilepsia,temblor,equilibrio,rigidez,lento,arrastre,suma,PTJEAsma,PTJEArtrosis,Rx,D,C,B,I,PTJEEpoc,CT,TG,LDL,HDL,Sexo } = ParametrosCompensacion;
   
    const compensacionPrueba = ()=>{
        
        if(props.enfermedad === 'HTA'){

            const resultado = calcCompesacionHTA(PAS,PAD);
            return {resultado};

        }else if(props.enfermedad ==='DM'){
            
            const resultado = calcCompensacionDiabetes(hbglic, glicemia);
            return {resultado};

        }else if (props.enfermedad === 'Hipotir'){
            
            const resultado = calcCompensacionHipotiroihismo( TSH, T4L );
            
            return {resultado};
        }else if (props.enfermedad === 'IRC'){

            const resultado = calcCompensacionInsuficienciaRenal( uremia, VFG, microalbuminuria, nureico );
            return {resultado};

        }else if(props.enfermedad === 'Epi'){

            const resultado = calcCompensacionEpilepsia(PTJEEpilepsia);
            return {resultado};

        }else if(props.enfermedad === 'Park'){

            const resultado = calcCompensacionParkinson( temblor,equilibrio,rigidez,lento,arrastre,suma);
            return {resultado};

        } else if ( props.enfermedad === 'Asma') {

            const resultado = calcCompensacionAsma(PTJEAsma);
            return {resultado};

        }else if(props.enfermedad === 'Artrosis'){
            const resultado = calcCompensacionArtrosis(PTJEArtrosis,Rx,D,C,B,I);
            return {resultado};
        }
        else if(props.enfermedad === 'Epoc'){
            const resultado = calcCompensacionEpoc(PTJEEpoc);
            return {resultado};
        }else if( props.enfermedad === 'Dis/ATE'){

            const resultado = calcCompensacionDilipdemia(CT,TG,LDL,HDL,Sexo);
            return {resultado};
        }
    }

    const calCompensacion = compensacionPrueba();

    const {resultado:resultadoCompensacion} = calCompensacion;

    // const dispatch = useDispatch();

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
                                <p>Compensación <i  className={`fas ${ resultadoCompensacion  }`}></i></p>
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

