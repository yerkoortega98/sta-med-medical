import React, {Fragment} from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { VainasModal } from './VainasModal';


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
            
            const parametros = [{
                id:1,
                nombreParametro:'PAS',
                valor:PAS
            },{
                id:2,
                nombreParametro:'PAD',
                valor:PAD
            }];

            return {resultado,parametros};
            
    
        }else if(props.enfermedad ==='DM'){
            
            const resultado = calcCompensacionDiabetes(hbglic, glicemia);
           
            const parametros = [{
                id:1,
                nombreParametro:'HBGLIC',
                valor:hbglic
            },{
                id:2,
                nombreParametro:'Glicemia',
                Glicemia:glicemia
            }];

            return {resultado,parametros};

        }else if (props.enfermedad === 'Hipotir'){
            
            const resultado = calcCompensacionHipotiroihismo( TSH, T4L );
            

            const parametros = [{
                id:1,
                nombreParametro:'TSH',
                valor:TSH
            },{
                id:2,
                nombreParametro:'T4L',
                valor:T4L
            }
        ];

            return {resultado,parametros};
        }else if (props.enfermedad === 'IRC'){

            const resultado = calcCompensacionInsuficienciaRenal( uremia, VFG, microalbuminuria, nureico );
            
            const parametros = [{
                id:1,
                nombreParametro:'Uremia',
                valor:uremia
            },{
                id:2,
                nombreParametro:'VFG',
                valor:VFG
            },{
                id:2,
                nombreParametro:'MicroAlbuminuria',
                valor:nureico
            }
        ];

            return {resultado,parametros};

        }else if(props.enfermedad === 'Epi'){

            const resultado = calcCompensacionEpilepsia(PTJEEpilepsia);
            
            const parametros = [{
                id:1,
                nombreParametro:'Puntaje Epilepsia',
                valor:PTJEEpilepsia
            }];

            return {resultado,parametros};

        }else if(props.enfermedad === 'Park'){

            const resultado = calcCompensacionParkinson( temblor,equilibrio,rigidez,lento,arrastre,suma);
            
            const parametros = [{
                id:1,
                nombreParametro:'Temblor',
                valor:temblor
            },{
                id:2,
                nombreParametro:'Equilibrio',
                valor:equilibrio
            },{
                id:3,
                nombreParametro:'Rigidez',
                valor:rigidez
            },{
                id:4,
                nombreParametro:'Lento',
                valor:lento
            },{
                id:5,
                nombreParametro:'Arrastre',
                valor:arrastre
            },{
                id:6,
                nombreParametro:'Suma',
                valor:suma
            }
        ];

            return {resultado,parametros};

        } else if ( props.enfermedad === 'Asma') {

            const resultado = calcCompensacionAsma(PTJEAsma);
            
            const parametros = [{
                id:1,
                nombreParametro:'Puntaje Asma',
                valor:PTJEAsma
            }];

            return {resultado,parametros};

        }else if(props.enfermedad === 'Artrosis'){
            const resultado = calcCompensacionArtrosis(PTJEArtrosis,Rx,D,C,B,I);
            
            const parametros = [{
                id:1,
                nombreParametro:'Puntaje Artrosis',
                valor: PTJEArtrosis
            },{
                id:2,
                nombreParametro:'Rx',
                valor:Rx
            },{
                id:3,
                nombreParametro:'D',
                valor:D
            },{
                id:4,
                nombreParametro:'C',
                valor:C
            },{
                id:5,
                nombreParametro:'B',
                valor:B
            },{
                id:6,
                nombreParametro:'I',
                valor:I
            }];

            return {resultado,parametros};
        }
        else if(props.enfermedad === 'Epoc'){
            const resultado = calcCompensacionEpoc(PTJEEpoc);
           
            const parametros = [{
                id:1,
                nombreParametro:'Puntaje Epoc',
                valor:PTJEEpoc
            }];

            return {resultado,parametros};
        }else if( props.enfermedad === 'Dis/ATE'){

            const resultado = calcCompensacionDilipdemia(CT,TG,LDL,HDL,Sexo);

            const parametros = [{
                id:1,
                nombreParametro:'CT',
                valor:CT
            },{
                id:2,
                nombreParametro:'TG',
                valor:TG
            },{
                id:3,
                nombreParametro:'LDL',
                valor:LDL
            },{
                id:4,
                nombreParametro:'HDL',
                valor:HDL
            }]

            return {resultado,parametros};
        }
    }

    const calCompensacion = compensacion();

    const {resultado:resultadoCompensacion,parametros} = calCompensacion;

    const dispatch = useDispatch();

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
                                <p>Compensación <i onClick={ handleClick } className={`fas ${ resultadoCompensacion  }`}></i></p>
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
                <VainasModal key={props.enfermedad} parametros={parametros} />
            </div>
        </Fragment>

        
    );
}

