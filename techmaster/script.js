document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel-horizontal');
    const images = carousel.querySelectorAll('img');
    // Clone the images for infinite scroll effect
    images.forEach(img => {
        const clone = img.cloneNode();
        carousel.appendChild(clone);
    });
});
