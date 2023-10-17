// Objeto Producto
function Producto(Categoria,nombre, referencia, precio, imagenURL, paginaURL) {
    this.Categoria=Categoria;
    this.nombre = nombre;
    this.referencia = referencia;
    this.precio = precio;
    this.imagenURL = imagenURL;
    this.paginaURL = paginaURL;
}
let categoriaAreglo = []
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    
    xhttp.onload = function() {
        let datos = JSON.parse(this.responseText);
        datos.forEach(element => {
          if(categoriaAreglo[element.Categoria]==undefined){
                categoriaAreglo.push[element]
                let Producto ={
                    "nombre" : element.nombre,
                };

          }else{

            categoriaAreglo[element.Categoria.categoria].push(element);
          };
       
         
        });
    };

    xhttp.onerror = function() {
        console.error("Error en la solicitud AJAX.");
    };

    xhttp.open("GET", "../../../../tienda_mascotas_POLI/src/assets/data/Catalogo.json");
    xhttp.send();
}
