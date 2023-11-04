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
// document.addEventListener("DOMContentLoaded", function () {
//     const activityForm = document.getElementById("activity-form");
//     const activityList = document.getElementById("activity-list");

//     // Recuperar la lista de actividades del almacenamiento local al cargar la página
//     const storedActivities = JSON.parse(localStorage.getItem("activities")) || [];

//     // Mostrar las actividades almacenadas en el almacenamiento local
//     storedActivities.forEach(activity => {
//         addActivityToTable(activity);
//     });

//     // Manejar el envío del formulario para agregar actividades
//     activityForm.addEventListener("submit", function (e) {
//         e.preventDefault();

//         const description = document.getElementById("description").value;
//         const days = document.getElementById("days").value;
//         const startDate = document.getElementById("start-date").value;
//         const endDate = document.getElementById("end-date").value;
//         const responsible = document.getElementById("responsible").value;

//         const newActivity = {
//             description,
//             days,
//             startDate,
//             endDate,
//             responsible,
//         };

//         // Agregar la nueva actividad a la lista en el navegador y en el almacenamiento local
//         addActivityToList(newActivity);
//         storedActivities.push(newActivity);
//         localStorage.setItem("activities", JSON.stringify(storedActivities));

//         // Limpiar el formulario
//         activityForm.reset();
//     });

    
//     // Función para agregar una actividad a la tabla
//     function addActivityToTable(activity) {
//         const table = document.getElementById("activity-list").getElementsByTagName("tbody")[0];
    
//         const row = table.insertRow(table.rows.length);
//         const cell1 = row.insertCell(0);
//         const cell2 = row.insertCell(1);
//         const cell3 = row.insertCell(2);
//         const cell4 = row.insertCell(3);
//         const cell5 = row.insertCell(4);
//         const cell6 = row.insertCell(5); // Celda para botones
    
//         cell1.innerHTML = activity.description;
//         cell2.innerHTML = activity.days;
//         cell3.innerHTML = activity.startDate;
//         cell4.innerHTML = activity.endDate;
//         cell5.innerHTML = activity.responsible;
    
//         // Crear botón de edición
//         const editarButton = document.createElement("button");
//         editarButton.textContent = "Editar";
//         editarButton.id = "edit-button"
//         editarButton.addEventListener("click", function () {
//             // Agregar código para editar la actividad
//             editarActividad(activity, row);
//         });
//         cell6.appendChild(editarButton);
    
//         // Crear botón de eliminación
//         const eliminarButton = document.createElement("button");
//         eliminarButton.id = "del-button";
//         eliminarButton.textContent = "Eliminar";
//         eliminarButton.addEventListener("click", function () {
//             // Agregar código para eliminar la actividad
//             eliminarActividad(activity, row);
//         });
//         cell6.appendChild(eliminarButton);
//     }
//     // Evento para abrir el modal al hacer clic en el botón de edición
//     function editarActividad(activity, row) {
//         // Mostrar el modal
//         const modal = document.getElementById("modal");
//         modal.style.display = "block";

//         // Cargar los datos de la actividad en el formulario dentro del modal
//         const modalContent = document.querySelector(".modal-content");
//         modalContent.innerHTML = `
//         <h2>Editar Actividad</h2>
//         <form id="edit-form">
//             <!-- Agregar campos del formulario con los datos de la actividad -->
//             <label for="edited-description">Descripción:</label>
//             <input type="text" id="edited-description" value="${activity.description}">
//             <br>
//             <label for="edited-days">Días:</label>
//             <input type="number" id="edited-days" value="${activity.days}">
//             <br>
//             <label for="edited-startDate">Día de Inicio</label>
//             <input type="date" id="edited-startDate" value="${activity.startDate}">
//             <br>
//             <label for="edited-endDate">Día Final</label>
//             <input type="date" id="edited-endDate" value="${activity.endDate}">
//             <br>
//             <label for="edited-responsible">Responsable:</label>
//             <input type="text" id="edited-responsible" value="${activity.responsible}">
            
//             <button type="submit">Guardar Cambios</button>
//         </form>
        
//         `;
//     }

//     // Evento para cerrar el modal


//     // Evento para enviar el formulario de edición
//     const editForm = document.getElementById("edit-form");
//     editForm.addEventListener("submit", function(e) {
//         e.preventDefault();

//         // En el evento de edición, obtén el índice de la actividad a editar
//         const indiceActividad = listaDeActividades.findIndex(a => a.description === activity.description);

//         if (indiceActividad !== -1) {
//             // Luego, obtén la fila correspondiente en la tabla
//             const filaTabla = document.getElementById("activity-list").getElementsByTagName("tbody")[0].rows[indiceActividad];

//             // Ahora puedes actualizar la actividad en la lista y en la fila de la tabla
//             const editedDescription = document.getElementById("edited-description").value;
//             const editedDays = document.getElementById("edited-days").value;
//             const editedStartDate = document.getElementById("edited-startDate").value;
//             const editedEndDate = document.getElementById("edited-endDate").value;
//             const editedResponsible = document.getElementById("edited-responsible").value;

//             // Actualizar la fila de la tabla con los nuevos datos
//             row.cells[0].textContent = editedDescription;
//             row.cells[1].textContent = editedDays;
//             row.cells[2].textContent = editedStartDate;
//             row.cells[3].textContent = editedEndDate;
//             row.cells[4].textContent = editedResponsible;

//             // Actualiza la fila de la tabla con los nuevos datos
//             localStorage.setItem("activities", JSON.stringify(listaDeActividades));
//             // Actualiza otros campos en la fila de la tabla
//             modal.style.display = "none";
//             //cerrar modal
//         }

