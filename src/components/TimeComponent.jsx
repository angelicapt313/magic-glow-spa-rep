import React, { useState } from "react";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css'
import TimePicker from "react-time-picker";
import '../styles/timeComponent.css'

const TimeComponent = ({ selectedTime, onTimeChange }) => {

    const [showTime, setShowTime] = useState(false);

    const handleTimeChange = (newTime) => {
        onTimeChange(newTime);
    }

    const toggleTime = () => setShowTime(!showTime);

    return (
        <div className="wrapper">

            <button type="button" onClick={toggleTime} className="btn" style={{ backgroundColor: '#b4a4bc' }}>
                <p className="m-0">Seleccionar horario:</p>
            </button>

            <div className="mt-1">
                {showTime && (
                    
                    <TimePicker
                        className="bg-transparent border-1"
                        value={selectedTime}
                        onChange={handleTimeChange}
                        disableClock={true}
                        minTime="10:00"
                        maxTime="18:00"
                        format="hh:mm a"
                        clearIcon={null}
                        clockIcon={null}
                        // clockProps={{
                        //     size: 130, // Tamaño del reloj
                        //     hourHandWidth: 4, // Grosor de la aguja de las horas
                        //     minuteHandWidth: 2, // Grosor de la aguja de los minutos
                        //     renderNumbers: true, // Muestra los números en el reloj
                        //     renderMinuteMarks: true, // Muestra las marcas de minutos

                        // }}
                    />
                )}
                <p>Horario seleccionado: <span className="fw-bold">{selectedTime} hrs</span></p>
                
           </div>
        </div>


    );
}

export default TimeComponent;