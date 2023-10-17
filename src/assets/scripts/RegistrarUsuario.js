document.getElementById('formulario-registrar').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var nombre = document.querySelector('input[name="nombre"]').value;
    var apellidos = document.querySelector('input[name="apellidos"]').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    // Crear un objeto de usuario
    var usuario = {
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        contrasena: contrasena
    };

    // Convertir el objeto de usuario a formato JSON
    var usuarioJSON = JSON.stringify(usuario);

    // Usar una biblioteca para realizar una solicitud POST al servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../../data/usuario.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Datos guardados correctamente en el archivo JSON.");
        }
    };
    xhr.send(usuarioJSON);
});
