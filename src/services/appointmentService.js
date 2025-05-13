const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Crear cita
export async function createAppointment(data) {
  try {
    const response = await fetch(`${BASE_URL}/createappointment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Error al crear la cita");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en createAppointment:", error.message);
    throw error;
  }
}

// Obtener citas (con filtro opcional por fecha o estado)
export async function getAppointments({ date, status } = {}) {
  try {
    const params = new URLSearchParams();
    if (date) params.append("date", date);
    if (status) params.append("status", status);

    const response = await fetch(`${BASE_URL}/appointments?${params.toString()}`);
    if (!response.ok) throw new Error("Error al obtener citas");

    return await response.json();
  } catch (error) {
    console.error("Error en getAppointments:", error.message);
    throw error;
  }
}

// Actualizar estado de una cita
export async function updateAppointmentStatus (id, status) {
  try {
    const response = await fetch(`${BASE_URL}/appointments/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    if (!response.ok) throw new Error("Error al actualizar estado");
    return await response.json();
  } catch (error) {
    console.error("Error en updateStatus:", error.message);
    throw error;
  }
}
