// los actions, son simplemente funciones parecidas a los helpers
import { finishLoading, startLoading } from "./ui"
import {  diaryLogoutCleaning } from "./diary";
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

        axios.post('/api/getUser',{
            email
        })
        
        axios({
            method:'GET',
            url:`http://localhost:4000/getUsuario/${ email }`
        }).then(res =>{
            
            const respuesta = res.data;

            const usuarioCorrecto =  respuesta.filter( Usuario => Usuario.email === email)
            
            if(usuarioCorrecto[0]?.hash_clave === password){

                setTimeout(() => {
                    dispatch( login( usuarioCorrecto[0].rut, usuarioCorrecto[0].nombre ));
                    dispatch( finishLoading() );
                Swal.close();
                }, 1000);
                
            }else{
                setTimeout(() => {
                    dispatch(finishLoading());
                    Swal.fire('Error','Usuario y/o Contraseña incorrecto','error');   
                }, 1000);
               
            }
        }).catch(e => {
            setTimeout(() => {
                dispatch(finishLoading());
                Swal.fire('Error',e.message,'error');
            }, 1000);
            
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
        
    }
}

export const logout = () => ({
    type: types.logout
})