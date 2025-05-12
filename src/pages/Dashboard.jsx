import React, { useEffect, useState } from 'react';
import { getAppointments } from '../services/appointmentService';

function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        // Petición al backend para obtener las citas
        const data = await getAppointments(); 
        setAppointments(data);
      } catch (error) {
        console.error("Error al obtener citas:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAppointments();
  }, []);

  if (loading) return <p>Cargando citas...</p>;

  return (
    <div>
      <h2>Citas registradas</h2>
      {appointments.length === 0 ? (
        <p>No hay citas registradas.</p>
      ) : (
        <ul>
          {appointments.map((appt) => (
            <li key={appt.rowKey}>
              <strong>{appt.FullName}</strong> - {appt.Service} - {appt.Status}
              <br />
              Fecha: {new Date(appt.SelectedDate).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;

