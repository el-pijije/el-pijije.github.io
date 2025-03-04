// Productos (para simular 50 productos)
const productos = Array.from({ length: 50 }, (v, i) => ({
    id: i + 1,
    nombre: `Producto ${i + 1}`,
    precio: (Math.random() * 1000).toFixed(2),
    imagen: 'https://via.placeholder.com/300'
}));

let carrito = [];

// Función para mostrar los productos
function mostrarProductos(productosFiltrados = productos) {
    const productosList = document.getElementById('productos-list');
    productosList.innerHTML = ''; // Limpiar productos existentes
    productosFiltrados.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button class="btn" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        productosList.appendChild(card);
    });
}

// Función para agregar al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

// Función para actualizar el carrito
function actualizarCarrito() {
    const carritoCount = document.getElementById('carrito-count');
    const carritoItems = document.getElementById('carrito-items');
    const totalPrice = document.getElementById('total-price');

    carritoCount.textContent = carrito.length;

    carritoItems.innerHTML = ''; // Limpiar carrito existente
    carrito.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <p>${item.nombre} - $${item.precio}</p>
        `;
        carritoItems.appendChild(itemElement);
    });

    const total = carrito.reduce((acc, item) => acc + parseFloat(item.precio), 0);
    totalPrice.textContent = total.toFixed(2);
}

// Función para limpiar el carrito
function limpiarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// Función para finalizar la compra
function finalizarCompra() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío. No puedes finalizar la compra.');
        return;
    }

    const total = carrito.reduce((acc, item) => acc + parseFloat(item.precio), 0);
    alert(`Gracias por tu compra. El total es de $${total.toFixed(2)}.`);
    limpiarCarrito();
}

// Función de búsqueda
function buscarProducto() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(query)
    );
    mostrarProductos(productosFiltrados);
}

// Inicializar productos al cargar la página
mostrarProductos();
