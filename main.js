let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  const slideWidth = slides[0].clientWidth;
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(changeSlide, 3000);