const manejadorTareas = (() => {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    const guardarTareas = () => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    };

    return {
        agregar: (tarea) => {
            tareas.push({ texto: tarea, completada: false });
            guardarTareas();
        },
        obtener: () => tareas,
        eliminar: () => {
            if (tareas.length > 0) {
                tareas.pop();
                guardarTareas();
            }
        }
    };
})();
function agregarTarea(){
    const input = document.getElementById("tarea");
    const tarea = input.value.trim();

    if (tarea === "") {
        Swal.fire("Error", "Por favor ingresa una tarea", "error");
        return;
    }

    manejadorTareas.agregar(tarea);
    Swal.fire("Agregada", "Tarea agregada exitosamente", "success");
    input.value = "";
    
}
function obtenerTarea(){
    const resultado = document.getElementById("resultado");
    const tareas = manejadorTareas.obtener();

    if (tareas.length === 0) {
        resultado.value = "No hay tareas";
    } else {
        resultado.value = tareas.map(t => t.texto).join(" | ");
    }
    
}
function renderizarTarea() {
  const contenedor = document.getElementById("listaTareas");
  contenedor.innerHTML = ""; 

  const tareas = manejadorTareas.obtener();

  if (tareas.length === 0) {
    contenedor.innerHTML = "<p>No hay tareas para mostrar.</p>";
    return;
  }

  const ul = document.createElement("ul");

  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${tarea.texto}`;
    ul.appendChild(li);
  });

  contenedor.appendChild(ul);
}

function eliminarTarea(){
    if (manejadorTareas.obtener().length === 0) {
        Swal.fire("Nada que eliminar", "No hay tareas registradas", "info");
        return;
    }

    Swal.fire({
        title: "¿Eliminar la última tarea?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            manejadorTareas.eliminar();
            Swal.fire("Eliminada", "La última tarea fue eliminada", "success");
        }
    });
}
