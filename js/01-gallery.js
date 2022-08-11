import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector("div.gallery");

const imagesGrid = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item"><a class="gallery__link" href=${original}><img class= "gallery__image" src=${preview} data-source=${original} alt="${description}" width = 340></a></div>`;
  })
  .join("");
galleryList.innerHTML = imagesGrid;

const instance = basicLightbox.create(`<img src="" width="1280">`, {
  onShow: (instance) => {
    window.addEventListener("keydown", closeImageByEsc);
  },
  onClose: (instance) => {
    window.removeEventListener("keydown", closeImageByEsc);
  },
});

function onImageClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  instance.element().querySelector("img").src = event.target.dataset.source;
  instance.show();
}

function closeImageByEsc(event) {
  if (event.code === "Escape") {
    return instance.close();
  }
}

galleryList.addEventListener("click", onImageClick);
