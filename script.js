const slider = document.querySelector('.slider-inner');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelectorAll('.slider-inner img');
const slideIndicators = document.querySelectorAll('.slide-indicator span');

let currentIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  slideIndicators[currentIndex].classList.remove('active');
  slideIndicators[index].classList.add('active');
  currentIndex = index;
}

nextBtn.addEventListener('click', () => {
  showSlide((currentIndex + 1) % slides.length);
});

prevBtn.addEventListener('click', () => {
  showSlide((currentIndex - 1 + slides.length) % slides.length);
});

slideIndicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showSlide(index);
  });
});

// FAQ toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-question');

  faqItems.forEach(item => {
      item.addEventListener('click', function() {
          this.classList.toggle('active');
          const answer = this.nextElementSibling;
          if (answer.style.display === 'block') {
              answer.style.display = 'none';
          } else {
              answer.style.display = 'block';
          }
      });
  });
});
