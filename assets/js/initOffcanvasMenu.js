export default function initOffcanvasMenu() {
  const hamburger = document.querySelector('.mobile-menu-open-button');
  if (!hamburger) return;
  const close = document.querySelector('.mobile-menu-close-button');

  hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.container').classList.toggle('is-open');
    document.querySelector('.mobile-menu').classList.toggle('active');
    document.querySelector('.gallery').classList.toggle('locked');
  });
  close.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.container').classList.toggle('is-open');
    document.querySelector('.mobile-menu').classList.toggle('active');
    document.querySelector('.gallery').classList.toggle('locked');
  });
}
