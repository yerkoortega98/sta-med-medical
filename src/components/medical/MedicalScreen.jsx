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

            <ul className="list-center">
                <li className="list-inline-item ">{ nombre }</li>
                <li className="list-inline-item">{rut}</li>
                <li className="list-inline-item">{ edad } Años</li>

                <button 
                        className="btn btn-primary"
                        onClick={ handleLogout}
                    >
                        Logout
                </button>
            </ul>
            <div>
                <h2 > Nombre paciente: { nombre } </h2>
                <h2 > RUT: { rut } </h2>
                <h2 > { edad } Años  </h2>
                
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
