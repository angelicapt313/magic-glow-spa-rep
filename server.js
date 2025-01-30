// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');}




async function fetchOpenAIResponse(prompt) {
    const endpoint = "https://api.openai.com/v1/completions"; // URL base de la API

    // Reemplaza con tu clave de API de OpenAI
    const apiKey = "TU_CLAVE_API";

    // Configuración de la solicitud
    const requestBody = {
        model: "text-davinci-003", // Modelo que deseas utilizar
        prompt: prompt,            // El texto ingresado por el usuario
        max_tokens: 150,           // Límite de tokens en la respuesta
        temperature: 0.7           // Grado de creatividad
    };

    try {
        // Realiza la solicitud a la API usando fetch
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        // Verifica si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        // Procesa la respuesta de la API
        const data = await response.json();
        return data.choices[0].text.trim(); // Retorna el texto generado

    } catch (error) {
        console.error("Error al conectar con la API de OpenAI:", error);
        return "Hubo un problema al obtener una respuesta de la IA.";
    }
}

// Ejemplo de uso de la función
(async () => {
    const prompt = "Escribe una breve descripción sobre spas"; // Entrada del usuario
    const response = await fetchOpenAIResponse(prompt);
    console.log("Respuesta de la IA:", response);
})();










// const app = express();
// app.use(bodyParser.json());

// const OPENAI_API_KEY = 'your-openai-api-key';

// app.post('/chat', async (req, res) => {
//     const userMessage = req.body.message;

//     try {
//         const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
//             prompt: userMessage,
//             max_tokens: 150,
//             n: 1,
//             stop: null,
//             temperature: 0.9,
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${OPENAI_API_KEY}`,
//                 'Content-Type': 'application/json'
//             }
//         });

//         const aiMessage = response.data.choices[0].text.trim();
//         res.json({ message: aiMessage });
//     } catch (error) {
//         console.error('Error communicating with OpenAI:', error);
//         res.status(500).send('Error communicating with AI');
//     }
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
