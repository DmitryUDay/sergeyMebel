document.querySelectorAll('.card').forEach(card => {
    const container = card.querySelector('.image-container');
    const prevBtn = card.querySelector('.prev-btn');
    const nextBtn = card.querySelector('.next-btn');
    const dots = card.querySelectorAll('.dot');
    
    function updateDots(activeIndex) {
        dots.forEach((dot, idx) => {
            if (idx === activeIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        const width = container.offsetWidth;
        if (container.scrollLeft + width >= container.scrollWidth - 5) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: width, behavior: 'smooth' });
        }
    });

    prevBtn.addEventListener('click', () => {
        const width = container.offsetWidth;
        if (container.scrollLeft <= 5) {
            container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: -width, behavior: 'smooth' });
        }
    });

    container.addEventListener('scroll', () => {
        const width = container.offsetWidth;
        const activeIndex = Math.round(container.scrollLeft / width);
        updateDots(activeIndex);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            const width = container.offsetWidth;
            container.scrollTo({ left: width * index, behavior: 'smooth' });
        });
    });
});