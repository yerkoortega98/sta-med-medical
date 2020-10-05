import React from 'react';
import { startLogout } from '../../actions/auth';
import { useDispatch } from 'react-redux';

export const MedicalScreen = () => {
    

    const dispatch = useDispatch();
    
    const handleLogout =()=>{
        dispatch(startLogout());
    }
    
    return (
        <div>
            <h1>Esta es la vista para colocar las vainas</h1>
            <button 
                    // className="btn btn-primary"
                    onClick={ handleLogout}
                >
                    Logout
            </button>
        </div>
    )
}
