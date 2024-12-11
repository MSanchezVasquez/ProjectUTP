window.onload = function () {
  const contenidoDiv = document.getElementById("contenido");
  contenidoDiv.textContent = "Página cargada exitosamente.";
};

function añadirElemento() {
  const contenidoDiv = document.getElementById("contenido");
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "Nuevo párrafo agregado con JavaScript.";
  contenidoDiv.appendChild(nuevoParrafo);
}

function eliminarElemento() {
  const contenidoDiv = document.getElementById("contenido");
  if (contenidoDiv.lastChild) {
    contenidoDiv.removeChild(contenidoDiv.lastChild); // Elimina el último hijo
  } else {
    alert("No hay elementos para eliminar.");
  }
}

function vaciarContenido() {
  const contenidoDiv = document.getElementById("contenido");
  contenidoDiv.innerHTML = "";
}
