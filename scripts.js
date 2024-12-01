const images = [
    'photos/image1.jpg',
    'photos/image2.jpg',
    'photos/image3.jpg',
    'photos/image4.jpg',
    'photos/image5.jpg',
    'photos/image6.jpg',
    'photos/image7.jpg'
];

let currentIndex = 0;

// Initialize gallery
document.getElementById('image').src = images[currentIndex];
updateDots();

// Event listeners for navigation buttons
document.getElementById('next-button').addEventListener('click', nextImage);
document.getElementById('prev-button').addEventListener('click', prevImage);

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
}

function updateGallery() {
    document.getElementById('image').src = images[currentIndex];
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}