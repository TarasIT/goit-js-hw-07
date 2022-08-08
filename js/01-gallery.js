import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector("div.gallery");

const previewImagesGrid = galleryItems
  .map((galleryItem) => {
    const { preview, original, description } = galleryItem;
    return `<div class="gallery__item"><a class="gallery__link" href=${original}><img class= "gallery__image" src=${preview} data-source=${original} alt="${description}" width = 340></a></div>`;
  })
  .join("");
galleryList.innerHTML = previewImagesGrid;

const originalImages = document.querySelectorAll("img.gallery__image");
const originalImage = document.querySelector("img.gallery__image");
console.log(originalImages);
console.log(originalImage.dataset.source);

const selectImage = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  document.querySelector("img.gallery__image").onclick = () => {
    originalImages.forEach((img) => {
      event.preventDefault();
      console.log(img.dataset.source);
      basicLightbox.create(`<img ${img.dataset.source} width = 1280>`).show();
    });
  };
};

galleryList.addEventListener("click", selectImage);
