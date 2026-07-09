const overlay = document.getElementById('modalOverlay');

function openModal() {
    overlay.classList.add('active');
}

function closeModal() {
    overlay.classList.remove('active');
}

function closeModalByOverlay(event) {
    if (event.target === overlay) {
        closeModal();
    }
}