let currentIndex = 0;
const slides = document.querySelectorAll('.card');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const translationValue = -currentIndex * 100 + '%';
    document.querySelector('.card-slider').style.transform = 'translateX(' + translationValue + ')';
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// You can add event listeners or autoplay functionality as needed.
