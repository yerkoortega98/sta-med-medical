// los actions, son simplemente funciones parecidas a los helpers
import { finishLoading, startLoading } from "./ui"
import { diaryClearActiveDiary, diaryLogoutCleaning } from "./diary";
import { types } from "../types/types"

import axios from 'axios';
import Swal from 'sweetalert2';


export const startLoginEmailPassword =( email,password ) =>{
    return ( dispatch )=>{
        dispatch(startLoading() );
    
        // Alerta
        Swal.fire({
            title:'Ingresando...',
            text:'Por Favor espere...',
            allowOutsideClick:false,
            willOpen: ()=>{
                Swal.showLoading();
            }
        });

        axios({
            method:'GET',
            url:'http://localhost:4000/getUsuario'
        }).then(res =>{
            
            const respuesta = res.data;
            
            const usuarioCorrecto =  respuesta.filter( Usuario => Usuario.email === email)
            
            if(usuarioCorrecto[0]?.hash_clave === password){
                dispatch( login( usuarioCorrecto[0].rut, usuarioCorrecto[0].nombre ));
                dispatch( finishLoading() );
                Swal.close();
            }else{
                dispatch(finishLoading());
                Swal.fire('Error','Usuario y/o Contraseña incorrecto','error');   
            }
        }).catch(e => {
            dispatch(finishLoading());
            Swal.fire('Error',e.message,'error');
        })
        
    }
};


export const login = ( uid,displayName ) => ({
    type: types.login,
        payload: {
            uid,
            displayName
        }
});

export const startLogout =()=>{
    return async(dispatch)=>{
        dispatch(logout());
        dispatch(diaryLogoutCleaning())
        dispatch(diaryClearActiveDiary());
    }
}

export const logout = () => ({
    type: types.logout
})