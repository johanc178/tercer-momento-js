const boton = document.getElementById("boton-clima");
const textoClima = document.getElementById("texto-clima");

async function obtenerClima() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=6.24&longitude=-75.57&current_weather=true"; // Medellín

    try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error("No se pudo obtener el clima.");
        }

        const datos = await respuesta.json();

        const clima = datos.current_weather;

        textoClima.innerText = ` Temperatura: ${clima.temperature}°C 
    Viento: ${clima.windspeed} km/h 
    Hora: ${clima.time}`;
        textoClima.style.color = "green";

    } catch (error) {
        textoClima.innerText = "Error al obtener el clima. Intenta de nuevo.";
        textoClima.style.color = "red";
        console.error(error);
    }
}

boton.addEventListener("click", obtenerClima);