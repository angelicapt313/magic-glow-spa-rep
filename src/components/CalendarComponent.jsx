import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setShowCalendar(false);
  }

  const toggleCalendar = () => setShowCalendar(!showCalendar);


  return (
    <div className="wrapper">
      <button
        onClick={toggleCalendar}
        className="btn" style={{backgroundColor:'#b4a4bc'}}>
        <p className="m-0">Seleccionar fecha:</p>
      </button>
      <div className="calendar-container">

        {showCalendar && (
          <div className="calendar-container">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate} />
          </div>
        )}
        <p className="my-3">Fecha seleccionada:<span className="fw-bold m-1">{selectedDate.toDateString()}</span> </p>
      </div>
    </div>


  );


}


export default CalendarComponent;