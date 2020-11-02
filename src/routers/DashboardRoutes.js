import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

import { CalendarScreen } from '../components/agendaMedica/CalendarScreen'
import { MedicalScreen } from '../components/medical/MedicalScreen'



export const DashboardRoutes = () => {
    

    const { isChecking } = useSelector(state => state.pacienteActivo);

    const [isChechkingOn, setIsChechkingOn] = useState(false);

    useEffect(() => {
        if( isChecking ){        
            
            setIsChechkingOn(true);
            
        } else {
            setIsChechkingOn(false);
        }
        setIsChechkingOn(false)
}, [isChecking ]);

    
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/agenda" component={ CalendarScreen }/>

                    <Route exact path="/medical" component={ MedicalScreen }/>
                        
                    {
                        isChechkingOn 
                        ? <Route exact path="/medical" component={ MedicalScreen} />
                        :(<Redirect to='/agenda'/> )
                    }
                </Switch>
            </div>  
        </>
    )
}
