import React from 'react';
import { Calendar,momentLocalizer } from 'react-big-calendar';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import  'moment/locale/es';

// Componentes
import { CalendarDiary } from './CalendarDiary';
import { NavBar } from '../ui/NavBar';
import { messages } from '../../helpers/calendar-message-es';



// Actions
import { startLoadInfoPaciente } from '../../actions/patient';


moment.locale('es');

const localizer = momentLocalizer( moment );

export const CalendarScreen = () => {

    const { isChecking } = useSelector(state => state.pacienteActivo)

    const { diary } = useSelector(state => state.diary)

    const dispatch = useDispatch();

    const event = diary;
    
    const onDoubleClick = (e)=>{
        dispatch( startLoadInfoPaciente(e.rutPaciente));
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
        return { style }
    }
    
    return (
        <div className="calendar-screen">
           <NavBar/>
           <Calendar
                localizer={ localizer }
                events={ event }
                startAccessor="start"
                endAccessor="end"
                messages={ messages }
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick } 
                timeslots={1}
                components={{
                    event: CalendarDiary
                }}
                views={{month:true,week: true ,day:true}}
           />

           { isChecking  && <Redirect to='/medical'/>      }

           
        </div>
    )
}
