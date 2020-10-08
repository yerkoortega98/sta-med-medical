import React from 'react';
import { NavBar } from '../ui/NavBar';

// Importamos estas dos librerias para poder utilizar el calendario
import {Calendar,momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer( moment );

const events =[{
    title: ' Yerko Ortega ',
    start: moment().toDate(),
    end: moment().add(10,'minute').toDate(),
    bgcolor:'#fafafa'
}]


export const CalendarScreen = () => {




    return (
        <div className="calendar-screen">
           
           <NavBar/>

           <Calendar
                localizer={ localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
           />
        </div>
    )
}
