function Calcular(x) {

    let a = document.getElementById("numero1").value;
    let b = document.getElementById("numero2").value;
    if (a === "" || b === "" || isNaN(a) || isNaN(b)) {
        Swal.fire({
        icon: 'error',
        title: 'Datos inválidos',
        text: 'Por favor, ingresa dos números válidos.'
        });
        return;
    }
    const n1 = parseFloat(a);
    const n2 = parseFloat(b);
   

    const suma = (n1,n2) => n1+n2;
    const resta = (n1,n2) => n1-n2;
    const multiplicacion = (n1,n2) => n1*n2;
    const division = (n1,n2) => b !== 0 ? n1/n2: 'Error: División por 0';
    let resultado;
    switch (x) {
        case 's':
            resultado =suma(n1,n2);
            break;
        case 'r':
            resultado =resta(n1,n2);
            break;
        case 'm':
            resultado =multiplicacion(n1,n2);
            break;
        case 'd':
            resultado =division(n1,n2);
            break;
        default:
            resultado = "Operación no válida";
    }
    document.getElementById("resultado").value = resultado;
}