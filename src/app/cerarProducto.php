<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verificar si se ha subido un archivo
    if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] === UPLOAD_ERR_OK) {
        // Obtener los datos del formulario
        $imagenBinaria = file_get_contents($_FILES['imagen']['tmp_name']);// Estás almacenando la ruta de la imagen, no los datos binarios
        $codigo = $_POST['codigo'];
        $nombre = $_POST['nombre'];
        $categoria = $_POST['categoria'];
        $precio = $_POST['precio'];
        $cantidad = $_POST['cantidad'];
        $descripcion = $_POST['descripcion'];

    
            // Incluir el archivo que contiene la clase Conexion (si no se ha incluido antes)
            require_once 'Conexion.php';

            // Obtener la instancia de la conexión usando el patrón Singleton
            $miConexion = Conexion::obtenerInstancia();
            $conexion = $miConexion->obtenerConexion();

            // Preparar la consulta SQL (usando sentencias preparadas para evitar inyecciones SQL)
            $consulta = $conexion->prepare("INSERT INTO productos (codigo, imagen, nombre, categoria, precio, catidad, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?)");

            // Vincular los parámetros y ejecutar la consulta
            $consulta->bind_param("sssssss", $codigo, $imagenBinaria, $nombre, $categoria, $precio, $cantidad, $descripcion);
            if ($consulta->execute()) {
                $respuesta = array('mensaje' => 'correcto');
                http_response_code(201);

            } else {
                $respuesta = array('error' => 'Error al guardar el producto en la base de datos');
            }

            // Cerrar la conexión y liberar recursos
            $consulta->close();
            $miConexion->cerrarConexion();


        unlink($archivoTemp);
    } else {
        $respuesta = array('error' => 'error');
    }
} else {
    $respuesta = array('error' => 'Método de solicitud no válido');
}

// Devolver la respuesta en formato JSON
echo json_encode($respuesta);
?>