//     });


    
//     function eliminarActividad(activity, row) {
//         // Luego, elimina la fila de la tabla.
//         const storedActivities = JSON.parse(localStorage.getItem("activities")) || [];
//         const index = storedActivities.findIndex(a => a.description === activity.description);
//         if (index !== -1) {
//             storedActivities.splice(index, 1);
//             localStorage.setItem("activities", JSON.stringify(storedActivities));
//         }
//         row.remove();
//     }
    
    

// });
 
//El codigo de arriba es un intento de arreglo con BDD, Pero en GitHub se me olvido que
// no se puede ingresar una base de datos por eso use un localTemp 
// (servidor local desde el navegador)

// script.js
document.addEventListener("DOMContentLoaded", function () {
    const activityForm = document.getElementById("activity-form");
    const activityList = document.getElementById("activity-list");
    let listaDeActividades = []; // Lista de actividades

    // Recuperar la lista de actividades del almacenamiento local al cargar la página
    const storedActivities = JSON.parse(localStorage.getItem("activities")) || [];
    listaDeActividades = storedActivities;

    // Mostrar las actividades almacenadas en el almacenamiento local
    storedActivities.forEach(activity => {
        addActivityToTable(activity);
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
        addActivityToTable(newActivity);
        listaDeActividades.push(newActivity);
        localStorage.setItem("activities", JSON.stringify(listaDeActividades));

        // Limpiar el formulario
        activityForm.reset();
    });

    // Función para agregar una actividad nueva a la tabla
    function addActivityToTable(activity) {
        const table = document.getElementById("activity-list").getElementsByTagName("tbody")[0];

        const row = table.insertRow(table.rows.length);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5); // Celda para botones

        cell1.innerHTML = activity.description;
        cell2.innerHTML = activity.days;
        cell3.innerHTML = activity.startDate;
        cell4.innerHTML = activity.endDate;
        cell5.innerHTML = activity.responsible;

        // Crear botón de edición
        const editarButton = document.createElement("button");
        editarButton.textContent = "Editar";
        editarButton.id = "edit-button";
        editarButton.addEventListener("click", function () {
            editarActividad(activity, row);
        });
        cell6.appendChild(editarButton);

        // Crear botón de eliminación
        const eliminarButton = document.createElement("button");
        eliminarButton.id = "del-button";
        eliminarButton.textContent = "Eliminar";
        eliminarButton.addEventListener("click", function () {
            // Agregar código para eliminar la actividad
            eliminarActividad(activity, row);
        });
        cell6.appendChild(eliminarButton);
    }

    // Evento para abrir el modal al hacer clic en el botón de edición
   // Evento para abrir el modal al hacer clic en el botón de edición
// Evento para abrir el modal al hacer clic en el botón de edición
    function editarActividad(activity, row) {
        // Mostrar el modal
        const modal = document.getElementById("modal");
        modal.style.display = "block";

        // Cargar los datos de la actividad en el formulario dentro del modal
        const modalContent = document.querySelector(".modal-content");
        modalContent.innerHTML = `
            <h2>Editar Actividad</h2>
            <form id="edit-form">
                <!-- Agregar campos del formulario con los datos de la actividad -->
                <label for="edited-description">Descripción:</label>
                <input type="text" id="edited-description" value="${activity.description}">
                <br>
                <label for="edited-days">Días:</label>
                <input type="number" id="edited-days" value="${activity.days}">
                <br>
                <label for="edited-startDate">Día de Inicio</label>
                <input type="date" id="edited-startDate" value="${activity.startDate}">
                <br>
                <label for="edited-endDate">Día Final</label>
                <input type="date" id="edited-endDate" value="${activity.endDate}">
                <br>
                <label for="edited-responsible">Responsable:</label>
                <input type="text" id="edited-responsible" value="${activity.responsible}">
                
                <button type="button" id="save-changes-button">Guardar Cambios</button>
            </form>
        `;

        // Adjuntar un manejador de eventos al botón "Guardar Cambios" en el modal
        const saveChangesButton = document.getElementById("save-changes-button");
        saveChangesButton.addEventListener("click", function () {
            // Obtén los valores editados
            const editedDescription = document.getElementById("edited-description").value;
            const editedDays = document.getElementById("edited-days").value;
            const editedStartDate = document.getElementById("edited-startDate").value;
            const editedEndDate = document.getElementById("edited-endDate").value;
            const editedResponsible = document.getElementById("edited-responsible").value;

            // Actualiza la actividad en la lista
            const index = listaDeActividades.findIndex(a => a.description === editedDescription);

            if (index !== -1) {
                listaDeActividades[index].description = editedDescription;
                listaDeActividades[index].days = editedDays;
                listaDeActividades[index].startDate = editedStartDate;
                listaDeActividades[index].endDate = editedEndDate;
                listaDeActividades[index].responsible = editedResponsible;

                // Actualiza la fila de la tabla con los nuevos datos
                const table = document.getElementById("activity-list").getElementsByTagName("tbody")[0];
                const row = table.rows[index];
                row.cells[0].textContent = editedDescription;
                row.cells[1].textContent = editedDays;
                row.cells[2].textContent = editedStartDate;
                row.cells[3].textContent = editedEndDate;
                row.cells[4].textContent = editedResponsible;

                // Actualiza el almacenamiento local
                localStorage.setItem("activities", JSON.stringify(listaDeActividades));

                // Cierra el modal
                modal.style.display = "none";
            }
        });
    }





    // Evento para eliminar la actividad
    function eliminarActividad(activity, row) {
        const index = listaDeActividades.findIndex(a => a.description === activity.description);
        if (index !== -1) {
            // Elimina la actividad de la lista
            listaDeActividades.splice(index, 1);
            localStorage.setItem("activities", JSON.stringify(listaDeActividades));
            row.remove();
        }
    }
});
