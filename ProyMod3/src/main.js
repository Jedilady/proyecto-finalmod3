//import './css/style.css'

const API_BASE_URL = "https://fakestoreapi.com";

const API_PRODUCTS = `${API_BASE_URL}/products`

const contenedor = document.getElementById("productos");

// Función para obtener productos
async function obtenerProductos() {

    const url = API_PRODUCTS;

    try {
        const response = await fetch(url);

        //en caso de error, saber el status
        if (!response.ok) {
            throw new Error("Error al obtener el recurso:", response.status);
        }

        console.log(response.status);
        
        const datos = await response.json();
        console.log(datos); // Ver en consola los productos
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
}


// Llamamos a la función al cargar la página
obtenerProductos();