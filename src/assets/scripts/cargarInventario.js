function agregarProducto(codigo, imagen, nombre, categoria, cantidad,precio) {
    const tabla = document.getElementById('inventario');

    // Crear una nueva fila y celdas
    const nuevaFila = document.createElement('tr');

    // Configurar el contenido de las celdas usando innerHTML  
    nuevaFila.innerHTML = `
        <td style="padding: 0;">
        <img style="width: 50px; height: 50px;" src="data:image/png;base64,${imagen}" alt="Producto">
        </td>
        <td>${codigo}</td>
        <td>${categoria}</td>
        <td>${nombre}</td>
        <td>${cantidad}</td>
        <td>${precio}</td>
        <td>${precio*cantidad}</td>
        <td><a href="./editarProducto.html" class="btn_1">Editar</a></td>
    `;
    // Agregar la fila a la tabla
    tabla.appendChild(nuevaFila);
}

// Ejemplo de uso

// Realizar una solicitud GET al archivo cargarInventario.php usando fetch
fetch('../../src/app/cargarInventario.php', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => {
    // Verificar si la respuesta es exitosa (status 200 OK)
    if (response.ok) {
        // Parsear la respuesta JSON

        return response.json();
       

    
    }
    // Si la respuesta no es exitosa, lanzar un error
    throw new Error('Error al obtener los datos del servidor.');
})
.then(data => {
    // Manipular los datos obtenidos del servidor (en este caso, data contiene el objeto JSON)
    for (let producto of data) {
        agregarProducto(producto.codigo,producto.imagen, producto.nombre, producto.categoria,producto.catidad,producto.precio);
    }

})
.catch(error => {

    // Capturar y manejar errores
    console.error(error);
});
