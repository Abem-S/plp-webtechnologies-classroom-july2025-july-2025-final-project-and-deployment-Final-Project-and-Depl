// --- Menu Toggle for Mobile ---
const menuToggles = document.querySelectorAll('.menu-toggle');

menuToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const nav = toggle.closest('nav').querySelector('.nav-links');
        nav.classList.toggle('active');
    });
});

// --- Contact Form Validation ---
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        alert('Message sent! Thank you for contacting us.');
        contactForm.reset();
    });
}

// --- Simple Carousel (for featured products) ---
const carousels = document.querySelectorAll('.product-carousel');

carousels.forEach(carousel => {
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => isDown = false);
    carousel.addEventListener('mouseup', () => isDown = false);
    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast
        carousel.scrollLeft = scrollLeft - walk;
    });
});
