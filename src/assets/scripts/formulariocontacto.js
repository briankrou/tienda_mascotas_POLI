$(document).ready(function() {
    $('#formularioContacto').submit(function(event) {
        // Evita que el formulario se envíe automáticamente
        event.preventDefault();
console.log("holaaa");
        // Obtiene los valores de los campos
        var nombre = $('#nombre').val().trim();
        var correo = $('#correo').val().trim();
        var mensaje = $('#mensaje').val().trim();

        // Verifica si los campos están vacíos
        if (nombre === '') {
            mostrarError($('#nombre'));
        } else {
            quitarError($('#nombre'));
        }

        if (correo === '' || !esCorreoValido(correo)) {
            mostrarError($('#correo'));
        } else {
            quitarError($('#correo'));
        }

        if (mensaje === '') {
            mostrarError($('#mensaje'));
        } else {
            quitarError($('#mensaje'));
        }

        // Si algún campo está vacío, puedes mostrar un mensaje de error o realizar otras acciones aquí
        if (nombre === '' || correo === '' || mensaje === '') {
            alert('Por favor, completa todos los campos correctamente.');
        } else {
            // Si todos los campos están llenos y son válidos, puedes enviar el formulario o realizar otras acciones aquí
            alert('Mensaje enviado correctamente!');
            // Aquí puedes enviar el formulario usando AJAX o realizar otras acciones necesarias
        }
    });

    // Función para mostrar el error visualmente
    function mostrarError(elemento) {
        elemento.addClass('campo-error');
    }

    // Función para quitar el error visual
    function quitarError(elemento) {
        elemento.removeClass('campo-error');
    }

    // Función para validar el formato del correo electrónico
    function esCorreoValido(correo) {
        // Utiliza una expresión regular para validar el formato del correo electrónico
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo);
    }
});
