import React from "react";
// import 'react-time-picker/dist/TimePicker.css';
// import 'react-clock/dist/Clock.css'
import TimePicker from "react-time-picker";

const TimeComponent = ({ selectedTime, onTimeChange } ) => {

    return (
        <div className="time-picker-container">
        <p>Selecciona Horario</p>
        <TimePicker
        // value={value}
        // onChange={(newValue) => setValue(newValue)}
        onChange={onTimeChange}
        value={selectedTime}
        format="hh:mm a"
        clearIcon={null}
        />
        </div>
    );
}

export default TimeComponent;