import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CalendarScreen } from '../components/agendaMedica/CalendarScreen'
import { MedicalScreen } from '../components/medical/MedicalScreen'



export const DashboardRoutes = () => {
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/agenda" component={ CalendarScreen }/>
                    <Route exact path="/medical" component={ MedicalScreen }/>

                    <Redirect to="/agenda"/>
                </Switch>
            </div>  
        </>
    )
}
