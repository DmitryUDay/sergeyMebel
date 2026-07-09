function toggleMenu() {
    const burger = document.querySelector('.burger');
    const menu = document.getElementById('mobileMenu');
    
    burger.classList.toggle('active');
    menu.classList.toggle('open');
    
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobileMenu');
    if (e.target === menu) {
        toggleMenu();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const menu = document.getElementById('mobileMenu');
        if (menu.classList.contains('open')) {
            toggleMenu();
        }
    }
});