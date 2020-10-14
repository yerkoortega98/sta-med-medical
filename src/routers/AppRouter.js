import React, { useEffect, useState } from 'react';
// Para usar el router, se instala "npm install react-router-dom"
import {
    BrowserRouter as Router,
    Switch, Redirect
  } from "react-router-dom";





import { firebase } from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from '../routers/AuthRouter';

import { login } from '../actions/auth';
import { DashboardRoutes } from './DashboardRoutes';
import { startLoadingDiary } from '../actions/diary';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking] = useState(true);

    const [ isLoggedIn, setIsLoggedIn ] = useState(false);


   
    useEffect(() => {
        firebase.auth().onAuthStateChanged( async( user )=>{
            if( user?.uid ){        
                dispatch( login( user.uid ,user.displayName ));
                setIsLoggedIn(true);
                dispatch(startLoadingDiary(user.uid))
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false)
        }) ;
    }, [ dispatch,setChecking ]);


    if(checking){
        return(
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                 </div>
            </div>
        )       
    }

    return (
        <Router >
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={ AuthRouter }
                        isLoggedIn={ isLoggedIn }
                    />

                    <PrivateRoute
                         
                        path="/"
                        component={ DashboardRoutes }
                        isLoggedIn={ isLoggedIn }
                    />

                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </Router> 
    )
}
