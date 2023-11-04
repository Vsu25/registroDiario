document.addEventListener("DOMContentLoaded", function () {
    const activityForm = document.getElementById("activity-form");
    const activityList = document.getElementById("activity-list");


      // Realizar una solicitud GET al cargar la página
  fetch('server/api.php',{
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => {
    activityList.innerHTML = '';
    // Manipular los datos recibidos, como agregarlos a la lista en el DOM
    data.forEach(activity => {
      addActivityToList(activity);
    });
  })
  .catch(error => console.error('Error:', error));

  
    // Manejar el envío del formulario para registrar actividades
    activityForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Obtener los valores del formulario
      const description = document.getElementById("description").value;
      const days = document.getElementById("days").value;
      const startDate = document.getElementById("start-date").value;
      const endDate = document.getElementById("end-date").value;
      const responsible = document.getElementById("responsible").value;
  
      // Crear un objeto con los datos de la nueva actividad
      const newActivity = {
        description,
        days,
        startDate,
        endDate,
        responsible,
      };
  
      // Realizar la solicitud POST al servidor para agregar la actividad
      fetch('server/api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newActivity),
      })
      .then(response => response.json())
      .then(data => {
        // En este punto, podrías recibir una respuesta del servidor con el nuevo registro
        // y realizar alguna acción adicional si es necesario.
  
        // Añadir la actividad a la lista en el DOM
        addActivityToList(newActivity);
        
        // Limpiar el formulario
        activityForm.reset();
      })
      .catch(error => console.error('Error:', error));
    });
  
    // Función para agregar una actividad a la lista
    function addActivityToList(activity) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${activity.description}</strong> 
            (Días: ${activity.cantidad_dias}, 
            Inicio: ${activity.fecha_inicio}, 
            Fin: ${activity.fecha_fin}, 
            Responsable: ${activity.responsible})
        `;
        activityList.appendChild(listItem);
    }
});  
  