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
