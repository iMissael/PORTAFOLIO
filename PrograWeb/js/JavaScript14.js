function Calcular() {
    let cadena = document.getElementById("numeroC").value;
      if (cadena === "") {
        alert("Por favor, ingresa los números.");
        return;
    }

    let arreglo = cadena.split(",");
    let numeros = arreglo.map(Number);
    if (numeros.some(isNaN)) {
        alert("Asegúrate de ingresar solo números separados por comas.");
        return;
    }


    let M = Math.max(...numeros);
    let m = Math.min(...numeros);
    let suma = numeros.reduce((acc, valor) => acc + valor, 0);
    let pro = suma / numeros.length;

  
    document.getElementById("mayor").value = M;
    document.getElementById("menor").value = m;
    document.getElementById("promedio").value = pro;


}