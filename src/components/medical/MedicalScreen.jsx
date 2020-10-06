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
        <div className="content medical__content">

            <ul className="list-center">
                <li className="list-inline-item ">{ nombre }</li>
                <li className="list-inline-item">{rut}</li>
                <li className="list-inline-item">{ edad } Años</li>

                <button 
                        className="btn btn-primary list-right "
                        onClick={ handleLogout}
                    >
                        Logout
                </button>
            </ul>
            

            <div >
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
