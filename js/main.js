// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Función para cargar componentes HTML de forma modular
    const loadComponent = (id, url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                const container = document.getElementById(id);
                if (container) {
                    container.innerHTML = data;
                } else {
                    console.error(`Error: Contenedor con id '${id}' no encontrado.`);
                }
            })
            .catch(error => console.error(`Error cargando el componente ${url}:`, error));
    };

    // Carga de todos los componentes en sus respectivos contenedores
    loadComponent('header-container', 'components/header.html');
    loadComponent('hero-container', 'components/hero.html');
    loadComponent('historia-container', 'components/historia.html');
    loadComponent('categorias-container', 'components/categorias.html');
    loadComponent('destacado-container', 'components/destacado.html');
    loadComponent('testimonios-container', 'components/testimonios.html');
    loadComponent('cta-final-container', 'components/cta-final.html');
    loadComponent('footer-container', 'components/footer.html');

    // Lógica para el header "sticky"
    const headerContainer = document.getElementById('header-container');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            headerContainer.firstElementChild?.classList.add('bg-maki-crema', 'shadow-md');
        } else {
            headerContainer.firstElementChild?.classList.remove('bg-maki-crema', 'shadow-md');
        }
    });

    // Lógica para animaciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar todos los elementos con la clase .fade-in-up
    setTimeout(() => {
        const elementsToAnimate = document.querySelectorAll('.fade-in-up');
        elementsToAnimate.forEach(el => observer.observe(el));
    }, 500); // Dar un pequeño margen para que se carguen los componentes
});
