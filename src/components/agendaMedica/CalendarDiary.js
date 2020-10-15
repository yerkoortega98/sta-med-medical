import React from 'react'

export const CalendarDiary = ({ event }) =>{

    const { rutPaciente, nombrePaciente } = event;

    return (
        <div>
            <strong> { rutPaciente } - { nombrePaciente }</strong>
        </div>
    )
}