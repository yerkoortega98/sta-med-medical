import React from 'react';
import { startLogout } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { ViewVainas } from './ViewVainas';

export const MedicalScreen = () => {
    

    const PersonaCronica ={
        nombre:'Cesar heriquez Ortuzar',
        rut:'4.567.523-1',
        edad: '56'
    }

    const {nombre,edad,rut} = PersonaCronica;
    const dispatch = useDispatch();
    
    const enfermedades = [
        {
            id:1,
            enfermedad:'HTA'
        },
        {
            id:2,
            enfermedad:'CROC'
        }

    ]
    const handleLogout =()=>{
        dispatch(startLogout());
    }
    
    return (
        <div className="content">
            <div>
                <h1 > Nombre paciente: { nombre } </h1>
                <h1 > RUT: { rut } </h1>
                <h1 > { edad } Años  </h1>
                <button 
                        className="btn btn-primary"
                        onClick={ handleLogout}
                    >
                        Logout
                </button>
            </div>

            <div>
            {/* Yerko trabaja aqui */}
                 
                {
                    enfermedades.map( enfermedad => (
                        <ViewVainas
                            key={ enfermedad.id }
                            // Extraemos cada una de las propiedades que tengan los notes.
                            
                        />
                    ))
                }
                    
            </div>

            
            
        </div>
    )
}
