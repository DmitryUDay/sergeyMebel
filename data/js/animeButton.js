document.querySelectorAll('.getContact, .zapiska').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.remove('animate');
        requestAnimationFrame(() => {
            this.classList.add('animate');
        });
        setTimeout(() => {
            this.classList.remove('animate');
        }, 700);
    });
});