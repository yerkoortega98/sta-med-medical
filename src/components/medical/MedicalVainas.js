import React, {Fragment, useState} from 'react';
import {  useSelector } from 'react-redux';

// Modal
import { VainasModal } from './VainasModal';
import { VainasModalLab } from './VainasModalLab';
import { VainasModalSintomas } from './VainasModalSintomas';
import { iconizacionEnf } from '../../helpers/ValidacionEnf'

export const MedicalVainas = ({...props}) => {
    // Activar modal
    const [infoCompensacion, setInfoCompensacion] = useState();
    const [infoLaboratorio, setInfoLaboratorio] = useState();
    const [infoSintomas, setInfoSintomas] = useState();

    const { compensacion,laboratorio, tratamiento, preguntas, avisos,sintomas } = useSelector(state => state.pacienteActivo);
    const { infoPaciente } = useSelector(state => state.pacienteActivo);
    
    const { peso,edad }= infoPaciente[0];

    const nombreEnfermedad = props.enfermedad;
   
    const resultIconizacion = iconizacionEnf(nombreEnfermedad,compensacion,laboratorio, tratamiento, preguntas, avisos,sintomas,peso,edad);

    const { resultado:result, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso, iconoSintomas } = resultIconizacion;
    
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
                                <p className="parrafo-sintomas">Sintomas: <i onClick={ handleClickPreguntas }className={`${iconoSintomas} fa-lg`}></i></p>
                                <p className="parrafo-avisos">Avisos:</p>
                                <p className="parrafo-avisos-resultado">{aviso}</p>
                            </div>
                            <div className="tituloTratamiento">
                                <p>Tratamiento:</p>
                            </div>
                            <div className="ContenidoTratamiento" >
                                {   
                                    (resTratamiento)
                                    &&
                                    resTratamiento.map(tra => (
                                        <li 
                                            className="list-tratamiento" 
                                            key={tra.nombre_breve}
                                        >
                                            <strong className="nombre_breve">{tra.nombre_breve}: </strong> <span className={`${tra.consumo_medicamento === 1 && "text-success-consumo"} ${tra.consumo_medicamento === 2 && "text-warning-consumo"} ${tra.consumo_medicamento === 3 && "text-danger-consumo"} `}>{tra.dosis_diaria}</span>

                                        </li> 
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

