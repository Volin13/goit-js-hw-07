import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryContainer = document.querySelector(".gallery");
let instance;

galleryContainer.innerHTML = makeGalleryMarkup(galleryItems);

galleryContainer.addEventListener("click", onClickGalleryImage);

document.addEventListener("keydown", closeModalbyEsc);

function makeGalleryMarkup(gallery) {
  const markup = gallery.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}" 
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
    `;
  });
  return markup.join("");
}

function onClickGalleryImage(e) {
  e.preventDefault();
  const isGalleryImage = e.target.classList.contains("gallery__image");

  if (!isGalleryImage) {
    return;
  }

  const imageUrl = e.target.dataset.source;
  console.log(imageUrl);

  instance = basicLightbox.create(`
    <img src="${imageUrl}" width="800" height="600">
    `);
  instance.show();
}

function closeModalbyEsc(e) {
  console.log(e);
  if (e.code === "Escape") {
    instance.close();
  }
}
