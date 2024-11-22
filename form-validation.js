document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-contact");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;
    let messages = [];

    // Validación de nombre
    if (nombre.value.trim() === "") {
      messages.push("El campo 'Nombre' es obligatorio.");
      isValid = false;
    }

    // Validación de email
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email.value.trim() === "") {
      messages.push("El campo 'Correo Electrónico' es obligatorio.");
      isValid = false;
    } else if (!emailPattern.test(email.value)) {
      messages.push("El formato del 'Correo Electrónico' es incorrecto.");
      isValid = false;
    }

    // Validación de teléfono
    const phonePattern = /^[0-9]+$/;
    if (telefono.value.trim() === "") {
      messages.push("El campo 'Teléfono' es obligatorio.");
      isValid = false;
    } else if (!phonePattern.test(telefono.value)) {
      messages.push("El 'Teléfono' debe contener solo números.");
      isValid = false;
    }

    // Validación de mensaje
    if (mensaje.value.trim() === "") {
      messages.push("El campo 'Mensaje' es obligatorio.");
      isValid = false;
    }

    // Mostrar mensajes de error si hay problemas
    if (!isValid) {
      event.preventDefault();
      alert(messages.join("\n"));
    }
  });
});
