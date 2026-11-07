/* ==========================================================================
   IDROGOTECH - Lógica de Autenticación (Login / Registro con validación)
   ========================================================================== */

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simulación de autenticación segura conectada al backend
    if (email && password) {
        const userData = { name: email.split('@')[0], email: email, role: email.includes('admin') ? 'admin' : 'user' };
        localStorage.setItem('idrogotech_user', JSON.stringify(userData));
        alert('Inicio de sesión exitoso. Redirigiendo...');
        window.location.href = userData.role === 'admin' ? 'admin.html' : 'biblioteca.html';
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Por favor, ingrese credenciales válidas.';
    }
}

function handleRegister(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Las contraseñas no coinciden.';
        return;
    }

    // Simulación de registro y envío de correo de verificación
    successMessage.style.display = 'block';
    successMessage.textContent = '¡Registro exitoso! Se ha enviado un enlace de verificación a ' + email + '.';
    
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2500);
}
