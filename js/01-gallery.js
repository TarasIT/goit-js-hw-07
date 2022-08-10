import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector("div.gallery");
let originalImage;

const imagesGrid = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item"><a class="gallery__link" href=${original}><img class= "gallery__image" src=${preview} data-source=${original} alt="${description}" width = 340></a></div>`;
  })
  .join("");
galleryList.innerHTML = imagesGrid;

function selectImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  originalImage = basicLightbox.create(
    `<img src=${event.target.dataset.source} width="1280">`
  );

  galleryList.addEventListener("keydown", closeImageByEsc);
  return originalImage.show();
}

function closeImageByEsc(event) {
  if (event.code === "Escape") {
    galleryList.removeEventListener("keydown", closeImageByEsc);
    return originalImage.close();
  }
}

galleryList.addEventListener("click", selectImage);
