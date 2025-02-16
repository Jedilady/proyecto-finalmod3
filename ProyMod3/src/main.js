//import './css/style.css'

//------- CONSTANTES generales --------------//

//API base
const API_BASE_URL = "https://fakestoreapi.com";
//API/products
const API_PRODUCTS = `${API_BASE_URL}/products`

//constate "key" para el cache
const CACHE_KEY = "fakeStoreProducts";

// LLAMADAS AL DOM
const productsList = document.getElementById('products-list');
const productForm = document.getElementById('product-form');
const productInputTitle = document.getElementById('product-form-title');
const productInputPrice = document.getElementById('product-form-price');
const productImage = document.getElementById('product-form-image');
const productInputDescription = document.getElementById('product-form-description');
const productInputCategory = document.getElementById('product-form-category');
const productIdInput = document.getElementById('product-id');


//------------------- GET PRODUCTS ---------------------//

// Función GET para obtener productos
async function fetchProducts(expirationDays = 2) {

    // Creamos las constantes que manejarán el caché, 
    // primero la key, y luego dónde se almacenará
    //const cacheKey = "fakeStoreProducts";
    const cachedData = localStorage.getItem(CACHE_KEY);
    
    // creamos el if que revisa hay data en caché o no
    if (cachedData) {
        const { timestamp, data } = JSON.parse(cachedData);
        const now = new Date().getTime();
        
        // Si los datos no han expirado, devolver desde caché
        if (now - timestamp < expirationDays * 24 * 60 * 60 * 1000) {
            console.log("Usando datos en caché");
            // llamamos a la función que carga y muestra los productos en HTML
            displayEachProduct(data);
            // Ver en consola los productos
            console.log(data);
            // detenemos con un return
            return data;
        }
    }

    // si los datos expiraron, o es el primer acceso, hacemos FETCH
    
    // FETCH
    try {
        const response = await fetch(API_PRODUCTS);

        // en caso de error, saber el status
        if (!response.ok) {
            throw new Error("Error al obtener el recurso:", response.status);
        }

        //ver en consola la respuesta
        console.log(response.status);
        
        const productsList = await response.json();

        // Guardar en CACHE con la fecha actual
        localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: new Date().getTime(), data: productsList }));

        // llamamos a la función que carga y muestra los productos en HTML
        displayEachProduct(productsList);
        // Ver en consola los productos
        console.log(productsList); 

        // detenemos con un return
        return productsList;
        
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }

     
}

//Funcion AUX para mostrar productos en el DOM

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

        //le damos una clase para manejar el css
        productElement.classList.add("product-card");
        
        //le asignamos un id asociado a cada producto
        productElement.id = `product-${productItem.id}`;

        //creamos el HTML que llevará el div "productCard" por dentro
        productElement.innerHTML = `
            <h2>${productItem.title}</h2>
            <img src="${productItem.image}" width="100">
            <p class="description">Descripción del producto: ${productItem.description}</p>
            <span class="rating">Calificación de los usuarios: ${productItem.rating.rate} (basado en ${productItem.rating.count} opiniones)</span>
            <span class="price">Precio: $${productItem.price}</span>
            <p class="category">Categoria: ${productItem.category}</p>
            <button onclick="deleteProduct(${productItem.id})">Eliminar</button>    
        `;
        //<button onclick="eliminarProducto(${productItem.id})">Eliminar</button> 

        //indicamos en dónde se va a insertar cada nuevo DIV
        contenedorProductos.appendChild(productElement);

        //console.log(productItem.rating.rate);
        //console.log(productItem.rating["rate"]);
        
    });
}

//---------------------ELIMINAR PRODUCTO-------------------------//

// Funcion DELETE

async function deleteProduct(id) {
    try {
        const response = await fetch(`${API_PRODUCTS}/${id}`, {
        method: "DELETE",
        });
    
        if (!response.ok) {
        throw new Error("Request failure", response.status);
        }
    
        console.log(response.status);
    
        const data = await response.json();
        console.log("Deleted product", data);

        //fetchProducts();
        //llamamos a la funcion auxiliar para remover productos
        removeProductFromDOM(id);
        
    } catch (error) {
        console.error("Error deleting product:", error);
    }
}

//Función AUX para la eliminación del producto del DOM y del CACHE

function removeProductFromDOM(id) {
    console.log(`Eliminando producto ID: ${id}`);

    // Eliminar del DOM
    const productElement = document.getElementById(`product-${id}`);//document.querySelector(`.product-card[data-id='${id}']`);
    if (productElement) {
        productElement.remove();
        console.log("Producto eliminado del DOM");
    }

    // Eliminar del localStorage
    const cachedData = localStorage.getItem(CACHE_KEY);

    if (cachedData) {
        let { timestamp, data } = JSON.parse(cachedData);

        // Filtrar productos, quitando el que tiene el ID dado
        const updatedData = data.filter(product => product.id !== id);

        // Guardar la nueva lista en localStorage
        localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp, data: updatedData }));
        console.log("Producto eliminado del caché");
    }
}


//------------------- CREAR y EDITAR PRODUCTO ---------------------//

// Función POST
// La llamaremos desde la función AUX CREAR que se inicia con el evento de creación
async function createProduct(productData) {
  
    try {
      const response = await fetch(API_PRODUCTS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
  
      if (!response.ok) {
        throw new Error("Request failure", response.status);
      }
  
      console.log(response.status);
  
      const result = await response.json();
      console.log("Created product:", result);
      //addProductToDOM(result);
    } catch (error) {
      console.error("Error creating product:", error);
    }
}

// Función PUT
// La llamaremos desde la función AUX EDICION que se inicia con el evento de edición
async function updateProduct(productData, id) {
    const url = `${API_PRODUCTS}/${id}`;
  
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
  
      if (!response.ok) {
        throw new Error("Request failure", response.status);
      }
  
      const result = await response.json();
      console.log("Updated product: ", result);
    } catch (error) {
      console.error("Error updating product:", error);
    }
}

//Función AUX POST + PUT (Crear y Editar productos)
productForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = productIdInput.value;
    const productData = {
        title: productInputTitle.value,
        price: parseFloat(productInputPrice.value),//parseFloat para enviar un numero y no un string
        description: productInputDescription.value,
        image: productImage.value,
        category: productInputCategory.value
    };

    //si el ID existe, llamamos a la función EDITAR, si no a la funcion CREAR
    if (id) {
        await updateProduct(id, productData);
    } else {
        await createProduct(productData);
    }

    productForm.reset();
    fetchProducts();
});

//------------------ CACHE -------------------------//

// Función para restaurar caché
function restaurarCache() {
    console.log("Restaurando caché...");
    localStorage.removeItem(CACHE_KEY); // Borra el caché
    fetchProducts(); // Vuelve a cargar desde la API
}

// Agregar botón de restaurar caché
document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();

    const btnRestaurar = document.createElement("button");
    btnRestaurar.textContent = "Restaurar Caché";
    btnRestaurar.onclick = restaurarCache;
    document.body.appendChild(btnRestaurar);
});



// Llamamos a la función al cargar la página
document.addEventListener("DOMContentLoaded", () => fetchProducts());


/*
constantes del DOM:
productsList = document.getElementById('products-list');
productForm = document.getElementById('product-form');
productInputTitle = document.getElementById('product-form-title');
productInputPrice = document.getElementById('product-form-price');
productImage = document.getElementById('product-form-image');
productInputDescription = document.getElementById('product-form-description');
productInputCategory = document.getElementById('product-form-category');
productIdInput = document.getElementById('product-id');
*/