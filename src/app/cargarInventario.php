<?php
// Incluir el archivo que contiene la clase Conexion (si no se ha incluido antes)
require_once 'Conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Obtener la instancia de la conexión usando el patrón Singleton
    $miConexion = Conexion::obtenerInstancia();
    $conexion = $miConexion->obtenerConexion();

    // Preparar la consulta SQL (usando sentencias preparadas para evitar inyecciones SQL)
    $consulta = $conexion->prepare("SELECT * FROM `productos`");

    // Verificar si la preparación de la consulta fue exitosa
    if ($consulta) {
        // Ejecutar la consulta
        $consulta->execute();

        // Obtener el resultado de la consulta en un array asociativo
        $resultados = array();
        $resultado = $consulta->get_result();
        while ($fila = $resultado->fetch_assoc()) {
            $fila['imagen'] = base64_encode($fila['imagen']);
            $resultados[] = $fila;
        }

        // Establecer el tipo de contenido como JSON
        header('Content-Type: application/json');

        // Convertir los resultados a formato JSON y mostrarlos
        echo json_encode($resultados);

        // Cerrar la consulta y la conexión
        $consulta->close();
        $conexion->close();
    } else {
        // Manejar el error si la preparación de la consulta falla
        echo "Error en la preparación de la consulta.";
    }
}
?>
