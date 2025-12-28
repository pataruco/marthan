import '../components/header';
import '../components/footer';
import '../components/cookies';

import { paths } from '../shared/paths';

const galleryWrapper = document.querySelector('.gallery');

const renderGallery = () => {
  let gallery = ``;
  paths.forEach(({ imgSrc, footnote, year }, index) => {
    gallery += `
		<a data-slide-number="${index}"
		  data-type="image"
			data-fslightbox="gallery"
			href="${imgSrc}"
			data-caption="${footnote ? footnote.join(', ') : ''}"
		>
		  <picture>
				<img src="${imgSrc}" alt="${footnote ? footnote.join(', ') : ''}" loading="lazy" class="gallery-image">
		  </picture>
		  <footer>
				<p>
				 ${year ? `<time datetime="${year}">${year}</time>` : 'Fecha desconocida'}
				</p>
				${footnote ? footnote.map((item) => `<p>${item}</p>`).join('') : ''}
		  </footer>
		</a>
    `;
  });

  if (galleryWrapper) {
    galleryWrapper.innerHTML = gallery;
  }

  // @ts-expect-error
  if (typeof refreshFsLightbox !== 'undefined') {
    // @ts-expect-error
    refreshFsLightbox();
  }
};

document.addEventListener('DOMContentLoaded', renderGallery);
