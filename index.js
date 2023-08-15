// script.js
const scrollButton = document.getElementById('top__wrapper');
const specificHeight = 300; // Adjust this to your specific height in pixels

window.addEventListener('scroll', () => {
    if (window.scrollY >= specificHeight) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});