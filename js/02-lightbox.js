import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector("ul.gallery");

const imagesGrid = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href=${original}><img class= "gallery__image" src=${preview} alt="${description}" width = 340></a>`;
  })
  .join("");
galleryList.innerHTML = imagesGrid;

let lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});
