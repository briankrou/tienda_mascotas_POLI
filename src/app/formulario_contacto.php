<?php
        // Conectar a la base de datos
        $mysqli = new mysqli("host", "usuario", "contraseña", "nombre_de_la_base_de_datos");

        // Verificar la conexión
        if ($mysqli->connect_error) {
            die("Error en la conexión a la base de datos: " . $mysqli->connect_error);
        }

        // Obtener datos del formulario
        $nombre = $_POST['nombre'];
        $correo = $_POST['correo'];
        $mensaje = $_POST['mensaje'];

        // Preparar la consulta SQL
        $stmt = $mysqli->prepare("INSERT INTO nombre_de_la_tabla (nombre, correo, mensaje) VALUES (?, ?, ?)");

        // Vincular los parámetros
        $stmt->bind_param("sss", $nombre, $correo, $mensaje);

        // Ejecutar la consulta
        if ($stmt->execute()) {
            echo "Datos insertados correctamente en la base de datos.";
        } else {
            echo "Error al insertar datos: " . $stmt->error;
        }

        // Cerrar la conexión y la declaración
        $stmt->close();
        $mysqli->close();

?>
