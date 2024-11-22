function formularioRegistro() {
  let nombre = prompt("Ingrese su nombre:");
  if (!nombre) {
    alert("El nombre es obligatorio.");
    return;
  }

  let correo = prompt("Ingrese su correo electrónico:");
  if (!correo || !correo.includes("@")) {
    alert("Debe ingresar un correo válido.");
    return;
  }

  let contraseña = prompt("Ingrese su contraseña:");
  if (!contraseña) {
    alert("La contraseña es obligatoria.");
    return;
  }

  let confirmacion = confirm(
    `¿Desea registrar los datos?\nNombre: ${nombre}\nCorreo: ${correo}`
  );
  if (confirmacion) {
    alert("¡Registro exitoso!");
  } else {
    alert("Registro cancelado.");
  }
}
