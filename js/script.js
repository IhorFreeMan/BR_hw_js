
const heroArrowButton = document.querySelector('.hero__arrow');
const targetSection = document.querySelector('.section__twu');


heroArrowButton.addEventListener('click', () => {
  
  // Перевіряємо, чи існує цільова секція
  if (targetSection) {
    // Плавно прокручуємо до секції section__twu
    targetSection.scrollIntoView({
      behavior: 'smooth',      // Плавна анімація
      block: 'start',          // Вирівнювання по верхньому краю
      inline: 'nearest'        // Найближче горизонтальне вирівнювання
    });
  }
  
});