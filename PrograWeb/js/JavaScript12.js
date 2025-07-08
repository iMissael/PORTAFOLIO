function calcular() {
  MXM = document.getElementById("mxm").value;

  if (MXM === "" || isNaN(MXM)) {
    alert("Por favor, ingresa un valor numérico.");
    return;
  }

  USD = (parseFloat(MXM) / 18.18);
  document.getElementById("resultado").value = USD.toFixed(2) + " Dolares";
}