import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // Importa el estilo por defecto

const CalendarComponent = () => {

    const [date, setDate] = useState(new Date());


    const handleDateChange = (newDate) => {
        setDate(date);
    }


    return(
       
            <div className="calendar-container">
              <h3 className="">Selecciona una fecha:</h3>
               <Calendar
                onChange={handleDateChange}
                value={date}
                className="my-calendar"
              /> 
              <p>Fecha seleccionada: {date.toDateString()}</p>
            </div>
        
    );


}


export default CalendarComponent;