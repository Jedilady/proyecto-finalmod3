//import './css/style.css'

const API_BASE_URL = "https://fakestoreapi.com";

const API_PRODUCTS = `${API_BASE_URL}/products`

// Función para obtener productos
async function obtenerProductos() {

    const url = API_PRODUCTS;//linea redundante

    try {
        const response = await fetch(url);

        //en caso de error, saber el status
        if (!response.ok) {
            throw new Error("Error al obtener el recurso:", response.status);
        }

        console.log(response.status);
        
        const productsList = await response.json();

        //llamamos a la función que carga y muestra los productos en HTML
        displayEachProduct(productsList);

        console.log(productsList); // Ver en consola los productos
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
}

//Función para mostrar todos los PRODUCTOS

function displayEachProduct(products) {

    // Creamos la constante de la llamada al div de productos (el contenedor)
    const contenedorProductos = document.getElementById("productos");

    // Limpiamos dicho contenedor antes de agregar productos
    contenedorProductos.innerHTML = "";

    //recorremos el array de los productos con un ForEach 
    products.forEach(productItem => {

        //creamos la contsante para manejar el div
        //lo creamos aquí dentro como constante por buenas prácticas
        //cada iteración debe tener su propia variable
        const productElement = document.createElement("div");

        //le asignamos un id
        productElement.id = 'productCard';

        //creamos el HTML que llevará el ID por dentro
        productElement.innerHTML = `
            <h2>${productItem.title}</h2>
            <img src="${productItem.image}" width="100">
            <p class="description">Descripción del producto: ${productItem.description}</p>
            <span class="rating">Calificación de los usuarios: ${productItem.rating.rate} (basado en ${productItem.rating.count} opiniones)</span>
            <span class="price">Precio: $${productItem.price}</span>
            <p class="category"></p>  
        `;
        
        //indicamos en dónde se va a insertar cada nuevo DIV
        contenedorProductos.appendChild(productElement);

        //console.log(productItem.rating.rate);
        //console.log(productItem.rating["rate"]);
        
    });
}

//<button onclick="eliminarProducto(${productItem.id})">Eliminar</button>

// Llamamos a la función al cargar la página
obtenerProductos();