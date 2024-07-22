<?php
$servername = "localhost"; // Cambia esto si tu servidor MySQL está en otra ubicación
$username = "root"; // El nombre de usuario de tu MySQL
$password = ""; // La contraseña de tu MySQL
$dbname = "registro_usuarios";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$contrasena = password_hash($_POST['contrasena'], PASSWORD_BCRYPT);

// Insertar datos en la tabla
$sql = "INSERT INTO usuarios (nombre, apellido, correo, telefono, contrasena)
VALUES ('$nombre', '$apellido', '$correo', '$telefono', '$contrasena')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
