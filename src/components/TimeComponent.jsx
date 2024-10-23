import React from "react";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css'
import TimePicker from "react-time-picker";
import '../styles/timeComponent.css'

const TimeComponent = ({ selectedTime, onTimeChange }) => {
    const handleTimeChange = (newTime) => {
        onTimeChange(newTime);
    }

    return (
        <div className="position-relative">
            <p className="fw-bold">Selecciona un Horario:</p>
            <div className="time-picker-container w-100 border-4">
                <TimePicker
                    // value={value}
                    // onChange={(newValue) => setValue(newValue)}
                    value={selectedTime}
                    onChange={handleTimeChange}
                    format="hh:mm a"
                    clearIcon={null}
                    clockIcon={null}
                    clockProps={{
                        size: 130, // Tamaño del reloj
                        hourHandWidth: 4, // Grosor de la aguja de las horas
                        minuteHandWidth: 2, // Grosor de la aguja de los minutos
                        renderNumbers: true, // Muestra los números en el reloj
                        renderMinuteMarks: true, // Muestra las marcas de minutos

                    }}
                />
            </div>
        </div>

    );
}

export default TimeComponent;