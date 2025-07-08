let estudiantes= [];
function Agregar() {
    let nom = document.getElementById("Nombre").value;
      if (nom === "") {
        alert("Por favor, ingresa un Nombre.");
        return;
    }
    let cali = document.getElementById("Calificacion").value;
      if (cali === "") {
        alert("Por favor, ingresa un número.");
        return;
    }

    let estudiante = {nombre: nom,calificacion: parseFloat(cali)};
    estudiantes.push(estudiante);

    }

function Calcular(){
    if (estudiantes.length === 0) {
        alert("No hay estudiantes registrados.");
        return;
    }

    let promedio = estudiantes.reduce((total, estudiante) => total +
    estudiante.calificacion, 0) / estudiantes.length;

    let calificacionMaxima = Math.max(...estudiantes.map(e =>e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e =>e.calificacion));

    let estudianteMayor = estudiantes.find(e => e.calificacion === calificacionMaxima);
    let estudianteMenor = estudiantes.find(e => e.calificacion === calificacionMinima);

  
    document.getElementById("mayor").value = estudianteMayor.nombre;
    document.getElementById("menor").value = estudianteMenor.nombre;
    document.getElementById("promedio").value = promedio;
}