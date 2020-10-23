// los actions, son simplemente funciones parecidas a los helpers
import { types } from "../types/types"
import { firebase } from '../firebase/firebase-config'
import { finishLoading, startLoading } from "./ui"

import Swal from 'sweetalert2';
import { diaryClearActiveDiary, diaryLogoutCleaning } from "./diary";
// import { fetchSinToken } from "../helpers/fetch";


// -------------------------------------------------------------------------------------------------------------------------------
// Creamos esta funcion para lanzar funcion asincrona
// Recibe email y password y retorna un callback
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

// -----------------------------------------------------------------------------------------//
        // Codigo para validar usuario con base de datos FireBase        
        // Validamos el usuario con la base de datos
        firebase.auth().signInWithEmailAndPassword( email,password )
            .then( ({ user }) => {

                dispatch( login( user.uid, user.displayName ));
                dispatch( finishLoading() );
                Swal.close();
            })
            .catch(e => { 
                dispatch(finishLoading());
                Swal.fire('Error',e.message,'error')
            })   
//-------------------------------------------------------------------------------------------- //          

    }
};


// -------------------------------------------------------------------------------------------------------------------------------
// Creamos un action para el login, que requiere el uid y el displayName.
// Esto es una funcion sincrona
export const login = ( uid,displayName ) => ({
    type: types.login,
        payload: {
            uid,
            displayName
        }
});



// -------------------------------------------------------------------------------------------------------------------------------
// Esto es asincrono, porque la parte de firebase tengo que dispararla, y ejecutar el logout como una instruccion de firebase que regresa una promesa
// Como esperamos que esto se ejecute, colocamos async
export const startLogout =()=>{
    return async(dispatch)=>{
        // signOut regresa una promesa si se ejecuta correctamente.
        firebase.auth().signOut();
        // hacemos el dispatch de la accion de logout
        dispatch(logout());
        dispatch(diaryLogoutCleaning())
        dispatch(diaryClearActiveDiary());
    }
}

// Creamos un action sincrono, para llamar al type, logout, que regresa un objeto vacio, que cambia el state.
export const logout = () => ({
    type: types.logout
})