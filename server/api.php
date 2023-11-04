// este codigo no fue utilizado debido a que se cambio de localhost a localStorage

<?php
header("Content-Type: application/json");

// Configurar la conexión a la base de datos (reemplaza con tus propios datos)
$servername = "localhost";
$username = "root";
$password = "root";
$database = "actividades";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(array("error" => "Error de conexión a la base de datos: " . $e->getMessage()));
    die();
}

// Verificar si la solicitud es un POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos de la solicitud POST
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->description) || empty($data->days) || empty($data->startDate) || empty($data->endDate) || empty($data->responsible)) {
        echo json_encode(array("error" => "Todos los campos son obligatorios."));
        die();
    }

    // Insertar la actividad en la base de datos
    $sql = "INSERT INTO actividades (descripcion, cantidad_dias, fecha_inicio, fecha_fin, responsable) VALUES (:descripcion, :dias, :inicio, :fin, :responsable)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':descripcion', $data->description);
    $stmt->bindParam(':dias', $data->days);
    $stmt->bindParam(':inicio', $data->startDate);
    $stmt->bindParam(':fin', $data->endDate);
    $stmt->bindParam(':responsable', $data->responsible);

    if ($stmt->execute()) {
        $newActivityId = $conn->lastInsertId();
        $response = array("message" => "Actividad registrada con éxito", "id" => $newActivityId);
        echo json_encode($response);
    } else {
        echo json_encode(array("error" => "Error al agregar la actividad a la base de datos."));
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Si es una solicitud GET, obtén la lista de actividades desde la base de datos
    $sql = "SELECT * FROM actividades";

    $stmt = $conn->query($sql);

    if ($stmt) {
        $activities = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($activities);
    } else {
        echo json_encode(array("error" => "Error al obtener la lista de actividades."));
    }
}
