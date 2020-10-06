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
            <div>
                <ul className="list-center">
                    <li className="list-inline-item medical__text "><h1>{ nombre }</h1></li>
                    <li className="list-inline-item medical__text"><h1> { rut } </h1></li>
                    <li className="list-inline-item medical__text"><h1>{ edad } Años</h1></li>   
                </ul>
                <ul className="list-center">
                    <li className="list-inline-item medical__text"><h3> Fumador 10 al dia </h3>     </li>
                    <li className="list-inline-item medical__text"><h3>Sedenario </h3>     </li>
                    <li className="list-inline-item medical__text"><h3>OBESO IMC 32 </h3></li>   
                </ul>

                <button 
                    className="btn btn-primary"
                    onClick={ handleLogout }
                >
                            Cerrar Sesión
                </button>  
            </div>
            
            

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
