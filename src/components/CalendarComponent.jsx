import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

const CalendarComponent = ({ selectedDate, onDateChange }) => {

  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (newDate) => {
    // Actualiza la fecha en el estado del padre (InfoModal)
    onDateChange(newDate); // Envía la fecha seleccionada al componente superior
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
      type="button"
        onClick={toggleCalendar}
        className="btn" style={{ backgroundColor: '#b4a4bc' }}>
        <p className="m-0">Seleccionar fecha:</p>
      </button>

      <div className="mt-1">

        {showCalendar && (
          <Calendar
            onChange={handleDateChange} // Cambiar la fecha
            value={selectedDate} // Pasar la fecha seleccionada
            className="w-100 mx-auto bg-transparent border-1"
          />
        )}
        <p className="my-3">Fecha seleccionada:<span className="fw-bold m-1">{formatDateInSpanish(selectedDate)}</span> </p>
      </div>
    </div>


  );


}


export default CalendarComponent;