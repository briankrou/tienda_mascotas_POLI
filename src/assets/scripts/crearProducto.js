function crearProducto(event) {
    event.preventDefault();

    const formData = new FormData();
    const imagen = document.getElementById('archivoInput').files[0];
    const codigo = document.getElementById('codigo').value;
    const nombre = document.querySelector('input[name="nombre"]').value;
    const categoria = document.getElementById('categoria').value;
    const precio = document.getElementById('precio').value;
    const cantidad = document.getElementById('cantidad').value;
    const descripcion = document.querySelector('textarea[name="descripcion"]').value;

    formData.append('imagen', imagen);
    formData.append('codigo', codigo);
    formData.append('nombre', nombre);
    formData.append('categoria', categoria);
    formData.append('precio', precio);
    formData.append('cantidad', cantidad);
    formData.append('descripcion', descripcion);

    fetch('../../src/app/cerarProducto.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.status === 200) {
            // La solicitud fue exitosa (código de respuesta 201 Created)
       
            return response.json();
        } else {

        }
    })
    .then(data => {
        if(data.error=="error"){
            alert("Los datos son incorrectos");
        }if(data.mensaje=="correcto"){
            alert("producto creado con exito con exito");
        }
        ; // Muestra la respuesta del servidor en la consola
    })
    .catch(error => {
        console.error(error);
        // Maneja el error aquí si es necesario
    });
}
