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

// ------------------------ EDIT -------------------------- //

// Función PUT
// La llamaremos desde la función AUX para mostrar productos en el DOM
async function updateProduct(productData, id) {
    const url = `${API_PRODUCTS}/${id}`;
    console.log("update");
    
  
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

      alert("Producto actualizado exitosamente");

    } catch (error) {
      console.error("Error updating product:", error);
    }
}

// ------------ AUX para MOSTRAR los productos ------------------- //

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
            <div class="card-main">
                <div class="image">
                    <img src="${productItem.image}">
                </div>
                <div class="card-info">
                    <div class="card-text">
                        <h2>${productItem.title}</h2>
                        <span class="category">${productItem.category}</span>
                    </div>
                    <div class="rating">
                        <span class="rating-rate">${productItem.rating.rate}</span>
                        <span class="rating-count">${productItem.rating.count} reviews</span>
                    </div>
                    <span class="price">$${productItem.price}</span>
                </div>
            </div>
            <span class="card-description">${productItem.description}</span>
            <div class="card-buttons">
                <button id="product-update-bt-${productItem.id}" class="bt-m product-update">Editar</button>    
                <button id="product-delete-bt-${productItem.id}" class="bt-m bt-alert">Eliminar</button>    
            </div>
            <form id="product-update-form-${productItem.id}" class="product-card-form" style="display: none">
                <input type="hidden" id="product-id-${productItem.id}">
                <label for="product-title">Product name
                    <input type="text" name="product-title" id="product-form-title-${productItem.id}" required>
                </label>
                <label for="product-price">Price
                    <input type="number" name="produc-price" id="product-form-price-${productItem.id}" required>
                </label>
                <label for="product-caegory">Category
                    <input type="text" id="product-form-category-${productItem.id}" required>
                </label>
                <label for="product-image">Image URL
                    <input type="text" id="product-form-image-${productItem.id}" required>
                </label>
                <label for="product-description">Description
                    <textarea id="product-form-description-${productItem.id}" required></textarea>
                </label>
                <div class="form-bts">
                    <button type="submit" class="bt-m">Save</button>
                    <button id="cancel-update-${productItem.id}" type="button" class="bt-m bt-alert">Cancel</button>
                </div>
            </form>
        `;
        // onclick="updateProduct(${productItem.id})"

        //indicamos en dónde se va a insertar cada nuevo DIV
        contenedorProductos.appendChild(productElement);

        //console.log(productItem.rating.rate);
        //console.log(productItem.rating["rate"]);

        //confirmar la eliminación de un producto:
        const deleteProductBt = document.getElementById(`product-delete-bt-${productItem.id}`);
        deleteProductBt.addEventListener("click", () => {
            if (confirm(`¿Seguro que deseas eliminar este producto?\n ${productItem.title} \n No se puede deshacer`)) {
                deleteProduct(productItem.id);
            }
        })
        

        //abrir el form y hacer put
        //crear constantes de referencia
        const updateBtn = document.getElementById(`product-update-bt-${productItem.id}`);
        const form = document.getElementById(`product-update-form-${productItem.id}`);
        const cancelBtn = document.getElementById(`cancel-update-${productItem.id}`);
        //console.log(form);
        const pId = productItem.id;
    
        // Mostrar formulario al hacer clic en "Editar"
        updateBtn.addEventListener("click", () => {
            form.reset();
            form.style.display = "grid";
            //updateProduct(productData, pId);
        }); 

        // Evento para cerrar el formulario con "Cancel"
        cancelBtn.addEventListener("click", () => {
            if (confirm("¿Seguro que deseas cancelar? Se perderán los cambios.")) {
                form.style.display = "none";
            }
        });

        // Función para manejar la actualización
        const updateHandler = async (e) => {
            e.preventDefault();
            
            const productData = {
                id: pId,
                title: form.querySelector(`#product-form-title-${pId}`).value,
                price: parseFloat(form.querySelector(`#product-form-price-${pId}`).value),
                description: form.querySelector(`#product-form-description-${pId}`).value,
                image: form.querySelector(`#product-form-image-${pId}`).value,
                category: form.querySelector(`#product-form-category-${pId}`).value
            };
        
            await updateProduct(productData, pId);

            // Ocultamos el form tras actualizar
            form.style.display = "none"; 
        
            //form.reset();
            //fetchProducts();
            };

             // Evitar múltiples eventos de submit
            form.removeEventListener("submit", updateHandler);
            form.addEventListener("submit", updateHandler);

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


//------------------- CREAR PRODUCTO ---------------------//

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

      alert("Producto creado exitosamente");


    } catch (error) {
      console.error("Error creating product:", error);
    }
}

//Función AUX POST 
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

    /*Esto ya no hace falta
    //si el ID existe, llamamos a la función EDITAR, si no a la funcion CREAR
    if (id) {
        await updateProduct(id, productData);
    } else {
        await createProduct(productData);
    }
    */
    await createProduct(productData);

    productForm.reset();
    fetchProducts();
});


//Función para mostrar el form
document.addEventListener("DOMContentLoaded", () => {
    const addNewBtn = document.getElementById("add-new-bt");
    const cancelBtn = document.querySelector("#product-form button[type='button']");
    const formSection = document.getElementById("products-add-new");
    const form = document.getElementById("product-form");

    // Muestra el formulario al hacer clic en "Add new"
    addNewBtn.addEventListener("click", () => {
        form.reset(); // Limpiar formulario antes de abrirlo
        formSection.style.display = "block";
    });

    // Oculta el formulario al hacer clic en "Cancel"
    cancelBtn.addEventListener("click", () => {
        if (confirm("¿Seguro que deseas cancelar? Se perderán los cambios.")) {
            formSection.style.display = "none";
        }
    });
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
    btnRestaurar.classList.add("cache-reset-bt");
    btnRestaurar.textContent = "Restore Cache";
    btnRestaurar.onclick = restaurarCache;
    //document.body.appendChild(btnRestaurar);

    const divRestaurar = document.createElement("div");
    divRestaurar .classList.add("cache-reset");
    document.body.appendChild(divRestaurar);
    divRestaurar.appendChild(btnRestaurar);
});



// Llamamos a la función al cargar la página
document.addEventListener("DOMContentLoaded", () => fetchProducts());