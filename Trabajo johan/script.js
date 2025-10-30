const boton = document.getElementById('btn-cita');
const imagenPerro = document.getElementById('imagen-perro');

async function obtenerPerro() {
  const url = 'https://dog.ceo/api/breeds/image/random';

  try {
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error('No se pudo obtener el perro');
    }

    const datos = await respuesta.json();

    if (datos.status === 'success') {
      imagenPerro.src = datos.message;
      imagenPerro.alt = 'Perro aleatorio';
      imagenPerro.style.border = '3px solid #00ff6a';
    } else {
      imagenPerro.alt = 'No se pudo cargar el perro.';
      imagenPerro.style.border = '3px solid orange';
    }

  } catch (error) {
    imagenPerro.alt = 'Error al cargar el perro.';
    imagenPerro.style.border = '3px solid red';
  }
}

boton.addEventListener('click', obtenerPerro);
