import React from 'react';
import { startLogout } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { MedicalVainas } from './MedicalVainas';
import { Redirect } from 'react-router-dom';


export const MedicalScreen = () => {

    const  { activePatient }  = useSelector(state => state.diary)

   
    const { rutPaciente, nombrePaciente, edad:edadPaciente, enfermedades } = activePatient;

    const PersonaCronica ={
        fumador:'10 al dia',
        actividad:'Sedentario',
        estadoFisico:'OBESO IMC 32'
    }

    const {fumador,actividad,estadoFisico} = PersonaCronica;

    const dispatch = useDispatch();
    
    const handleLogout =()=>{
        dispatch(startLogout());
    }
    
    return (
        <div className="content medical__content">
            <div>
                <ul className="list-center">
                    <li className="list-inline-item medical__text "><h1>{ nombrePaciente }</h1></li>
                    <li className="list-inline-item medical__text"><h1> { rutPaciente } </h1></li>
                    <li className="list-inline-item medical__text"><h1>{ edadPaciente } Años</h1></li>   
                </ul>
                <ul className="list-center">
                    <li className="list-inline-item medical__text"><h3> Fumador {fumador} </h3>     </li>
                    <li className="list-inline-item medical__text"><h3>{ actividad } </h3>     </li>
                    <li className="list-inline-item medical__text"><h3>{estadoFisico} </h3></li>   
                </ul>

                <button 
                    className="btn btn-primary"
                    onClick={ handleLogout }
                >
                            Cerrar Sesión
                </button>  
            </div>
            
            

            <div className="Vainas">
            {/* Yerko trabaja aqui */}

            {
                    
                    (activePatient)
                    ?
                    (enfermedades.map( enfermedad => (
                        <MedicalVainas
                            key={ enfermedad.id }
                            // Extraemos cada una de las propiedades que tengan los notes.
                            enfermedad={ enfermedad.enfermedad }  
                        />
                    )))
                    :
                    (<Redirect to='/'/>)

            }
                
            </div>

        </div>
    )
}
