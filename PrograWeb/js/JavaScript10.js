function calcular() {
  C = document.getElementById("grados").value;

  if (C === "" || isNaN(C)) {
    alert("Por favor, ingresa un valor numérico.");
    return;
  }

  F = (parseFloat(C) * 9/5) + 32;
  document.getElementById("resultado").value = F.toFixed(2) + " °F";
}
