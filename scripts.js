
// Productos (para simular 50 productos)
// Productos (con nombres reales)
// Productos (con nombres reales, precios en quetzales y enlaces de imágenes)
const productos = [
    { id: 1, nombre: 'Apple MacBook Air M2', precio: '7,799.99', imagen: 'https://istore.gt/wp-content/uploads/2022/07/EC00136iii-8.jpg' },
    { id: 2, nombre: 'Dell XPS 13', precio: '7,199.99', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7W8V7ZH-MxUUC715z5H9gaHvTdJlBVXEcYw&s' },
    { id: 3, nombre: 'HP Spectre x360', precio: '10,099.99', imagen: 'https://img.pacifiko.com/PROD/resize/1/1000x1000/ODE0MjYxOW_3_167.jpg' },
    { id: 4, nombre: 'Lenovo ThinkPad X1 Carbon', precio: '10,399.99', imagen: 'https://www.lenovo.com/medias/lenovo-laptops-thinkpad-x1-carbon-gen-9-laptop-hero.png?context=bWFzdGVyfGltYWdlc3wzMzMzOHxpbWFnZS9wbmcvbWluZy9oNTY5L2gyNy9oYmQ5L2gyNi9oZmQ3L2hmYS9oMmM4LzQzNTgxNTgzX19jcnBfcXVhY2hldS5wbmc&f=original' },
    { id: 5, nombre: 'Asus ROG Zephyrus G14', precio: '11,299.99', imagen: 'https://rog.asus.com/media/18390/rog-zephyrus-g14-2021-hero.png' },
    { id: 6, nombre: 'Microsoft Surface Laptop 4', precio: '8,499.99', imagen: 'https://www.microsoft.com/en-us/surface/devices/surface-laptop-4/media/surface-laptop-4-hero.jpg' },
    { id: 7, nombre: 'Acer Predator Helios 300', precio: '10,199.99', imagen: 'https://www.acer.com/ac/en/US/content/series/predator-helios-300' },
    { id: 8, nombre: 'Razer Blade 15', precio: '11,799.99', imagen: 'https://www.razer.com/Content/dam/razer/2021/razergaminglaptops/razer-blade-15-advanced.jpg' },
    { id: 9, nombre: 'MSI GE76 Raider', precio: '12,199.99', imagen: 'https://www.msi.com/Laptop/GE76-Raider-11th/Overview' },
    { id: 10, nombre: 'Alienware m15 R6', precio: '11,799.99', imagen: 'https://www.dell.com/sites/csimages/Merchandizing_Imagery/en-us/Alienware_m15_R6_hero.jpg' },
    { id: 11, nombre: 'MacBook Pro 14" M1 Pro', precio: '16,299.99', imagen: 'https://www.apple.com/v/macbook-pro-14/a/images/overview/hero_macbook_pro_14__fsrfxmoyk2ya_large.jpg' },
    { id: 12, nombre: 'HP Omen 15', precio: '9,699.99', imagen: 'https://www.hp.com/us-en/shop/app/assets/images/product/omen-15-2020-hero.jpg' },
    { id: 13, nombre: 'Gigabyte Aorus 15G', precio: '10,199.99', imagen: 'https://www.gigabyte.com/FileUpload/Global/images/AORUS-AORUS-15G-2020-Laptop.png' },
    { id: 14, nombre: 'Samsung Galaxy Book Pro 360', precio: '8,499.99', imagen: 'https://images.samsung.com/is/image/samsung/p6pim/latin_en/np930qdb-kc2cl_gallery-01.jpg' },
    { id: 15, nombre: 'Google Pixelbook Go', precio: '5,199.99', imagen: 'https://store.google.com/intl/en-419/images/pixelbook-go/images/pixelbookgo-hero.jpg' },
    { id: 16, nombre: 'Huawei MateBook X Pro', precio: '10,199.99', imagen: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/matebook-x-pro-2020/images/matebook-x-pro-2020-hero.png' },
    { id: 17, nombre: 'Omen by HP 17', precio: '12,099.99', imagen: 'https://www.hp.com/us-en/shop/app/assets/images/product/omen-17-2020-hero.jpg' },
    { id: 18, nombre: 'Dell G5 15 SE', precio: '8,599.99', imagen: 'https://www.dell.com/sites/csimages/Merchandizing_Imagery/en-us/dell-g5-15-hero.jpg' },
    { id: 19, nombre: 'Lenovo Legion 5', precio: '7,899.99', imagen: 'https://www.lenovo.com/medias/lenovo-legion-5-hero.png?context=bWFzdGVyfGltYWdlc3wzMzMzOHxpbWFnZS9wbmcvbWluZy9oNTY5L2gyNy9oYmQ5L2gyNi9oZmQ3L2hmYS9oMmM4LzQzNTgxNTgzX19jcnBfcXVhY2hldS5wbmc&f=original' },
    { id: 20, nombre: 'MSI Stealth 15M', precio: '9,299.99', imagen: 'https://www.msi.com/Laptop/Stealth-15M/Overview' },
    { id: 21, nombre: 'Apple MacBook Pro 16" M1 Pro', precio: '18,499.99', imagen: 'https://www.apple.com/v/macbook-pro-16/a/images/overview/hero_macbook_pro_16__w3vfcvhd5xyq_large.jpg' },
    { id: 22, nombre: 'Acer Aspire 5', precio: '4,199.99', imagen: 'https://www.acer.com/ac/en/US/content/series/aspire-5' },
    { id: 23, nombre: 'Lenovo Yoga 9i', precio: '10,399.99', imagen: 'https://www.lenovo.com/medias/lenovo-yoga-9i-hero.png?context=bWFzdGVyfGltYWdlc3wzMzMzOHxpbWFnZS9wbmcvbWluZy9oNTY5L2gyNy9oYmQ5L2gyNi9oZmQ3L2hmYS9oMmM4LzQzNTgxNTgzX19jcnBfcXVhY2hldS5wbmc&f=original' },
    { id: 24, nombre: 'Microsoft Surface Pro 7', precio: '6,499.99', imagen: 'https://www.microsoft.com/en-us/surface/devices/surface-pro-7/media/surface-pro-7-hero.jpg' },
    { id: 25, nombre: 'HP Pavilion x360', precio: '5,999.99', imagen: 'https://www.hp.com/us-en/shop/app/assets/images/product/pavilion-x360-2020-hero.jpg' },
    { id: 26, nombre: 'Asus TUF Gaming F15', precio: '7,199.99', imagen: 'https://www.asus.com/media/15944307/tuf-gaming-f15-2020.jpg' },
    { id: 27, nombre: 'Samsung Notebook 9 Pro', precio: '7,299.99', imagen: 'https://images.samsung.com/is/image/samsung/p6pim/latin_en/np930qdb-kc2cl_gallery-01.jpg' },
    { id: 28, nombre: 'Razer Blade Stealth 13', precio: '11,099.99', imagen: 'https://www.razer.com/Content/dam/razer/2021/razergaminglaptops/razer-blade-13.jpg' },
    { id: 29, nombre: 'Dell Inspiron 14 5000', precio: '5,599.99', imagen: 'https://www.dell.com/sites/csimages/Merchandizing_Imagery/en-us/inspiron-14-5000-hero.jpg' },
    { id: 30, nombre: 'Toshiba Dynabook Portege X30', precio: '8,599.99', imagen: 'https://www.dynabook.com/products/portege-x30l-g/' },
    { id: 31, nombre: 'Alienware Area-51m', precio: '18,199.99', imagen: 'https://www.dell.com/sites/csimages/Merchandizing_Imagery/en-us/alienware-area-51m-hero.jpg' },
    { id: 32, nombre: 'HP Elite Dragonfly', precio: '14,299.99', imagen: 'https://www.hp.com/us-en/shop/app/assets/images/product/elite-dragonfly-2020-hero.jpg' },
    { id: 33, nombre: 'Apple iMac 24" M1', precio: '13,199.99', imagen: 'https://www.apple.com/v/imac-24/a/images/overview/hero_imac_24__fnogggspkpyq_large.jpg' },
    { id: 34, nombre: 'Lenovo ThinkPad X1 Extreme', precio: '14,799.99', imagen: 'https://www.lenovo.com/medias/lenovo-thinkpad-x1-extreme-gen-3-hero.png?context=bWFzdGVyfGltYWdlc3wzMzMzOHxpbWFnZS9wbmcvbWluZy9oNTY5L2gyNy9oYmQ5L2gyNi9oZmQ3L2hmYS9oMmM4LzQzNTgxNTgzX19jcnBfcXVhY2hldS5wbmc&f=original' },
    { id: 35, nombre: 'HP Envy x360', precio: '8,099.99', imagen: 'https://www.hp.com/us-en/shop/app/assets/images/product/envy-x360-2020-hero.jpg' },
    { id: 36, nombre: 'Gigabyte Aorus 15', precio: '10,299.99', imagen: 'https://www.gigabyte.com/FileUpload/Global/images/AORUS-AORUS-15G-2020-Laptop.png' },
    { id: 37, nombre: 'Apple Mac Mini M1', precio: '5,799.99', imagen: 'https://www.apple.com/v/mac-mini-2020/a/images/overview/hero_mac_mini_2020__dj7us8d6bhka_large.jpg' },
    { id: 38, nombre: 'Acer Swift 3', precio: '6,299.99', imagen: 'https://www.acer.com/ac/en/US/content/series/swift-3' },
    { id: 39, nombre: 'Microsoft Surface Book 3', precio: '12,199.99', imagen: 'https://www.microsoft.com/en-us/surface/devices/surface-book-3/media/surface-book-3-hero.jpg' },
    { id: 40, nombre: 'Asus VivoBook 15', precio: '4,799.99', imagen: 'https://www.asus.com/media/16534388/vivobook-15-x512.jpg' },
    { id: 41, nombre: 'Dell Latitude 7400', precio: '12,399.99', imagen: 'https://www.dell.com/sites/csimages/Merchandizing_Imagery/en-us/dell-latitude-7400-hero.jpg' },
    { id: 42, nombre: 'MSI GL65 Leopard', precio: '8,199.99', imagen: 'https://www.msi.com/Laptop/GL65-Leopard/Overview' },
    { id: 43, nombre: 'Toshiba Satellite Pro', precio: '6,599.99', imagen: 'https://www.dynabook.com/products/satellite-pro-a50-j/' },
    { id: 44, nombre: 'Razer Core X Chroma', precio: '3,199.99', imagen: 'https://www.razer.com/Content/dam/razer/2021/razergaminglaptops/razer-blade-15-core-x.jpg' },
    { id: 45, nombre: 'Lenovo IdeaPad Flex 5', precio: '5,199.99', imagen: 'https://www.lenovo.com/medias/lenovo-ideapad-flex-5-hero.png?context=bWFzdGVyfGltYWdlc3wzMzMzOHxpbWFnZS9wbmcvbWluZy9oNTY5L2gyNy9oYmQ5L2gyNi9oZmQ3L2hmYS9oMmM4LzQzNTgxNTgzX19jcnBfcXVhY2hldS5wbmc&f=original' },
    { id: 46, nombre: 'HP Chromebook x360', precio: '4,999.99', imagen: 'https://www.hp.com/us-en/shop/app/assets/images/product/chromebook-x360-2020-hero.jpg' },
    { id: 47, nombre: 'Apple iPad Pro 12.9"', precio: '13,799.99', imagen: 'https://www.apple.com/v/ipad-pro-12.9/a/images/overview/hero_ipad_pro_12_9__gnfplkz29m8y_large.jpg' },
    { id: 48, nombre: 'Samsung Galaxy Book2 Pro 360', precio: '9,799.99', imagen: 'https://images.samsung.com/is/image/samsung/p6pim/latin_en/np930qdb-kc2cl_gallery-01.jpg' },
    { id: 49, nombre: 'HP EliteBook x360', precio: '12,499.99', imagen: 'https://www.hp.com/us-en/shop/app/assets/images/product/elitebook-x360-2020-hero.jpg' },
    { id: 50, nombre: 'Apple iMac 27" 5K', precio: '21,999.99', imagen: 'https://www.apple.com/v/imac-27/a/images/overview/hero_imac_27__kpa4l8pijpyq_large.jpg' }
];

let carrito = [];

// Función para mostrar productos con el nuevo diseño del botón
function mostrarProductos() {
    const productosList = document.getElementById('productos-list');
    productosList.innerHTML = ''; // Limpiar el contenedor de productos

    productos.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Q${producto.precio}</p>
            <button class="btn" id="agregar-btn-${producto.id}" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        productosList.appendChild(productCard);
    });
}

