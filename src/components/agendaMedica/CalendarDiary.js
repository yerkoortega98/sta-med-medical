import React from 'react'

export const CalendarDiary = ({ event }) =>{

    const {  nombrePaciente } = event;

    return (
       
            <strong> { nombrePaciente }</strong>
    )
}