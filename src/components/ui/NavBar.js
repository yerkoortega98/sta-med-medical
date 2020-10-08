import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';


export const NavBar = () => {


    const dispatch = useDispatch();

    const handleLogout =()=>{
        dispatch(startLogout());
    }

    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                Jorge
            </span>

            <button 
                className="btn btn-outline-danger"
                onClick={ handleLogout }
            
            >
                <i className="fas fa-sign-out-alt"></i>
                <span>Salir</span>
            </button>
            
        </div>
    )
}
