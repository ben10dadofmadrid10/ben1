function verificarValor() {
  let valor = 100; 
  let mensaje = document.getElementById("mensaje");

  if (valor === 100) {
    mensaje.innerText = "✅ ¡Correcto! El valor es exactamente igual a 100.";
    mensaje.style.color = "green";
  } else {
    mensaje.innerText = "❌ El valor NO es 100.";
    mensaje.style.color = "red";
  }
}
