const evento = new Date("2025-07-25T16:00:00-05:00").getTime();

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = evento - ahora;

  if (diferencia <= 0) {
    document.getElementById("contador").textContent = "¡Ya comenzó el estreno!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("contador").textContent =
    `Faltan ${dias}d ${horas}h ${minutos}m ${segundos}s 🎉`;
}

setInterval(actualizarContador, 1000);
actualizarContador();
