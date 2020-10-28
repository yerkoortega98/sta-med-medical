import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CalendarScreen } from '../components/agendaMedica/CalendarScreen'
import { MedicalScreen } from '../components/medical/MedicalScreen'



export const DashboardRoutes = () => {
    const {activePatient} = useSelector(state => state.diary)
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/agenda" component={ CalendarScreen }/>
                                     
                    {
                        activePatient && <Route exact path="/medical" component={ MedicalScreen }/>
                    }
                    <Redirect to="/agenda"/>
                </Switch>
            </div>  
        </>
    )
}
