
$(document).ready(function() {
    $('#formularioLogin').on('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Obtiene los valores del correo electrónico y la contraseña
        var correo = $('#correo').val();
        var contrasena = $('#contrasena').val();

        // Simula una solicitud al servidor para verificar las credenciales
        var credencialesCorrectas = verificarCredenciales(correo, contrasena);

        if (credencialesCorrectas) {
            // Si las credenciales son correctas, redirige a la página deseada
            window.location.href = '../../../public/index.html';
        } else {
            // Si las credenciales son incorrectas, muestra una alerta
            alert('Correo electrónico o contraseña incorrectos. Por favor, inténtelo de nuevo.');
        }
    });

    // Función para verificar las credenciales (simulada)
    function verificarCredenciales(correo, contrasena) {
        // Implementa tu lógica de verificación de credenciales aquí
        // Esta función debe comunicarse con el servidor para verificar las credenciales
        // Devuelve true si las credenciales son correctas, false si no lo son (simulado en este ejemplo)
        // Aquí puedes hacer una solicitud AJAX al servidor para verificar las credenciales reales
        // Este es solo un ejemplo simulado
        if (correo === 'usuario@example.com' && contrasena === 'contraseña123') {
            return true;
        } else {
            return false;
        }
    }
});