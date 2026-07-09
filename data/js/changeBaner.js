function changeBanner() {
    const img = document.querySelector('.banner');
    if (window.innerWidth <= 768) {
        img.src = 'data/bannerTelephone.webp';
    } else {
        img.src = 'data/banner.webp';
    }
    }

window.addEventListener('load', changeBanner);
window.addEventListener('resize', changeBanner);