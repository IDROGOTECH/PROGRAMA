/* ==========================================================================
   IDROGOTECH - Lógica Principal Frontend (Navegación Móvil y Acciones)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });
    }

    // Comprobar estado de sesión en localStorage (demostración frontend segura)
    const currentUser = localStorage.getItem('idrogotech_user');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const navbarAuth = document.getElementById('navbarAuth');

    if (currentUser && userNameDisplay) {
        const userObj = JSON.parse(currentUser);
        userNameDisplay.textContent = userObj.name;
    }
});

function logout() {
    localStorage.removeItem('idrogotech_user');
    alert('Sesión cerrada correctamente.');
    window.location.href = 'index.html';
}

function secureDownload(productName) {
    const currentUser = localStorage.getItem('idrogotech_user');
    if (!currentUser) {
        alert('Acceso denegado. Debe iniciar sesión para descargar recursos.');
        window.location.href = 'login.html';
        return;
    }
    alert(`Verificando permisos en el servidor para: "${productName}"... Descarga iniciada.`);
}
