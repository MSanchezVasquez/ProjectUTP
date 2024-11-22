function validarUsuario() {
  const usuario = document.getElementById("usuario").value;
  if (usuario.trim() === "") {
    alert("El campo Usuario no puede estar vacío.");
  }
}

function validarContraseña() {
  const contraseña = document.getElementById("contraseña").value;
  if (contraseña.trim() === "") {
    alert("El campo Contraseña no puede estar vacío.");
  }
}

function iniciarSesion() {
  const usuario = document.getElementById("usuario").value;
  const contraseña = document.getElementById("contraseña").value;
  if (usuario === "admin" && contraseña === "1234") {
    alert("Sesión iniciada correctamente.");
  } else {
    alert("Credenciales incorrectas.");
  }
}
