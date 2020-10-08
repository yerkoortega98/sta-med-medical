import React, { useState } from 'react';

// Componentes
import { NavBar } from '../ui/NavBar';
import { messages } from '../../helpers/calendar-message-es';

// Importamos estas dos librerias para poder utilizar el calendario
import { Calendar,momentLocalizer} from 'react-big-calendar';
import moment from 'moment';


// Importamos css
import 'react-big-calendar/lib/css/react-big-calendar.css';
import  'moment/locale/es';
import { Redirect } from 'react-router-dom';



// Cambiamos el idioma de moment
moment.locale('es');

const localizer = momentLocalizer( moment );

const events =[{
    title: ' Yerko Ortega ',
    start: moment().toDate(),
    end: moment().add(10,'minute').toDate(),
    bgcolor:'#fafafa'
}]


export const CalendarScreen = () => {

    const [onClickEvent, setOnClickEvent] = useState(false);


    const onDoubleClick = ()=>{
        console.log("Aqui deberia poder mostrar una vista")
        setOnClickEvent(true);
    }
    // Creamos una nueva constante. Lo que sea que regrese, va a ser el estilo que le va a aplicar al evento en particular
    const eventStyleGetter = (event,start,end,isSelected )=>{

        const style={
            backgroundColor:'#367CF7',
            borderRadius:'0px',
            opacity:0.8,
            display:'block',
            color:'white'
        }
        return {style}
    }

    return (
        <div className="calendar-screen">
           <NavBar/>
           <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={ messages }
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick }      
           />

           {
               (onClickEvent)
               ?
               (<Redirect to='/medical'/>)
               :
               console.log("")
            
           }
           


        </div>
    )
}
