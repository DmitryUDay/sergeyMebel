// Инкапсулируем логику, чтобы можно было плодить карточки пачками
document.querySelectorAll('.card').forEach(card => {
    const container = card.querySelector('.image-container');
    const prevBtn = card.querySelector('.prev-btn');
    const nextBtn = card.querySelector('.next-btn');
    const dots = card.querySelectorAll('.dot');
    
    // Функция обновления активной точки
    function updateDots(activeIndex) {
        dots.forEach((dot, idx) => {
            if (idx === activeIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Клик на стрелку "Вперед"
    nextBtn.addEventListener('click', () => {
        const width = container.offsetWidth;
        // Если дошли до конца, листаем в начало, иначе — на следующую
        if (container.scrollLeft + width >= container.scrollWidth - 5) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: width, behavior: 'smooth' });
        }
    });

    // Клик на стрелку "Назад"
    prevBtn.addEventListener('click', () => {
        const width = container.offsetWidth;
        // Если мы в самом начале, листаем в конец, иначе — назад
        if (container.scrollLeft <= 5) {
            container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: -width, behavior: 'smooth' });
        }
    });

    // Следим за скроллом (и для свайпов, и для стрелок), чтобы вовремя менять точки
    container.addEventListener('scroll', () => {
        const width = container.offsetWidth;
        // Вычисляем индекс текущей картинки на основе сожранного скролла
        const activeIndex = Math.round(container.scrollLeft / width);
        updateDots(activeIndex);
    });

    // Клик по самим точкам (если юзер захочет тыкнуть в них пальцем)
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            const width = container.offsetWidth;
            container.scrollTo({ left: width * index, behavior: 'smooth' });
        });
    });
});