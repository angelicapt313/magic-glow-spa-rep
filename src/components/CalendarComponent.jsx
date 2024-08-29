import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

const CalendarComponent = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setShowCalendar(false);
  }

  const toggleCalendar = () => setShowCalendar(!showCalendar);

  const formatDateInSpanish = (date) => {
    return date.toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="wrapper ">
      <button
        onClick={toggleCalendar}
        className="btn" style={{backgroundColor:'#b4a4bc'}}>
        <p className="m-0">Seleccionar fecha:</p>
      </button>
      <div className="mt-1">

        {showCalendar && (
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              />
        )}
        <p className="my-3">Fecha seleccionada:<span className="fw-bold m-1">{formatDateInSpanish(selectedDate)}</span> </p>
      </div>
    </div>


  );


}


export default CalendarComponent;