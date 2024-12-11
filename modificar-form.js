function modificarEstiloFormulario() {
  const formulario = document.querySelector("form");
  formulario.style.backgroundColor = "#f5f5f5";
  formulario.style.border = "2px solid #3498db";
  formulario.style.padding = "40px 20px 30px";
  formulario.style.borderRadius = "10px";
  alert("Estilo del formulario modificado.");

  const boton = document.querySelector("button");
  boton.style.color = "black";
  const rect = document.querySelector(".boton.seis rect");
  rect.style.stroke = "#5564eb";
  rect.style.width = "99.9%";
}
