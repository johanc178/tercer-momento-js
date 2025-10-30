async function buscarPokemon() {
  const nombre = document.getElementById("nombrePokemon").value.toLowerCase();
  const resultado = document.getElementById("resultado");

  if (!nombre) {
    resultado.innerHTML = "<p>Por favor ingresa un nombre de Pokémon.</p>";
    return;
  }

  resultado.innerHTML = "<p>Cargando...</p>";

  try {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    if (!respuesta.ok) {
      throw new Error("Pokémon no encontrado");
    }

    const datos = await respuesta.json();

    resultado.innerHTML = `
      <h2>${datos.name.toUpperCase()}</h2>
      <img src="${datos.sprites.front_default}" alt="${datos.name}">
      <p><strong>Tipo:</strong> ${datos.types.map(t => t.type.name).join(", ")}</p>
      <p><strong>Altura:</strong> ${datos.height / 10} m</p>
      <p><strong>Peso:</strong> ${datos.weight / 10} kg</p>
    `;
  } catch (error) {
    resultado.innerHTML = "<p>No se pudo cargar el Pokémon. Intenta con otro nombre.</p>";
    console.error(error);
  }
}