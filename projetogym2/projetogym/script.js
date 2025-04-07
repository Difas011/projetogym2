// script.js
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Alterna o menu mobile
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Redireciona para a página principal ao recarregar, se não estiver nela
    const currentPath = window.location.pathname;
    if (!currentPath.endsWith('index.html') && currentPath !== '/') {
        window.location.href = 'index.html';
    }
});