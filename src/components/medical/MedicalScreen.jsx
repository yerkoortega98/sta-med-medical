import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


import { MedicalVainas } from './MedicalVainas';
import { clearActiveEnfermedad, clearCompensacion, clearInfoPaciente, clearLaboratorio, clearMolestias, clearTratamientos, patientIsCheckingFalse}from '../../actions/patient';




export const MedicalScreen = () => {

    const dispatch = useDispatch();
     
    const { enfermedades,isChecking } = useSelector(state => state.pacienteActivo);

    const {  infoPaciente } = useSelector(state => state.pacienteActivo);
    
    const { nombre,rut:rutPaciente, edad, ejercicio, fumador, IMC }= infoPaciente[0];

    
    const handleBackView = async()=>{

        await dispatch(patientIsCheckingFalse());

        dispatch(clearInfoPaciente());
        dispatch(clearActiveEnfermedad());
        dispatch(clearCompensacion());  
        dispatch(clearLaboratorio());   
        dispatch(clearMolestias());   
        dispatch(clearTratamientos());
    }

    return (
        <div className="content medical__content">
            <div>
                <ul className="list-center">
                    <li className="list-inline-item medical__text "><h1>{ nombre }</h1></li>
                    <li className="list-inline-item medical__text"><h1> { rutPaciente } </h1></li>
                    <li className="list-inline-item medical__text"><h1>{ edad } Años</h1></li>   
                </ul>
                <ul className="list-center">
                    <li className="list-inline-item medical__text"><h3> Fumador { fumador } al dia </h3>     </li>
                    <li className="list-inline-item medical__text"><h3>{ ejercicio } al dia </h3>     </li>
                    <li className="list-inline-item medical__text"><h3>{ IMC } IMC </h3></li>   
                </ul>

                <button 
                    className="btn btn-primary"
                    onClick={ handleBackView }
                >
                            Volver atras
                </button>  
            </div>
    
            <div className="Vainas">
            { 
                    (isChecking)
                    ?
                    (enfermedades.map( enfermedad => (
                        <MedicalVainas
                            key={ enfermedad.con_cronica }
                            enfermedad={ enfermedad.con_cronica }  
                        />
                    )))
                    :
                    (<Redirect to='/'/>)
            }         
            </div>

            

            { !isChecking && <Redirect to='/'/>}

        </div>
    )
}
