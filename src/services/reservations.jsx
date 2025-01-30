
export const getAppointments = async () => {
    try {
        let apiUrl = process.env.REACT_APP_API_URL;
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching appointments:', error);
        throw error;
    }
}

export const createAppointment = async (appointmentData) => {
    try {
        
        let apiUrl = process.env.REACT_APP_API_URL;
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointmentData)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating appointment:', error);
        throw error;
    }
}
