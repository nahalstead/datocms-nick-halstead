export default function initOffcanvasMenu() {
  const hamburger = document.querySelector('.mobile-menu-open-button');
  if (!hamburger) return;

  hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.container').classList.toggle('is-open');
    document.querySelector('.mobile-menu').classList.toggle('active');
    document.querySelector('.gallery').classList.toggle('locked');
  });
}
