// Objeto Producto
function Producto(nombre, referencia, precio, imagenURL, paginaURL) {
    this.nombre = nombre;
    this.referencia = referencia;
    this.precio = precio;
    this.imagenURL = imagenURL;
    this.paginaURL = paginaURL;
}

// Función para agregar un producto al contenedor
function agregarProducto(producto) {
    var contenedor = document.getElementById('productos-container');
    var card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${producto.imagenURL}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Ref: <span class="codigo">${producto.referencia}</span></p>
            <p class="card-text">$ ${producto.precio}</p>
            <a href="${producto.paginaURL}" class="btn">Ver producto</a>
        </div>
    `;
    contenedor.appendChild(card);
}

// Uso de la función para agregar productos
var producto1 = new Producto('Producto 1', '123456', 100, '../src/assets/img/img01.jpg', '../src/pages/producto.html');
var producto2 = new Producto('Producto 2', '789012', 150, '../src/assets/img/img02.jpg', '../src/pages/producto.html');
var producto3 = new Producto('Producto 3', '789012', 180, '../src/assets/img/img03.jpg', '../src/pages/producto.html');
var producto4 = new Producto('Producto 4', '789012', 180, '../src/assets/img/img04.jpg', '../src/pages/producto.html');
// ...puedes agregar más productos aquí...

// Agrega los productos al contenedor
agregarProducto(producto1);
agregarProducto(producto2);
agregarProducto(producto3);
agregarProducto(producto4);
// ...agrega más productos si es necesario...
