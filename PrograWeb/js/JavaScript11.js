function calcular() {
  K = document.getElementById("kilometros").value;

  if (K === "" || isNaN(K)) {
    alert("Por favor, ingresa un valor numérico.");
    return;
  }

  M = (parseFloat(K) * 0.621371);
  document.getElementById("resultado").value = M.toFixed(2) + " Millas";
}