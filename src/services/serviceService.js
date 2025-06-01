const API_BASE_URL = "http://localhost:7279/api";

export async function getAllServices() {
  try {
    const response = await fetch(`${API_BASE_URL}/services`);
    if (!response.ok) {
      throw new Error("Error al obtener los servicios");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al consumir servicios:", error);
    return [];
  }
}