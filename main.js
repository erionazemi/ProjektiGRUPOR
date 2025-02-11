let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  const slideWidth = slides[0].clientWidth;
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(changeSlide, 2000);

function validateForm() {
  const fromCity = document.getElementById("from").value;
  const toCity = document.getElementById("to").value;
  const departureDate = document.getElementById("departureDate").value;
  const returnDate = document.getElementById("returnDate").value;

  const today = new Date().toISOString().split("T")[0];
  if (departureDate < today) {
      alert("Departure date must be in the future.");
      return false;
  }

  if (returnDate && returnDate <= departureDate) {
      alert("Return date must be after the departure date.");
      return false;
  }

  return true;
}

function validateForm() {
  const flightNumber = document.getElementById('flightNumber').value;
  const errorMessage = document.getElementById('error-message');

  const regex = /^[A-Za-z]{2}\d{3,4}$/;

  if (!regex.test(flightNumber)) {
      errorMessage.style.display = 'block';
      return false;  
  }
  
  errorMessage.style.display = 'none';
  alert("Flight status checked successfully!"); 
  return true;
}

function validateForm() {
  const bookingReference = document.getElementById('bookingReference').value;
  const name = document.getElementById('Name').value;
  const referenceErrorMessage = document.getElementById('error-message-reference');
  const nameErrorMessage = document.getElementById('error-message-name');

  const referenceRegex = /^[A-Za-z0-9]{6,10}$/;
  const nameRegex = /^[a-zA-Z]+$/;

  if (!referenceRegex.test(bookingReference)) {
      referenceErrorMessage.style.display = 'block';
      return false; 
  } else {
      referenceErrorMessage.style.display = 'none';
  }

  if (!nameRegex.test(name)) {
      nameErrorMessage.style.display = 'block';
      return false;  
  } else {
      nameErrorMessage.style.display = 'none';
  }

  alert("Check-in successful!");
  return true;
}