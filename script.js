const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

openModalBtn.addEventListener('click', () => {
  modal.classList.add('show'); // Add 'show' class to start animation
  modal.style.display = 'flex'; // Show modal
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show'); // Remove 'show' class to reset animation
  setTimeout(() => {
    modal.style.display = 'none'; // Hide modal after animation ends
  }, 300); // Match the duration of the animation
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 100);
  }
});
const button = document.querySelector('.menu__mobile_button');
const header = document.querySelector('.header-nav-content');
button.addEventListener('click', () => {
  button.classList.toggle('active');
});
button.addEventListener('click', () => {
  header.classList.toggle('show');
});
button.addEventListener('click', () => {
  document.body.classList.toggle('no-scroll');
});
