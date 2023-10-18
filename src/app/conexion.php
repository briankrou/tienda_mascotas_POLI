<?php
class Conexion {
    private static $instancia;
    private $conexion;
    private $host = "82.180.153.1";
    private $usuario = "u284502101_rooot";
    private $contrasena = "7H@u*zHJ4zn^";
    private $base_de_datos = "u284502101_db_pet";

    private function __construct() {
        $this->conexion = new mysqli($this->host, $this->usuario, $this->contrasena, $this->base_de_datos);

        // Verificar la conexión
        if ($this->conexion->connect_error) {
            die("Error en la conexión a la base de datos: " . $this->conexion->connect_error);
            echo("error en la conexion");
        }

    }

    public static function obtenerInstancia() {
        if (!isset(self::$instancia)) {
            self::$instancia = new Conexion();
        }
        return self::$instancia;
    }

    public function obtenerConexion() {
        return $this->conexion;
    }

    public function cerrarConexion() {
        $this->conexion->close();
    }
}

?>
