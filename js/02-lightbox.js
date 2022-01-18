import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const itemsGallaryMarkup = createGallaryItemsMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', itemsGallaryMarkup);

galleryRef.addEventListener('click', openLightbox);

function createGallaryItemsMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview: previewLinkImg, original: originalLinkImg, description }) => {
        return `
        <a class="gallery__item" href="${originalLinkImg}">
            <img class="gallery__image" src="${previewLinkImg}" alt="${description}" />
        </a>
          `;
      },
    )
    .join('');
}

function openLightbox(e) {
  e.preventDefault();

  const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });
  console.log(lightbox);

  lightbox.open();
}
