// document.addEventListener("DOMContentLoaded", function () {
//     const activityForm = document.getElementById("activity-form");
//     const activityList = document.getElementById("activity-list");


//       // Realizar una solicitud GET al cargar la página
//   fetch('server/api.php',{
//     method: 'GET'
//   })
//   .then(response => response.json())
//   .then(data => {
//     activityList.innerHTML = '';
//     // Manipular los datos recibidos, como agregarlos a la lista en el DOM
//     data.forEach(activity => {
//       addActivityToList(activity);
//     });
//   })
//   .catch(error => console.error('Error:', error));

  
//     // Manejar el envío del formulario para registrar actividades
//     activityForm.addEventListener("submit", function (e) {
//       e.preventDefault();
  
//       // Obtener los valores del formulario
//       const description = document.getElementById("description").value;
//       const days = document.getElementById("days").value;
//       const startDate = document.getElementById("start-date").value;
//       const endDate = document.getElementById("end-date").value;
//       const responsible = document.getElementById("responsible").value;
  
//       // Crear un objeto con los datos de la nueva actividad
//       const newActivity = {
//         description,
//         days,
//         startDate,
//         endDate,
//         responsible,
//       };
  
//       // Realizar la solicitud POST al servidor para agregar la actividad
//       fetch('server/api.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newActivity),
//       })
//       .then(response => response.json())
//       .then(data => {
//         // En este punto, podrías recibir una respuesta del servidor con el nuevo registro
//         // y realizar alguna acción adicional si es necesario.
  
//         // Añadir la actividad a la lista en el DOM
//         addActivityToList(newActivity);
        
//         // Limpiar el formulario
//         activityForm.reset();
//       })
//       .catch(error => console.error('Error:', error));
//     });
  
//     // Función para agregar una actividad a la lista
//     function addActivityToList(activity) {
//         const listItem = document.createElement("li");
//         listItem.innerHTML = `
//             <strong>${activity.description}</strong> 
//             (Días: ${activity.cantidad_dias}, 
//             Inicio: ${activity.fecha_inicio}, 
//             Fin: ${activity.fecha_fin}, 
//             Responsable: ${activity.responsible})
//         `;
//         activityList.appendChild(listItem);
//     }
// });  
document.addEventListener("DOMContentLoaded", function () {
    const activityForm = document.getElementById("activity-form");
    const activityList = document.getElementById("activity-list");

    // Recuperar la lista de actividades del almacenamiento local al cargar la página
    const storedActivities = JSON.parse(localStorage.getItem("activities")) || [];

    // Mostrar las actividades almacenadas en el almacenamiento local
    storedActivities.forEach(activity => {
        addActivityToList(activity);
    });

    // Manejar el envío del formulario para agregar actividades
    activityForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const description = document.getElementById("description").value;
        const days = document.getElementById("days").value;
        const startDate = document.getElementById("start-date").value;
        const endDate = document.getElementById("end-date").value;
        const responsible = document.getElementById("responsible").value;

        const newActivity = {
            description,
            days,
            startDate,
            endDate,
            responsible,
        };

        // Agregar la nueva actividad a la lista en el navegador y en el almacenamiento local
        addActivityToList(newActivity);
        storedActivities.push(newActivity);
        localStorage.setItem("activities", JSON.stringify(storedActivities));

        // Limpiar el formulario
        activityForm.reset();
    });

    // Función para agregar una actividad a la lista
    function addActivityToList(activity) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${activity.description}</strong> 
            (Días: ${activity.days}, 
            Inicio: ${activity.startDate}, 
            Fin: ${activity.endDate}, 
            Responsable: ${activity.responsible})
        `;
        activityList.appendChild(listItem);
    }
});
 