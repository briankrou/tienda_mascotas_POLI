<?php
// Incluir el archivo que contiene la clase Conexion (si no se ha incluido antes)
require_once 'Conexion.php';

// Obtener la instancia de la conexión usando el patrón Singleton
$miConexion = Conexion::obtenerInstancia();
$conexion = $miConexion->obtenerConexion();

// Consulta SQL para seleccionar todos los registros de la tabla 'productos'
$consulta = "SELECT * FROM productos";

// Ejecutar la consulta
$resultado = $conexion->query($consulta);

// Verificar si la consulta fue exitosa
if ($resultado) {
    // Obtener los resultados como un array asociativo
    while ($fila = $resultado->fetch_assoc()) {
        // Procesar cada fila de resultados aquí
        // Acceder a las columnas por su nombre de campo, por ejemplo, $fila['nombre_columna']
        echo "ID: " . $fila['codigo'] . ", Nombre: " . $fila['nombre'] . ", Precio: " . $fila['precio'] . "<br>";
 // Verificar si la fila tiene datos de imagen
 if (!empty($fila['imagen'])) {
    // Configurar las cabeceras para mostrar la imagen
    header("Content-type: image/jpeg");

    // Mostrar la imagen en el navegador
    echo $fila['imagen'];
} else {
    echo "No hay imagen disponible para este producto.<br>";
}

   
      }

    // Liberar el resultado después de usarlo
    $resultado->free();
} else {
    // Manejar el error si la consulta no fue exitosa
    echo "Error en la consulta: " . $conexion->error;
}
// Cerrar la conexión cuando hayas terminado
$miConexion->cerrarConexion();
?>
