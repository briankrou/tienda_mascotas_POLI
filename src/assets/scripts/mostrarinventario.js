

    const contenerdorPerros = document.getElementById('Perros');
    const contenerdorGatos = document.getElementById('Gatos');
    const contenerdorPeces = document.getElementById('Peces');
    const contenerdorRoedores = document.getElementById('Roedores');
    const contenerdorAves = document.getElementById('Aves');
    
    
    
    if(contenerdorPerros!=null){ mostrarCategoria("Perros",contenerdorPerros)};
    if(contenerdorGatos!=null){mostrarCategoria("Gatos",contenerdorGatos) };
    if(contenerdorPeces!=null){ mostrarCategoria("Peces",contenerdorPeces)};
    if(contenerdorRoedores!=null){mostrarCategoria("Roedores",contenerdorRoedores) };
    if(contenerdorAves!=null){ mostrarCategoria("Aves",contenerdorAves)};
    
    
    
    function agregarProducto(codigo, imagen, nombre, categoria, cantidad,precio) {
    
        const card = document.createElement('div');
        card.className="card";
        card.innerHTML = `
    
        <img class="card-img-top" src="data:image/png;base64,${imagen}" alt="Producto">
            <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text" >Ref: <span class="codigo">${codigo}</span></p>
            <p class="card-text">$ ${precio}</p>
            <a href="./producto.html" class="btn">Ver producto</a>
            </div>
    
    
        `;
        return card;
     
    }
    
    
    function mostrarCategoria(cateogira,conten){
        // Ejemplo de uso
        let url = './src/app/cargarCategoria.php?categoria='+cateogira;
        // Realizar una solicitud GET al archivo cargarInventario.php usando fetch
        fetch(url, {
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
                conten.appendChild(agregarProducto(producto.codigo,producto.imagen, producto.nombre, producto.categoria,producto.catidad,producto.precio));  ;
            }
        
        })
        .catch(error => {
        
            // Capturar y manejar errores
            console.error(error);
        });
        
    }
