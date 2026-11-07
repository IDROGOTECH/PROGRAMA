/* ==========================================================================
   IDROGOTECH - Lógica del Catálogo, Búsqueda y Filtros
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');

    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    if (sortFilter) {
        sortFilter.addEventListener('change', filterProducts);
    }
});

function filterProducts() {
    // Lógica interactiva de filtrado para demostración dinámica
    console.log("Filtrando productos del catálogo...");
}

function openDetail(title, price) {
    alert(`Detalles del recurso: ${title}\nPrecio: $${price.toFixed(2)}\n(Conectado a pasarela de pago segura en backend).`);
}

function buyProduct(title, price) {
    const currentUser = localStorage.getItem('idrogotech_user');
    if (!currentUser) {
        alert('Debe iniciar sesión para realizar una compra.');
        window.location.href = 'login.html';
        return;
    }
    alert(`Procesando orden de compra segura para: ${title}. Redirigiendo a pasarela de pagos...`);
}

function downloadFree(title) {
    const currentUser = localStorage.getItem('idrogotech_user');
    if (!currentUser) {
        alert('Debe iniciar sesión para descargar recursos gratuitos.');
        window.location.href = 'login.html';
        return;
    }
    alert(`Descarga autorizada para el recurso gratuito: ${title}`);
}
