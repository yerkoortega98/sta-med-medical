import React from 'react';
import { startLogout } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { MedicalVainas } from './MedicalVainas';


export const MedicalScreen = () => {

    const PersonaCronica ={
        nombre:'Cesar heriquez Ortuzar',
        rut:'4.567.523-1',
        edad: '56',
        fumador:'10 al dia',
        actividad:'Sedentario',
        estadoFisico:'OBESO IMC 32'

    }

    const {nombre,edad,rut,fumador,actividad,estadoFisico} = PersonaCronica;
    const dispatch = useDispatch();
    
    const enfermedades = [
        {
            id:1,
            enfermedad:'HTA'
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
                <MedicalVainas
                    titulo="askdkal"
                />
                <MedicalVainas
                    titulo="askdkal"
                />
                <MedicalVainas
                    titulo="askdkal"
                />
            </div>

        </div>
    )
}
