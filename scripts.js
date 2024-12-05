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

// Preload images
function preloadImages() {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize gallery function
function initializeGallery() {
    const imageElement = document.getElementById('image');
    if (imageElement) {
        imageElement.src = images[currentIndex]; // Set initial image
        updateDots(); // Initialize dots
        updateNavigationButtons(); // Update button states
    } else {
        console.error("Image element not found.");
    }
}

// Event listeners for navigation buttons
document.getElementById('next-button').addEventListener('click', nextImage);
document.getElementById('prev-button').addEventListener('click', prevImage);

// Handle keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextImage();
    } else if (event.key === 'ArrowLeft') {
        prevImage();
    }
});

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
}

function updateGallery() {
    const imageElement = document.getElementById('image');
    if (imageElement) {
        imageElement.style.opacity = 0; // Start fade out
        setTimeout(() => {
            imageElement.src = images[currentIndex]; // Change the image source
            imageElement.style.opacity = 1; // Fade in
        }, 300); // Match with CSS transition duration
        updateDots(); // Update dots for the new image
        updateNavigationButtons(); // Update button states
    } else {
        console.error("Image element not found in updateGallery.");
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    if (prevButton) {
        prevButton.disabled = currentIndex === 0; // Disable previous button if at the start
    } else {
        console.error("Previous button not found.");
    }

    if (nextButton) {
        nextButton.disabled = currentIndex === images.length - 1; // Disable next button if at the end
    } else {
        console.error("Next button not found.");
    }
}

// Call the preload function
preloadImages();
initializeGallery(); // Ensure gallery is initialized after preload 