// Función para agregar productos al carrito con animación y cambio de texto en el botón
function agregarAlCarrito(id) {
    const producto = productos.find(prod => prod.id === id);
    carrito.push(producto);
    actualizarCarrito();

    // Cambiar el texto y estilo del botón de "Agregar al carrito" a "Agregado"
    const boton = document.getElementById(`agregar-btn-${id}`);
    boton.innerText = "Agregado";
    boton.classList.add('added');
    
    // Deshabilitar el botón por unos segundos (para evitar que el usuario haga clic varias veces)
    boton.disabled = true;

    // Volver a poner el botón en su estado original después de 2 segundos
    setTimeout(() => {
        boton.innerText = "Agregar al Carrito";
        boton.classList.remove('added');
        boton.disabled = false;
    }, 2000);
}

// Función para actualizar el carrito (como antes)
function actualizarCarrito() {
    const carritoCount = document.getElementById('carrito-count');
    const carritoItems = document.getElementById('carrito-items');
    const totalPrice = document.getElementById('total-price');
    
    carritoCount.textContent = carrito.length;

    carritoItems.innerHTML = '';
    let total = 0;
    carrito.forEach(item => {
        const itemCarrito = document.createElement('div');
        itemCarrito.innerHTML = `
            <p>${item.nombre} - Q${item.precio}</p>
        `;
        carritoItems.appendChild(itemCarrito);
        total += parseFloat(item.precio.replace(/,/g, ''));
    });

    totalPrice.textContent = total.toFixed(2);
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1); // Elimina el producto del carrito
    actualizarCarrito(); // Actualiza la vista del carrito
}

// Función para limpiar el carrito
function limpiarCarrito() {
    carrito = []; // Limpia el carrito
    actualizarCarrito(); // Actualiza la vista del carrito
}

// Función para finalizar la compra
function finalizarCompra() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío. Agrega productos para comprar.');
        return;
    }

    // Lógica para finalizar la compra
    alert('¡Compra finalizada con éxito! Gracias por su compra  .');
    limpiarCarrito(); // Limpiar el carrito después de la compra
}

// Función de búsqueda de productos
function buscarProducto() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = productos.filter(prod => prod.nombre.toLowerCase().includes(searchTerm));

    const productosList = document.getElementById('productos-list');
    productosList.innerHTML = '';

    filteredProducts.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Q${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        productosList.appendChild(productCard);
    });
}

// Inicializar la página mostrando productos
document.addEventListener('DOMContentLoaded', mostrarProductos);