
export function formatToUTC(date, time) {
  if (!date || !time) {
    throw new Error("Fecha u hora no proporcionada.");
  }

  const [hours, minutes] = time.split(":").map(Number);

  const combined = new Date(date);
  combined.setHours(hours, minutes, 0, 0); // hh:mm:00

  if (isNaN(combined.getTime())) {
    throw new Error("Fecha y hora combinadas no válidas.");
  }

  return combined.toISOString(); // formato UTC
}
