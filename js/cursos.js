/* ==========================================================================
   IDROGOTECH - Lógica de Búsqueda y Filtros para Cursos Gratuitos
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchCourseInput');
    const categoryFilter = document.getElementById('categoryCourseFilter');

    if (searchInput) {
        searchInput.addEventListener('input', filterCourses);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterCourses);
    }
});

function filterCourses() {
    const searchTerm = document.getElementById('searchCourseInput').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryCourseFilter').value;
    const courseCards = document.querySelectorAll('#coursesGrid .product-card');

    courseCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        const category = card.getAttribute('data-category');

        const matchesSearch = title.includes(searchTerm);
        const matchesCategory = selectedCategory === "" || category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function openCourseDetail(title, description) {
    alert(`📖 Detalle del Curso:\n\n${title}\n\n${description}\n\n¡Acceso libre disponible al registrarte en la plataforma!`);
}

function enrollCourse(title) {
    const currentUser = localStorage.getItem('idrogotech_user');
    if (!currentUser) {
        alert('Debes iniciar sesión para inscribirte y acceder a las clases gratuitas.');
        window.location.href = 'login.html';
        return;
    }
    alert(`🎉 ¡Inscripción exitosa al curso "${title}"!\nSe ha añadido a tu sección "Mi biblioteca".`);
    window.location.href = 'biblioteca.html';
}