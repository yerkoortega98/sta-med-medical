import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import { 
    calcCompensacionDiabetes, 
    calcCompensacionEpilepsia, 
    calcCompensacionHipotiroihismo, 
    calcCompensacionInsuficienciaRenal, 
    calcCompesacionHTA,
    calcCompensacionParkinson,
    calcCompensacionAsma,calcCompensacionEpoc,calcCompensacionArtrosis, calcCompensacionDilipdemia
 } from '../../helpers/compensacion';


export const MedicalVainas = ({...props}) => {

    const { ParametrosCompensacion } = useSelector(state => state.diary.activePatient)
    const { 
            PAS, PAD,
            hbglic, glicemia,
            TSH, T4L, 
            uremia, VFG, microalbuminuria, nureico,
            PTJEEpilepsia,
            temblor,equilibrio,rigidez,lento,arrastre,suma,
            PTJEAsma,
            PTJEArtrosis,Rx,D,C,B,I,
            PTJEEpoc,
            CT,TG,LDL,HDL,Sexo
        } = ParametrosCompensacion[0];
   
    const compensacion = ()=>{
        
        if(props.enfermedad === 'HTA'){

            const resultado = calcCompesacionHTA(PAS,PAD);
            console.log('Vaina HTA :', resultado );

            return resultado;

            
    
        }else if(props.enfermedad ==='Diabetes'){
            
            const resultado = calcCompensacionDiabetes(hbglic, glicemia);
            console.log('Vaina Diabetes :', resultado );

            return resultado;

        }else if (props.enfermedad === 'Hipotiroihismo'){
            
            const resultado = calcCompensacionHipotiroihismo( TSH, T4L );
            console.log('Vaina Hipotiroihismo :', resultado );

            return resultado;
        }else if (props.enfermedad === 'Insuficiencia Renal'){

            const resultado = calcCompensacionInsuficienciaRenal( uremia, VFG, microalbuminuria, nureico );
            console.log('Vaina Insuficiencia Renal: ', resultado)
            return resultado;
        }else if(props.enfermedad === 'Epi'){

            const resultado = calcCompensacionEpilepsia(PTJEEpilepsia);
            console.log('Vaina Epilepsia: ', resultado);
            return resultado;

        }else if(props.enfermedad === 'Parkinson'){

            const resultado = calcCompensacionParkinson( temblor,equilibrio,rigidez,lento,arrastre,suma);
            console.log('Vaina Parkinson: ', resultado);
            return resultado;

        } else if ( props.enfermedad === 'Asma') {

            const resultado = calcCompensacionAsma(PTJEAsma);
            console.log('Vaina Asma: ', resultado);
            return resultado;

        }else if(props.enfermedad === 'Artrosis'){
            const resultado = calcCompensacionArtrosis(PTJEArtrosis,Rx,D,C,B,I);
            console.log('Vaina Artrosis: ', resultado);
            return resultado;
        }
        else if(props.enfermedad === 'Epoc'){
            const resultado = calcCompensacionEpoc(PTJEEpoc);
            console.log('Vaine Epoc: ', resultado)
            return resultado;
        }else if( props.enfermedad === 'Dislip'){

            const resultado = calcCompensacionDilipdemia(CT,TG,LDL,HDL,Sexo);

            console.log('Vaina Dislip: ' , resultado);

            return resultado;
        }
    }

    const resultadoCompensacion = compensacion();

   

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
                                <p>Compensación <i className="fas fa-check text-success">{resultadoCompensacion}</i></p>
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
            </div>
        </Fragment>

        
    );
}

