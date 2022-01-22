import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const itemsGallaryMarkup = createGallaryItemsMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', itemsGallaryMarkup);

galleryRef.addEventListener('click', onImageClick);

function createGallaryItemsMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview: previewLinkImg, original: originalLinkImg, description }) => {
        return `
      <div class="gallery__item">
            <a class="gallery__link" href="${originalLinkImg}">
                <img
                    class="gallery__image"
                    src="${previewLinkImg}"
                    data-source="${originalLinkImg}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
      },
    )
    .join('');
}

function onImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') return;

  const originalSizeImageLink = e.target.dataset.source;

  openModal(originalSizeImageLink);
}

function openModal(link) {
  const modal = basicLightbox.create(
    `
      <img src="${link}" width="800" height="600">
  `,
  );

  modal.show();

  window.addEventListener('keydown', closeModalOnEscPress);

  function closeModalOnEscPress(e) {
    const code = e.code;
    onEscKeyPress(code, modal);
    window.removeEventListener('keydown', closeModalOnEscPress);
  }
}

function onEscKeyPress(code, modal) {
  if (code === 'Escape') {
    console.log(code);
    closeModal(modal);
  }
}

function closeModal(modal) {
  modal.close();
}
