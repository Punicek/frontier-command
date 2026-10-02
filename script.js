'use strict';

// Public access link only. Access credentials are never stored by this site.
const downloadUrl = 'https://drive.proton.me/urls/1HKXAG1F7G#4tjVvJ1v7rZ9';
document.querySelectorAll('[data-download-link]').forEach(link => {
  link.href = downloadUrl;
});

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
function closeNavigation() {
  navigation.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNavigation));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeNavigation();
    menuToggle.focus();
  }
});

const dialog = document.querySelector('#gallery-dialog');
const enlargedImage = document.querySelector('#lightbox-image');
const lightboxTitle = document.querySelector('#lightbox-title');
let galleryTrigger = null;
document.querySelectorAll('.gallery-link').forEach(link => {
  link.addEventListener('click', event => {
    if (typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    galleryTrigger = link;
    const image = link.querySelector('img');
    enlargedImage.src = link.href;
    enlargedImage.alt = image.alt;
    lightboxTitle.textContent = link.closest('figure').querySelector('h3').textContent;
    dialog.showModal();
  });
});
document.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  enlargedImage.removeAttribute('src');
  galleryTrigger?.focus();
});

// Load the official YouTube embed only after an explicit viewer action.
document.querySelector('#load-video').addEventListener('click', () => {
  const player = document.createElement('iframe');
  player.src = 'https://www.youtube-nocookie.com/embed/HvWv-VQ9XXM?autoplay=1';
  player.title = 'Frontier Command – From Prototype to Alpha | Development Progress';
  player.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
  player.allowFullscreen = true;
  player.referrerPolicy = 'strict-origin-when-cross-origin';
  document.querySelector('#video-frame').replaceChildren(player);
});
