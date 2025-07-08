function Verificar() {
  Edad = document.getElementById("edad").value;

  if (Edad === "" || isNaN(Edad)) {
    alert("Por favor, ingresa su edad.");
    return;
  }
  if (Edad >= 18) {
    document.getElementById("resultado").value = " Puede votar";
  }
  else{document.getElementById("resultado").value = " No puede";}
}