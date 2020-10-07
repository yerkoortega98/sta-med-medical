import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startLoginEmailPassword } from '../../actions/auth';
import { setError } from '../../actions/ui';

export const LoginScreen = () => {
   
    const dispatch =useDispatch();
   
    const { loading } = useSelector( state => state.ui );

    const [ formValues,handleInputChange ] =useForm({
      email:'yerko@gmail.com',
      password:'1234567'
  }) 

    const { email,password } = formValues;

    const handleLogin = (e)=>{
       e.preventDefault();
       if(isValid){
        dispatch( startLoginEmailPassword( email,password ) );
       }
       
    }

//    Validar entradas de los input
    const isValid =()=>{
        if(email.trim().length === 0 ){
                dispatch(setError('Email is required'))
            return false;
        }else if(password.trim().length === 0 ) {
                dispatch(setError('Password is required'))
            return false;
        }
        return true
    }
   
   
    return (
        <>
            <h3 className="auth__title"> Autentificacion </h3>
            <form onSubmit={ handleLogin }>
                <input 
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    value={ email }
                    onChange={ handleInputChange }
                >
                </input>

                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange= { handleInputChange }
                >
                </input>

                <button 
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                >
                    Ingresar
                </button>
            </form>
        </>
    )
}