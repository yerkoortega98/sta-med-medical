import React, { useState } from 'react';

// Componentes
import { NavBar } from '../ui/NavBar';
import { messages } from '../../helpers/calendar-message-es';

// Importamos estas dos librerias para poder utilizar el calendario
import { Calendar,momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

// Importamos css
import 'react-big-calendar/lib/css/react-big-calendar.css';
import  'moment/locale/es';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CalendarDiary } from './CalendarDiary';
import { diarySetActive } from '../../actions/diary';

moment.locale('es');

const localizer = momentLocalizer( moment );

export const CalendarScreen = () => {

    const [onClickEvent, setOnClickEvent] = useState(false);


    const { diary } = useSelector(state => state.diary)

    const dispatch = useDispatch();

    const event = diary;
    
    const onDoubleClick = (e)=>{
        setOnClickEvent(true);
        dispatch(diarySetActive(e));
    }

    const onSelectEvent = (e)=>{
        
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
                onSelectEvent={ onSelectEvent }
                timeslots={1}
                components={{
                    event: CalendarDiary
                }}
                views={{month:true,week: true ,day:true}}
           />

           { onClickEvent  && <Redirect to='/medical'/>     }
        </div>
    )
}
