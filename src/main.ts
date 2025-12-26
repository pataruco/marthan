import "./styles/index.css";
import { paths } from "./paths";

const galleryWrapper = document.querySelector(".gallery");

const renderGallery = () => {
	let gallery = ``;

	console.log({ paths });
	paths.forEach(({ imgSrc, footnote, year }) => {
		gallery += `
      <a data-fslightbox="gallery" href="${imgSrc}" data-type="image">
        <img src="${imgSrc}" alt="${footnote ? footnote.join(", ") : ""}">
      </a>
    `;
	});

	if (galleryWrapper) {
		galleryWrapper.innerHTML = gallery;
	}

	// Refresh FSLightbox to recognize new images
	if (typeof refreshFsLightbox !== "undefined") {
		refreshFsLightbox();
	}
};

document.addEventListener("DOMContentLoaded", renderGallery);
