/* FOR POPUP */
window.addEventListener("DOMContentLoaded", () => {
    // Show popup after 10 seconds
    setTimeout(() => {
      const popupContainer = document.querySelector(".popup-container");
      popupContainer.classList.add("show");
    }, 10000); /* 10  sec to show */

    // Close popup with fade-out animation
    const closePopup = () => {
      const popupContainer = document.querySelector(".popup-container");
      popupContainer.classList.remove("show");
      popupContainer.classList.add("hide"); // Trigger fade-out animation
    };

    // Close button functionality
    document.querySelector(".close-btn").addEventListener("click", closePopup);

    // "Nej Tack" functionality
    document.querySelector(".nej-tack").addEventListener("click", closePopup);
  });

  // Form validation
  document.getElementById('popup-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    // Simple validation
    if (name === '' || email === '') {
      alert('Fyll i alla fält.'); // Alert if fields are empty
      return;
    }

    if (!validateEmail(email)) {
      alert('Ange en giltig e-postadress.');
      return;
    }

    alert('Tack för att du registrerade dig!');
    closePopup(); // Close popup after successful submission
  });

  // Email validation function
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }




// JavaScript for Slideshow Navigation
const slides = document.querySelectorAll('.slide');
const prevButtons = document.querySelectorAll('.arrow.left');
const nextButtons = document.querySelectorAll('.arrow.right');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

prevButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
});

nextButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
});

/* FOR NON POPUP SUBMISSION FOR NEWSLETTER */
document.querySelector('#newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Tack för att du registrerade dig!');
});

