// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const divGallery = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"  />
        </a>
        `;
    })
    .join('');
}

divGallery.innerHTML = createGalleryMarkup(galleryItems);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
// Описан в документации

console.log(galleryItems);
console.log(SimpleLightbox);
